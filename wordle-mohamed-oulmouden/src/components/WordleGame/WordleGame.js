import React, { useContext, useEffect } from "react";
import styles from "./WordleGame.module.css";
import GameContext from "../../context/GameContext";
import { useNavigate } from "react-router-dom";

export default function WordleGame() {
  const {
    currentColumn,
    currentRow,
    word,
    cellContent,
    cellsResult,
    gameFinished,
    darkMode,
    firstRow,
    secondRow,
    thirdRow,
    currentGameType,
    setCurrentGameType,
  } = useContext(GameContext);

  useEffect(() => {
    if (word === "NONE" || currentGameType !== "DAILY") return;
    const saveStateToLocalStorage = () => {
      localStorage.setItem(
        "gameState",
        JSON.stringify({
          currentColumn,
          currentRow,
          word,
          cellContent,
          cellsResult,
          gameFinished,
          darkMode,
          firstRow,
          secondRow,
          thirdRow,
        })
      );
    };
    saveStateToLocalStorage();
  }, [
    currentColumn,
    currentRow,
    word,
    cellContent,
    cellsResult,
    firstRow,
    secondRow,
    thirdRow,
    gameFinished,
    darkMode,
    currentGameType,
  ]);

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.modeContainer}>
        <img
          className={styles.logo}
          src="/assets/icons/logo.svg"
          alt="logo"
        ></img>
        <h1 className={styles.title}>Choose Your Game Mode</h1>
        <h3>Choose how you'd like to play today!</h3>

        <div className={styles.buttonContainer}>
          <p>One word a day. Can you guess it?</p>
          <button
            className={styles.button}
            onClick={() => {
              setCurrentGameType("DAILY");
              navigate("/games/daily");
            }}
          >
            <h1>Daily Puzzle</h1>
          </button>
        </div>
        <div className={styles.buttonContainer}>
          <p>Play endlessly. No limits, just fun!</p>
          <button
            className={styles.button}
            onClick={() => {
              setCurrentGameType("UNLIMITED");
              navigate("/games/unlimited");
            }}
          >
            <h1>Unlimited Puzzles</h1>
          </button>
        </div>

        <h1 className={styles.footer}>
          Enjoy your game and have fun with every play!
          <br />
          <br />
          Good Luck! 🍀
        </h1>
      </div>
    </div>
  );
}
