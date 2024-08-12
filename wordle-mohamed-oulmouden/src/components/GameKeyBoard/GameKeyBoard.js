import { useContext } from "react";
import styles from "./GameKeyBoard.module.css";
import GameContext from "../../context/GameContext";

export default function GameKeyBoard() {
  const { firstRow, secondRow, thirdRow, handleGameEvent } =
    useContext(GameContext);

  function handleDragStart(e, letter) {
    e.dataTransfer.setData("letter", letter);
  }

  return (
    <div className={styles.container}>
      <div className={styles.lastRow}>
        <button
          className={`${styles.ideaKey} ${styles.scaleUpAnimation}`}
          onClick={() => {
            handleGameEvent("hint");
          }}
          style={{
            "--time": `${700}ms`,
          }}
        >
          <img src="/assets/icons/idea.svg" alt="idea"></img>
          <h1>Hint!</h1>
        </button>
        <button
          onClick={() => {
            handleGameEvent("clear");
          }}
          className={`${styles.clearKey} ${styles.scaleUpAnimation}`}
          style={{
            "--time": `${700}ms`,
          }}
        >
          <img src="/assets/icons/clear.svg" alt="clear"></img>
          <h1>Clear!</h1>
        </button>
      </div>
      <div className={styles.keyboardContainer}>
        <div className={styles.firstRow}>
          {firstRow.map((letter, index) => (
            <button
              draggable={true}
              onDragStart={(e) => handleDragStart(e, letter.letter)}
              onClick={() => {
                handleGameEvent(letter.letter);
              }}
              key={letter.id}
              className={`${styles.letter} ${styles.scaleUpAnimation}`}
              style={{
                "--time": `${(index + 1) * 100}ms`,
                "--background": `${letter.color}`,
              }}
            >
              {letter.letter}
            </button>
          ))}
        </div>
        <div className={styles.secondRow}>
          {secondRow.map((letter, index) => (
            <button
              draggable={true}
              onDragStart={(e) => handleDragStart(e, letter.letter)}
              onClick={() => {
                handleGameEvent(letter.letter);
              }}
              key={letter.id}
              className={`${styles.letter} ${styles.scaleUpAnimation}`}
              style={{
                "--time": `${(index + 1) * 100}ms`,
                "--background": `${letter.color}`,
              }}
            >
              {letter.letter}
            </button>
          ))}
        </div>
        <div className={styles.thirdRow}>
          {thirdRow.map((letter, index) =>
            letter.letter === "erase" || letter.letter === "ENTER" ? (
              <>
                {letter.letter === "erase" ? (
                  <button
                    onClick={() => {
                      handleGameEvent(letter.letter);
                    }}
                    key={letter.id}
                    className={`${styles.eraseKey} ${styles.scaleUpAnimation}`}
                    style={{
                      "--time": `${700}ms`,
                      "--background": `${letter.color}`,
                    }}
                  >
                    <img src="/assets/icons/erase.svg" alt="erase"></img>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleGameEvent(letter.letter);
                    }}
                    key={letter.id}
                    className={`${styles.enterKey} ${styles.scaleUpAnimation}`}
                    style={{
                      "--time": `${700}ms`,
                      "--background": `${letter.color}`,
                    }}
                  >
                    <img src="/assets/icons/submit.svg" alt="submit"></img>
                  </button>
                )}
              </>
            ) : (
              <button
              key={letter.id}
                draggable={true}
                onDragStart={(e) => handleDragStart(e, letter.letter)}
                onClick={() => {
                  handleGameEvent(letter.letter);
                }}
                className={`${styles.letter} ${styles.scaleUpAnimation}`}
                style={{
                  "--time": `${(index + 1) * 100}ms`,
                  "--background": `${letter.color}`,
                }}
              >
                {letter.letter}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
