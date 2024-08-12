import styles from "./Victory.module.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import victoryLottie from "./lottie/victory.lottie";
import losesLottie from "./lottie/lose.lottie";
import winningEffect from "./lottie/winnint_effect.lottie";
import { useContext, useState, useEffect } from "react";
import GameContext from "../../context/GameContext";

export default function Victory() {
  const { word, winState, cellsResult, setShowPopUp, handleGameEvent, currentGameType } =
    useContext(GameContext);

  const [correctLetters, setCorrectLetters] = useState(0);
  const [wrongSpots, setWrongSpots] = useState(0);
  const [wrongLetters, setWrongLetters] = useState(0);

  useEffect(() => {
    let correctLetters = 0;
    let wrongSpots = 0;
    let wrongLetters = 0;

    cellsResult.forEach((row) => {
      row.forEach((cell) => {
        if (cell === "correct") {
          correctLetters++;
        } else if (cell === "included") {
          wrongSpots++;
        } else if (cell === "incorrect") {
          wrongLetters++;
        }
      });
    });

    setCorrectLetters(correctLetters);
    setWrongSpots(wrongSpots);
    setWrongLetters(wrongLetters);
  }, [cellsResult]);


  return (
    <div className={styles.container}>
      <div className={styles.popUp}>
        <h1 className={styles.title}>{winState ? "Victory!" : "Game Over!"}</h1>
        <DotLottieReact
          src={winState ? victoryLottie : losesLottie}
          autoplay
          style={{
            height: "30%",
            width: "50%",
          }}
        />
        <div className={styles.middleContainer}>
          <h2 className={styles.theWord}>
            {winState ? (
              "You have successfully guessed the word!"
            ) : (
              <>
                Unfortunately, you didn't guess the word this time.
                <br />
                The word was
                <br />
                <span> {word}</span>
              </>
            )}
          </h2>
          <div className={styles.line}></div>
          <div className={styles.statisticsContainer}>
            <div className={styles.statistics}>
              <h1>Correct letters</h1>
              <p>{correctLetters}</p>
            </div>
            <div className={styles.verticalLine}></div>
            <div className={styles.statistics}>
              <h1>Wrong spots</h1>
              <p>{wrongSpots}</p>
            </div>
            <div className={styles.verticalLine}></div>
            <div className={styles.statistics}>
              <h1>Wrong letters</h1>
              <p>{wrongLetters}</p>
            </div>
          </div>
        </div>
        <div className={styles.buttonsContainer}>
          <button
            className={styles.replay}
            onClick={() => {
              setShowPopUp(false);
              currentGameType === "UNLIMITED" && handleGameEvent("replay");
            }}
          >
            <h1>
              {
                currentGameType === "DAILY"? "Continue" : "Replay"
              }
              </h1>
          </button>
        </div>
        {winState && (
          <DotLottieReact
            className={styles.winningEffect}
            src={winningEffect}
            autoplay
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        )}
      </div>
    </div>
  );
}
