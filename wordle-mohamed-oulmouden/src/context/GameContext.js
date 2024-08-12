import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const GameContext = createContext(null);

export const GameProvider = ({ children }) => {
  const [currentColumn, setCurrentColumn] = useState(0);
  const [currentRow, setCurrentRow] = useState(0);
  const [word, setWord] = useState("NONE");
  const [submit, setSubmit] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [currentGameType, setCurrentGameType] = useState("NONE");
  const [winState, setWinState] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const [cellContent, setCellContent] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);

  const [cellsResult, setCellsResult] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);

  const [firstRow, setFirstRow] = useState([
    { letter: "Q", color: "#ffffff26" },
    { letter: "W", color: "#ffffff26" },
    { letter: "E", color: "#ffffff26" },
    { letter: "R", color: "#ffffff26" },
    { letter: "T", color: "#ffffff26" },
    { letter: "Y", color: "#ffffff26" },
    { letter: "U", color: "#ffffff26" },
    { letter: "I", color: "#ffffff26" },
    { letter: "O", color: "#ffffff26" },
    { letter: "P", color: "#ffffff26" },
  ]);

  const [secondRow, setSecondRow] = useState([
    { letter: "A", color: "#ffffff26" },
    { letter: "S", color: "#ffffff26" },
    { letter: "D", color: "#ffffff26" },
    { letter: "F", color: "#ffffff26" },
    { letter: "G", color: "#ffffff26" },
    { letter: "H", color: "#ffffff26" },
    { letter: "J", color: "#ffffff26" },
    { letter: "K", color: "#ffffff26" },
    { letter: "L", color: "#ffffff26" },
  ]);

  const [thirdRow, setThirdRow] = useState([
    { letter: "ENTER", color: "#ffffff26" },
    { letter: "Z", color: "#ffffff26" },
    { letter: "X", color: "#ffffff26" },
    { letter: "C", color: "#ffffff26" },
    { letter: "V", color: "#ffffff26" },
    { letter: "B", color: "#ffffff26" },
    { letter: "N", color: "#ffffff26" },
    { letter: "M", color: "#ffffff26" },
    { letter: "erase", color: "#ffffff26" },
  ]);

  const [wordsList, setWordsList] = useState([]);

  const fetchWords = async () => {
    try {
      const response = await fetch("/json/words.json");
      const data = await response.json();
      const randomWord =
        data.words[Math.floor(Math.random() * data.words.length)];
      setWord(randomWord.toUpperCase());
      setWordsList(data.words);
    } catch (error) {
      console.error("Error fetching the words:", error);
    }
  };

  function setLetterColor(color, letter) {
    if (firstRow.some((l) => l.letter === letter)) {
      setFirstRow((prevRow) =>
        prevRow.map((l) => (l.letter === letter ? { ...l, color } : l))
      );
    } else if (secondRow.some((l) => l.letter === letter)) {
      setSecondRow((prevRow) =>
        prevRow.map((l) => (l.letter === letter ? { ...l, color } : l))
      );
    } else if (thirdRow.some((l) => l.letter === letter)) {
      setThirdRow((prevRow) =>
        prevRow.map((l) => (l.letter === letter ? { ...l, color } : l))
      );
    }
  }

  function validateAnswer() {
    if (currentRow > 5 || gameFinished) {
      toast.info(
        "You've played today's word! Try Unlimited Puzzles or come back tomorrow!",
        {
          pauseOnHover: false,
          progress: undefined,
        }
      );
      return;
    }

    const Answer = cellContent[currentRow].join("");
    if (Answer.length !== 5) {
      setSubmit(true);
      toast.info("Almost there! Just a few more letters needed.", {
        pauseOnHover: false,
        progress: undefined,
      });
      return;
    } else if (!wordsList.includes(Answer)) {
      toast.info("Hmm, that's not in my dictionary. Try again!", {
        pauseOnHover: false,
        progress: undefined,
      });
      setSubmit(true);
      return;
    }
    for (let i = 0; i < word.length; i++) {
      if (word[i] === Answer[i]) {
        setCellsResult((prevContent) => {
          const newContent = [...prevContent];
          newContent[currentRow][i] = "correct";
          return newContent;
        });
        setLetterColor("#3e9f1c", Answer[i]);
      } else if (word.includes(Answer[i])) {
        setCellsResult((prevContent) => {
          const newContent = [...prevContent];
          newContent[currentRow][i] = "included";
          return newContent;
        });
        setLetterColor("#c39318", Answer[i]);
      } else {
        setCellsResult((prevContent) => {
          const newContent = [...prevContent];
          newContent[currentRow][i] = "incorrect";
          return newContent;
        });
        setLetterColor("#2a2a2c", Answer[i]);
      }
    }
    if (word === Answer) {
      setGameFinished(true);
      setTimeout(() => {
        setSubmit(true);
      }, 800);
      setWinState(true);
      setTimeout(() => {
        setShowPopUp(true);
      }, 1400);
    } else if (currentRow === 5) {
      setGameFinished(true);
      setWinState(false);
      setTimeout(() => {
        setShowPopUp(true);
      }, 800);
    } else {
      setCurrentRow((prevRow) => prevRow + 1);
      setCurrentColumn(0);
    }
  }

  function handleHint() {
    handleLetterInput(word[currentColumn]);
  }

  function handleGameEvent(key) {
    if (key === "replay") {
      handleReplay();
    } else if (showPopUp) {
      return;
    } else if (key === "clear") {
      handleClearRow();
      return;
    } else if (key === "ENTER") {
      validateAnswer();
    } else if (key === "erase") {
      handleEraseLetter();
    } else if (key === "hint") {
      handleHint();
    } else {
      handleLetterInput(key);
    }
  }

  function handleReplay() {
    setCellContent((prevContent) =>
      prevContent.map((row) => row.map(() => ""))
    );
    setCellsResult((prevContent) =>
      prevContent.map((row) => row.map(() => ""))
    );
    setThirdRow((prevRow) =>
      prevRow.map((item) => ({
        ...item,
        color: "#ffffff26",
      }))
    );
    setSecondRow((prevRow) =>
      prevRow.map((item) => ({
        ...item,
        color: "#ffffff26",
      }))
    );
    setFirstRow((prevRow) =>
      prevRow.map((item) => ({
        ...item,
        color: "#ffffff26",
      }))
    );
    setShowPopUp(false);
    fetchWords();
    setCurrentColumn(0);
    setCurrentRow(0);
    setGameFinished(false);
    setSubmit(false);
  }

  function handleClearRow() {
    if (gameFinished || currentRow === 6) return;
    setCellContent((prevContent) => {
      const newContent = prevContent.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (rowIndex === currentRow) {
            return "";
          }
          return cell;
        })
      );
      return newContent;
    });
    setCurrentColumn(0);
  }

  function handleEraseLetter() {
    if (gameFinished || currentRow === 6) return;
    setCellContent((prevContent) => {
      const newContent = [...prevContent];
      for (let j = newContent[currentRow].length - 1; j >= 0; j--) {
        if (newContent[currentRow][j] !== "") {
          newContent[currentRow][j] = "";
          return newContent;
        }
      }
      return newContent;
    });
    if (currentColumn === 0) {
      return;
    } else {
      setCurrentColumn((prevColumn) => prevColumn - 1);
    }
  }

  function handleLetterInput(letter) {
    if (
      currentRow === 6 ||
      gameFinished ||
      cellContent[currentRow].join("").length === 5
    )
      return;
    setCellContent((prevContent) => {
      const newContent = prevContent.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (rowIndex === currentRow && colIndex === currentColumn) {
            return letter;
          }
          return cell;
        })
      );
      return newContent;
    });
    setCurrentColumn((prevColumn) => prevColumn + 1);
  }

  useEffect(() => {
    const savedState = localStorage.getItem("darkMode")
    if (savedState) {
      setDarkMode(savedState === "true");
    }
  }, []);



  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey) {
        return;
      }
      if (event.key === "Enter") {
        validateAnswer();
      } else if (event.key === "Backspace") {
        handleEraseLetter();
      } else if (event.key === "Escape") {
        handleReplay();
      } else if (event.key === " ") {
        handleClearRow();
      } else if (/^[a-zA-Z]$/.test(event.key)) {
        handleLetterInput(event.key.toUpperCase());
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentColumn, currentRow, cellContent, showPopUp]);

  return (
    <GameContext.Provider
      value={{
        currentColumn,
        cellContent,
        handleGameEvent,
        firstRow,
        secondRow,
        thirdRow,
        cellsResult,
        currentRow,
        word,
        submit,
        setSubmit,
        showPopUp,
        setShowPopUp,
        currentGameType,
        setCurrentGameType,
        winState,
        darkMode,
        setDarkMode,
        gameFinished,
        handleReplay,
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
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
