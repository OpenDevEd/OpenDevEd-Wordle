import "./App.css";
import { useEffect, useState, useCallback } from "react";

const API_URL = "/words.json";
const WORD_LENGTH = 5;
const MAX_GUESSES = 6;

const KEYBOARD_ROWS = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"],
];

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
                guess={isCurrentGuess ? currentGuess : (guess ?? "")}
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

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <button
      className="mode-toggle"
      onClick={toggleDarkMode}
      aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDarkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mode-icon"
        >
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mode-icon"
        >
          <path
            fillRule="evenodd"
            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
}

function Line({ guess, isFinal, solution }) {
  const tiles = [];

  for (let i = 0; i < WORD_LENGTH; i++) {
    const char = guess[i];
    let className = "tile";

    if (isFinal) {
      if (char === solution[i]) {
        className += " correct";
      } else if (solution.includes(char)) {
        className += " close";
      } else {
        className += " incorrect";
      }
    }

    tiles.push(
      <div key={i} className={className}>
        {char}
      </div>
    );
  }

  return <div className="line">{tiles}</div>;
}

function Keyboard({ onKeyPress, usedLetters }) {
  return (
    <div className="keyboard">
      {KEYBOARD_ROWS.map((row, i) => (
        <div key={i} className="keyboard-row">
          {row.map((key) => {
            let className = "key";
            if (usedLetters[key]) {
              className += ` ${usedLetters[key]}`;
            }
            return (
              <button
                key={key}
                className={className}
                onClick={() => onKeyPress(key)}
              >
                {key === "Backspace" ? "←" : key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function EndGamePopup({ isWin, solution, onPlayAgain }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        onPlayAgain();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onPlayAgain]);

  return (
    <div className="popup-overlay">
      <div className="popup animate-pop">
        <h2>{isWin ? "Congratulations!" : "Game Over"}</h2>
        <p>{isWin ? "You guessed the word!" : `The word was: ${solution}`}</p>
        <button onClick={onPlayAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default App;
