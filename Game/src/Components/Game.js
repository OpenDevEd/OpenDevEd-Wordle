import React, { useEffect } from "react";
import useGameUtils from "../hooks/GameUtils";
import Ydivs from "./Ydivs";
import ShowedKeyboard from "./ShowedKeyboard";
import ResultPoPup from "./ResultPoPup";

export default function Game({ word }) {
  const {
    currentGuess,
    duplicate,
    countGuess,
    GuessesArray,
    UsedKeys,
    correctGuess,
    keyUpHandler,
  } = useGameUtils(word);
  const [showOuput, setShowOutput] = React.useState(false);

  useEffect(() => {
    window.addEventListener("keyup", keyUpHandler);
    if (duplicate) {
      setTimeout(() => {
        setShowOutput(true);
      }, 1000);
    }
    if (correctGuess) {
      setTimeout(() => {
        setShowOutput(true);
      }, 1000);
      window.removeEventListener("keyup", keyUpHandler);
    }

    if (countGuess > 5) {
      setTimeout(() => {
        setShowOutput(true);
      }, 1000);
      window.removeEventListener("keyup", keyUpHandler);
    }

    return () => window.removeEventListener("keyup", keyUpHandler);
  }, [keyUpHandler, correctGuess, countGuess, duplicate]);

  return (
    <div>
      <h1>🟨 Guess A word 🟩</h1>
      <Ydivs
        currentGuess={currentGuess}
        GuessesArray={GuessesArray}
        countGuess={countGuess}
      />
      <ShowedKeyboard UsedKeys={UsedKeys} />
      {showOuput && (
        <ResultPoPup
          correctGuess={correctGuess}
          duplicate={duplicate}
          countGuess={countGuess}
          word={word}
        />
      )}
    </div>
  );
}
