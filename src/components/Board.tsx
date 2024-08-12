import { useEffect, useState, useCallback } from "react";
import Line from "./Line";
import handleType from "../utils/handleType";
import Popup from "../utils/Popup";
import Confetti from 'react-confetti';
import clickSound from '../assets/winsound.wav';
import PopupContent from "../utils/PopupContent";

const playsound = new Audio(clickSound);

const Board = ({ word }: { word: string }) => {
  const [guesses, setGuesses] = useState<Array<string | null>>(
    Array(5).fill(null)
  );
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [showPopup, setShowPopup] = useState(false);

  // Memoize the key down handler to avoid re-creating it on every render
  const keyDownHandler = useCallback(
    (event: KeyboardEvent) =>
      handleType({ event, setGuesses, currentGuess, setCurrentGuess, word, guesses, setShowPopup }),
    [currentGuess, guesses, word]
  );

  // Add and remove keydown event listener with useEffect
  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [keyDownHandler]);

  // Play sound when popup is shown
  useEffect(() => {
    if (showPopup) {
      playsound.play().catch((error) => console.error("Failed to play sound:", error));
    }
  }, [showPopup]);

  // Function to handle closing the popup and resetting the game
  const handleClosePopup = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col gap-[10px] justify-center items-center h-[80vh]">
      {/* Render lines for guesses means render cells or boxes  */}
      {guesses.map((guess, index) => {
        const isCurrent = index === guesses.findIndex((g) => g == null);
        return (
          <Line
            key={index}
            guess={isCurrent ? currentGuess : guess ?? ""}
            word={word}
            isLastGuess={!isCurrent && guess != null}
          />
        );
      })}

      {/* Conditionally render the popup and confetti if showPopup is true */}
      {showPopup && (
        <>
          <Popup
            title="Congratulations!"
            content={<PopupContent onClose={handleClosePopup} />}
            onClose={handleClosePopup}
          />
          <Confetti />
        </>
      )}
    </div>
  );
};

export default Board;
