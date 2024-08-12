import { useState } from "react";

const useGameUtils = (word) => {

  const [countGuess, setCountGuess] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [history, setHistory] = useState([]);
  const [GuessesArray, setGuessesArray] = useState([...Array(6)]);
  const [correctGuess, setCorrectGuess] = useState(false);
  const [UsedKeys, setUsedKeys] = useState({});
  const [duplicate, setduplicate] = useState(false);

  // basic function to color the guessed word
  const ColorTheGuess = () => {
    word = word.toUpperCase();

    let wordArray = [...word];
    let formattedGuess = [...currentGuess].map((letter) => {
      return { key: letter, value: "grey" };
    });

    formattedGuess.forEach((letter, index) => {
      if (wordArray[index] === letter.key) {
        letter.value = "green";
        wordArray[index] = "";
      }
    });

    formattedGuess.forEach((letter, index) => {
      if (wordArray.includes(letter.key) && letter.value !== "green") {
        letter.value = "yellow";
        wordArray[wordArray.indexOf(letter.key)] = "";
      }
    });

    return formattedGuess;
  };

  //function to add the new guess to the array of guesses

  const AddNewGuess = (SavedGuess) => {
    if (currentGuess === word) {
      setCorrectGuess(true);
    }

    let newGuessesArray = [...GuessesArray];
    newGuessesArray[countGuess] = SavedGuess;
    setGuessesArray(newGuessesArray);

    setHistory([...history, currentGuess]);
    setCountGuess(countGuess + 1);
    setUsedKeys((prevUsedKeys) => {
      SavedGuess.forEach((l) => {
        const currentColor = prevUsedKeys[l.key];

        if (l.value === "green") {
          prevUsedKeys[l.key] = "green";
          return;
        }
        if (l.value === "yellow" && currentColor !== "green") {
          prevUsedKeys[l.key] = "yellow";
          return;
        }
        if (l.value === "grey" && currentColor !== ("green" || "yellow")) {
          prevUsedKeys[l.key] = "grey";
          return;
        }
      });
      return prevUsedKeys;
    });
    setCurrentGuess("");
  };

  // function to handle keyup event and save the current guess after checks
  const keyUpHandler = ({ key }) => {

    // check if the key is enter and the current guess is valid
    if (key === "Enter") {
      if (countGuess > 5) {
        return;
      }

      // check if the current guess is a duplicate
      if (history.includes(currentGuess)) {
        alert("You have already guessed this word");
        setduplicate(true);
        setCurrentGuess("");
        return;
      }
      

      // check if the current guess is 5 letters
      if (currentGuess.length !== 5) {
        alert("Please enter a guess of 5 letters");
        return;
      }

      
      let SavedGuess = ColorTheGuess();
      AddNewGuess(SavedGuess);
    }

    if (key === "Backspace") {
      if (currentGuess.length > 0) setCurrentGuess(currentGuess.slice(0, -1));
    }

    // check if the key is a letter and add it to the current guess
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setduplicate(false);
        let current = currentGuess + key;
        current = current.toUpperCase();
        setCurrentGuess(current);
      }
    }
  };

  return {
    countGuess,
    duplicate,
    currentGuess,
    keyUpHandler,
    history,
    GuessesArray,
    UsedKeys,
    correctGuess,
  };
};

export default useGameUtils;
