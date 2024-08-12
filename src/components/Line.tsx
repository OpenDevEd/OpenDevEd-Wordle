import { useEffect, useState } from 'react';
import { LineProps } from "../types/PropsTypes";

const GUESS_LENGTH = 5;

// Function to determine the CSS class for a tile based on its correctness
const getTileClass = (guessChar: string, wordChar: string) => {
  // If the character is in the correct position
  if (guessChar === wordChar) return "correct";
  // If the character is in the word but not in the correct position
  return wordChar.includes(guessChar) ? "close" : "incorrect";
};

// Function to create an array of tile elements with appropriate classes
const createTiles = (guess: string, appliedClasses: string[], animateIndex: number | null) => {
  return Array.from({ length: GUESS_LENGTH }, (_, i) => {
    // Base class for all tiles, with conditional animation class
    const baseClass = `cell fade-in fade-in-active ${appliedClasses[i] || ''}`;
    // Add animation class only for the tile currently being animated
    const animationClass = i === animateIndex ? "animate-rotate-color" : '';
    return (
      <div key={i} className={`${baseClass} ${animationClass}`}>
        {guess[i]}
      </div>
    );
  });
};

// Main Line component that renders the guess as tiles
const Line = ({ guess, word, isLastGuess }: LineProps) => {
  // State to keep track of the index of the tile currently being animated
  const [animateIndex, setAnimateIndex] = useState<number | null>(null);
  // State to keep track of the applied classes for each tile
  const [appliedClasses, setAppliedClasses] = useState<string[]>(Array(GUESS_LENGTH).fill(''));

  useEffect(() => {
    if (isLastGuess) {
      // Trigger animations for each tile sequentially
      const timeoutIds = Array.from({ length: GUESS_LENGTH }, (_, i) =>
        setTimeout(() => {
          setAnimateIndex(i);
          setAppliedClasses((prev) => {
            const newClasses = [...prev];
            newClasses[i] = getTileClass(guess[i], word[i]);
            return newClasses;
          });
        }, i * 800) // Delay each animation by 800ms
      );

      // Clear animation index after all animations are done
      const clearAnimationTimeout = setTimeout(() => setAnimateIndex(null), GUESS_LENGTH * 800);

      // Cleanup timeouts when the component unmounts
      return () => {
        timeoutIds.forEach(clearTimeout);
        clearTimeout(clearAnimationTimeout);
      };
    }
  }, [isLastGuess, guess, word]);

  // Render the tiles with the applied classes and animations
  return <div className="flex gap-[10px]">{createTiles(guess, appliedClasses, animateIndex)}</div>;
};

export default Line;
