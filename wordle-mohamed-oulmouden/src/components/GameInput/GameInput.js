import { useContext, useEffect, useState } from "react";
import styles from "./GameInput.module.css";
import GameContext from "../../context/GameContext";

export default function GameInput() {
  const rows = 6;
  const columns = 5;

  const {
    cellContent,
    handleGameEvent,
    cellsResult,
    word,
    currentRow,
    submit,
    setSubmit,
  } = useContext(GameContext);

  useEffect(() => {
    if (!submit) return;

    let timeoutId;
    setTimeout(() => {
      timeoutId = setSubmit(false);
    }, 1000);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [submit]);

  function getClassName(rowIndex, colIndex) {
    if (cellContent[rowIndex][colIndex] === "") {
      return styles.empty;
    } else if (
      cellContent[rowIndex][colIndex] !== "" &&
      cellsResult[rowIndex][colIndex] === ""
    ) {
      return styles.filled;
    } else if (
      cellContent[rowIndex][colIndex] !== "" &&
      cellsResult[rowIndex][colIndex] === "correct"
    ) {
      return styles.correct;
    } else if (
      cellContent[rowIndex][colIndex] !== "" &&
      cellsResult[rowIndex][colIndex] === "incorrect"
    ) {
      return styles.incorrect;
    } else if (
      cellContent[rowIndex][colIndex] !== "" &&
      cellsResult[rowIndex][colIndex] === "included"
    ) {
      return styles.includes;
    }
  }

  return (
    <div className={styles.container}>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div
          className={`${styles.row} ${
            submit && rowIndex === currentRow ? styles.winningAnimation : ""
          }`}
          key={`row-${rowIndex}`}
        >
          {Array.from({ length: columns }).map((_, colIndex) => (
            <button
              onDrop={(e) => {
                e.preventDefault();
                const letter = e.dataTransfer.getData("letter");
                handleGameEvent(letter);
              }}
              onDragOver={(e) => e.preventDefault()}
              className={`${styles.gameInput} ${getClassName(
                rowIndex,
                colIndex
              )}`}
              style={{ "--animation-duration": `${(colIndex + 1) * 0.2}s` }}
              key={`col-${colIndex}`}
            >
              <h1 className={styles.cellText}>
                {cellContent[rowIndex][colIndex]}
              </h1>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
