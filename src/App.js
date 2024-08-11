import "./App.css";
import { useEffect, useState, useCallback } from "react";
import Line from "./conponents/Line";
import DarkModeToggle from "./conponents/DarkModeToggle";
import Keyboard from "./conponents/Keyboard";
import EndGamePopup from "./conponents/EndGamePopUp";

const API_URL = "/words.json";
const WORD_LENGTH = 5;
const MAX_GUESSES = 6;

function App() {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState(Array(MAX_GUESSES).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [usedLetters, setUsedLetters] = useState({});
  const [isWin, setIsWin] = useState(false);
  const [validWords, setValidWords] = useState([]);

  const resetGame = useCallback(() => {
    setGuesses(Array(MAX_GUESSES).fill(null));
    setCurrentGuess("");
    setIsGameOver(false);
    setUsedLetters({});
    setIsWin(false);
    fetchNewWord();
  }, []);

  const fetchNewWord = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Response was not ok");
      }
      const words = await response.json();
      const randomWord = words[Math.floor(Math.random() * words.length)];
      setSolution(randomWord.toLowerCase());
      setValidWords(words.map((word) => word.toLowerCase()));
    } catch (error) {
      console.error("Failed to fetch words:", error);
    }
  };

  const isValidWord = useCallback(
    (word) => {
      return validWords.includes(word.toLowerCase());
    },
    [validWords]
  );

  const handleKeyPress = useCallback(
    (key) => {
      if (isGameOver) return;

      if (key === "Enter") {
        if (currentGuess.length !== WORD_LENGTH) return;

        if (!isValidWord(currentGuess)) {
          animateInvalidWord();
          return;
        }

        const newGuesses = [...guesses];
        const emptyIndex = newGuesses.findIndex((val) => val == null);
        if (emptyIndex === -1) return;

        newGuesses[emptyIndex] = currentGuess;
        setGuesses(newGuesses);

        const newUsedLetters = { ...usedLetters };
        for (let i = 0; i < currentGuess.length; i++) {
          const letter = currentGuess[i];
          if (solution[i] === letter) {
            newUsedLetters[letter] = "correct";
          } else if (
            solution.includes(letter) &&
            newUsedLetters[letter] !== "correct"
          ) {
            newUsedLetters[letter] = "close";
          } else if (!newUsedLetters[letter]) {
            newUsedLetters[letter] = "incorrect";
          }
        }
        setUsedLetters(newUsedLetters);

        setCurrentGuess("");

        if (solution === currentGuess) {
          setIsWin(true);
          setIsGameOver(true);
        } else if (emptyIndex === MAX_GUESSES - 1) {
          setIsGameOver(true);
        }
      } else if (key === "Backspace") {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (
        currentGuess.length < WORD_LENGTH &&
        key.length === 1 &&
        key.match(/^[a-z]$/i)
      ) {
        setCurrentGuess((prev) => prev + key.toLowerCase());
      }
    },
    [isGameOver, currentGuess, isValidWord, guesses, usedLetters, solution]
  );

  const animateInvalidWord = () => {
    const boardElement = document.querySelector(".board-container");
    if (boardElement) {
      boardElement.classList.add("invalid-word");
      setTimeout(() => {
        boardElement.classList.remove("invalid-word");
      }, 500);
    }
  };

  useEffect(() => {
    const handleType = (event) => handleKeyPress(event.key);
    window.addEventListener("keydown", handleType);
    return () => window.removeEventListener("keydown", handleType);
  }, [handleKeyPress]);

  useEffect(() => {
    fetchNewWord();
  }, []);

  return (
    <div className="game-container">
      <header>
        <h1>Wordle</h1>
        <div className="header-content">
          <div className="header-spacer"></div>
          <DarkModeToggle />
        </div>
      </header>
      <div className="board-container">
        <div className="board">
          {guesses.map((guess, i) => {
            const isCurrentGuess =
              i === guesses.findIndex((val) => val == null);
            return (
              <Line
                key={i}
                guess={isCurrentGuess ? currentGuess : guess ?? ""}
                isFinal={!isCurrentGuess && guess != null}
                solution={solution}
              />
            );
          })}
        </div>
        <Keyboard onKeyPress={handleKeyPress} usedLetters={usedLetters} />
        {isGameOver && (
          <EndGamePopup
            isWin={isWin}
            solution={solution}
            onPlayAgain={resetGame}
          />
        )}
      </div>
    </div>
  );
}

export default App;
