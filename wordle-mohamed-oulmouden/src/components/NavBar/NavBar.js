import { useContext } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import GameContext from "../../context/GameContext";

export default function NavBar() {
  const { setCurrentGameType } = useContext(GameContext);

  return (
    <div className={styles.container}>
      <div className={styles.navigationContainer}>
        <Link to="/games">
          <img
            className={styles.logo}
            src="/assets/icons/logo.svg"
            alt="logo"
          ></img>
        </Link>
        <div className={styles.navigation}>
          <Link
            to="/games"
            onClick={() => {
              setCurrentGameType("NONE");
            }}
          >
            <img
              className={styles.gamesIcon}
              src="/assets/icons/games.svg"
              alt="games"
            ></img>
          </Link>
          <Link to="/guide">
            <img
              className={styles.guideIcon}
              src="/assets/icons/guide.svg"
              alt="guide"
            ></img>
          </Link>
          <ToggleSwitch />
        </div>
      </div>
    </div>
  );
}
