import React, { useContext, useEffect } from "react";
import styles from "../WordleGame.module.css";
import GameContext from "../../../context/GameContext";
import Victory from "../../Victory/Victory";
import GameInput from "../../GameInput/GameInput";
import GameKeyBoard from "../../GameKeyBoard/GameKeyBoard";

export default function Unlimited() {
  const { showPopUp, handleReplay } = useContext(GameContext);

  useEffect(() => {
    handleReplay();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.container}>
      <GameInput />
      <GameKeyBoard />
      {showPopUp && <Victory></Victory>}
    </div>
  );
}
