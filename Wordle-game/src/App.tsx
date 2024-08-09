import { useEffect } from "react";
import GuessInput from "./components/GuessInput";
import KeyBoardButtons from "./components/KeyBoardButtons";
import useGameStore from "./store/store";


function App() {
  const {
    word,
    isValidatedWord,
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
    const handleKey = (event: KeyboardEvent) => {
      if (wonLoseFlag === "Won" || wonLoseFlag === "Lost") {
        // Ignore any input if the game is won or lost
        return;
      }
      console.log("im in handleKey: ", event);
  
      if (event.key.match(/^[a-z]$/i) && guesses[currentGuesses].length < 5) {
        // Handle letter keys (A-Z or a-z)
        setGuess(event.key.toLowerCase(), currentGuesses);
      } else if (event.key === "Enter" && guesses[currentGuesses].length === 5) {
        // Handle the Enter key
        event.preventDefault();
        addGuess(guesses[currentGuesses]);
      } else if (event.key === "Backspace") {
        // Handle the Backspace key
        event.preventDefault();
        updateGuesses();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [word, isValidatedWord, guesses, currentGuesses, setGuess, addGuess, updateGuesses]);

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
