import { createContext, ReactNode, useEffect, useState } from "react";

export const GameContext = createContext(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [guesses, setGuesses] = useState(new Array(6).fill([]));
  const [history, setHistory] = useState([]);
  const [targetWord, setTargetWord] = useState("");
  const [input, setInput] = useState("");
  const [attempts, setAttempts] = useState(6);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const fetchWord = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        "https://words.dev-apis.com/word-of-the-day?random=1"
      );
      const data = await res.json();
      const word = data.word;
      console.log("the word is: ", word);
      setIsLoading(false);
      setTargetWord(word);
    } catch (err) {
      console.log("error fetching the word, try again later! | ", err.message);
    }
  };

  const isWord = async (word: string) => {
    try {
      setIsLoading(true);
      const res = await fetch("https://words.dev-apis.com/validate-word", {
        method: "POST",
        body: JSON.stringify({ word }),
      });
      const data = await res.json();
      setIsLoading(false);
      return data.validWord;
    } catch (err) {
      console.log("error validating the word | ", err.message);
      return false;
    }
  };

  const decrementAttempts = () => {
    setAttempts(attempts - 1);
  };

  useEffect(() => {
    fetchWord();
  }, []);

  const contextValue = {
    attempts,
    setAttempts,
    decrementAttempts,
    input,
    setInput,
    isWord,
    targetWord,
    history,
    setHistory,
    guesses,
    setGuesses,
    isCorrect,
    setIsCorrect,
    fetchWord,
    isLoading,
    setIsLoading,
    isInvalid,
    setIsInvalid,
  };
  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
}
