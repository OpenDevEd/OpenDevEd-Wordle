import { useEffect } from "react";
import GuessInput from "./components/GuessInput";
import KeyBoardButtons from "./components/KeyBoardButtons";
import useGameStore from "./store/store";
import words from "./data/words.json";

export function getRandomWord(words: string[]): string {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

function App() {
  const {
    word,
    guesses,
    currentGuesses,
    wonLoseFlag,
    remainAttempts,
    setGuess,
    updateGuesses,
    addGuess,
    resetGame,
    decrementAttempts,
  } = useGameStore();

  useEffect(() => {
    // initialStore(setWord, setGuesses);
    const handleKey = (event: KeyboardEvent) => {
      // const currentGuess = guesses[currentGuesses];
      // console.log('currentGuess: ', currentGuess, ' currentGuesses: ', currentGuesses);

      if (guesses[currentGuesses].length < 5 && event.key.match(/[A-z]/))
        setGuess(event.key, currentGuesses);
      if (event.key === "Enter") {
        addGuess(guesses[currentGuesses]);
      }
      if (event.key === "Backspace") {
        updateGuesses();
      }
    };

    window.addEventListener("keydown", handleKey);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [word, guesses, currentGuesses]);

  useEffect(() => {
    if (wonLoseFlag === "Lost") {
      decrementAttempts();
    }
  }, [wonLoseFlag, decrementAttempts]);

  return (
    <div className="main-card">
      <h1 className="header">wordle</h1>
      {guesses.map((_, i) => (
        <GuessInput
          key={i.toString()}
          inputKey={i.toString()}
          word={word}
          guess={guesses[i]}
          isGuessed={i < currentGuesses}
        />
      ))}
      <h1>{wonLoseFlag}</h1>
      <h1>Your Attempts : {remainAttempts}</h1>
      {remainAttempts <= 0 && wonLoseFlag === "Lost" && (
        <h1>You are out of tries. You can wait this time.</h1>
      )}
      {remainAttempts > 0 &&
        (wonLoseFlag === "Lost" || wonLoseFlag === "Won") && (
          <div>
            <h1>{wonLoseFlag === "Lost" ? "Game Over" : "Congratulations!"}</h1>
            <button onClick={resetGame}>Play Again</button>
          </div>
        )}
      <KeyBoardButtons />
      <p>word: {word}</p>
    </div>
  );
}

export default App;
