import { useEffect } from "react";

export default function EndGamePopup({ isWin, solution, onPlayAgain }) {
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
