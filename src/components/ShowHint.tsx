import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { ShowHintProps } from "../types/PropsTypes";

// Component to display hints for the given word
const ShowHint = ({ word }: ShowHintProps) => {
  // State to track which letters have been revealed
  const [revealedLetters, setRevealedLetters] = useState<Array<boolean>>(
    Array(5).fill(false)
  );

  // State to track the number of tries left for revealing letters
  const [triesLeft, setTriesLeft] = useState(5);

  // Function to handle the icon click event to reveal a letter
  const handleIconClick = () => {
    if (triesLeft > 0) {
      // Find the first letter that has not been revealed
      const indexToReveal = revealedLetters.indexOf(false);

      if (indexToReveal === -1) return; // No more letters to reveal

      // Update the state to reveal the letter
      const newRevealedLetters = [...revealedLetters];
      newRevealedLetters[indexToReveal] = true;
      setRevealedLetters(newRevealedLetters);
      setTriesLeft(triesLeft - 1);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full px-4 py-2">
      {/* Display revealed letters or placeholders for hidden letters */}
      <div className="flex gap-2 md:gap-4 items-center justify-center w-full md:w-auto">
        {revealedLetters.map((isRevealed, index) => (
          <div
            key={index}
            className="cell text-xl md:text-2xl p-2 md:p-4"
            style={{ width: '2rem', height: '2rem' }} // Adjust size as needed
          >
            {isRevealed ? word[index] : ''}
          </div>
        ))}
      </div>
      {/* Eye icon to trigger the reveal of a letter */}
      <div
        className="mt-4 md:mt-0 md:ml-4 cursor-pointer"
        onClick={handleIconClick}
        aria-disabled={triesLeft === 0} // Accessibility: Disable interaction when no tries are left
      >
        <FaRegEye color={triesLeft > 0 ? "#fff" : "#aaa"} size={24} />
      </div>
    </div>
  );
};

export default ShowHint;
