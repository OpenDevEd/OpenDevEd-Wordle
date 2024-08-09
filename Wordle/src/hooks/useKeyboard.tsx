import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

export default function useKeyboard() {
  const {
    input,
    setInput,
    targetWord,
    attempts,
    isWord,
    history,
    setHistory,
    setIsCorrect,
    setGuesses,
    decrementAttempts,
  } = useContext(GameContext);

  const checkWord = (formattedInput) => {
    if (input === targetWord) {
      setIsCorrect(true);
    }
    setGuesses((prev) => {
      const newGuesses = [...prev];

      newGuesses[6 - attempts] = formattedInput;
      return newGuesses;
    });
    decrementAttempts();
    setInput("");
  };

  const formatInput = () => {
    const targetWordArray = [...targetWord];
    const inputArray = [...input].map((char) => {
      return { char, color: "bg-gray-500" };
    });

    inputArray.forEach((key, i) => {
      if (key.char === targetWordArray[i]) {
        inputArray[i].color = "bg-green-500";
        targetWordArray[i] = null;
      }
    });
    inputArray.forEach((key, i) => {
      if (key.color !== "bg-green-500" && targetWordArray.includes(key.char)) {
        inputArray[i].color = "bg-yellow-500";
        targetWordArray[targetWordArray.indexOf(key.char)] = null;
      }
    });
    return inputArray;
  };

  const handleInput = async ({ key }) => {
    if (attempts) {
      if (key === "Enter" && input.length === targetWord.length) {
        const correct = await isWord(input); // add loading screen or effect
        if (correct) {
          if (!history.includes(input)) {
            setHistory((prev) => {
              return [...prev, input];
            });
            const formattedInput = formatInput();
            checkWord(formattedInput);
          } else {
            //give feed back
          }
        } else {
          //reject the word
          //give feed back
        }
      } else {
        //give feedback
      }
      if (key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
      }
      if (/^[A-Za-z]$/.test(key) && input.length < targetWord.length) {
        setInput((prev) => prev + key.toLowerCase());
      }
    }
  };
  return [handleInput];
}
