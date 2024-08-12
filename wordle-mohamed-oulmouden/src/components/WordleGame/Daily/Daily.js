import React, { useContext, useEffect } from "react";
import styles from "../WordleGame.module.css";
import GameContext from "../../../context/GameContext";
import Victory from "../../Victory/Victory";
import GameInput from "../../GameInput/GameInput";
import GameKeyBoard from "../../GameKeyBoard/GameKeyBoard";

export default function Daily() {
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
    showPopUp,
    currentGameType,
    setCurrentColumn,
    setCurrentRow,
    setWord,
    setCellContent,
    setCellsResult,
    setGameFinished,
    setFirstRow,
    setSecondRow,
    setThirdRow,
    setWordsList,
    fetchWords,
    setDarkMode,
  } = useContext(GameContext);

  useEffect(() => {
    const loadStateFromLocalStorage = () => {
      const savedState = JSON.parse(localStorage.getItem("gameState"));
      if (savedState) {
        setCurrentColumn(savedState.currentColumn);
        setCurrentRow(savedState.currentRow);
        setWord(savedState.word);
        setCellContent(savedState.cellContent);
        setCellsResult(savedState.cellsResult);
        setGameFinished(savedState.gameFinished);
        setFirstRow(savedState.firstRow);
        setSecondRow(savedState.secondRow);
        setThirdRow(savedState.thirdRow);

        const getWordsList = async () => {
          try {
            const response = await fetch("/json/words.json");
            const data = await response.json();
            setWordsList(data.words);
          } catch (error) {
            console.error("Error fetching the words:", error);
          }
        };
        getWordsList();
      } else {
        fetchWords();
      }
    };

    loadStateFromLocalStorage();
    // eslint-disable-next-line
  }, []);

 
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

  return (
    <div className={styles.container}>
      <GameInput />
      <GameKeyBoard />
      {showPopUp && <Victory></Victory>}
    </div>
  );
}
