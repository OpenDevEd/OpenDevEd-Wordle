import { HandleTypeProps } from "../types/PropsTypes";
import { handleEnter, handleBackspace, handleCharacterInput } from '../utils/handleTypeUtils';
import clickSound from '../assets/delete.wav';

const playsound = new Audio(clickSound);

// Function to handle keyboard input for the game
const handleType = ({
  event, 
  setGuesses, 
  currentGuess, 
  setCurrentGuess, 
  guesses, 
  word, 
  setShowPopup
}: HandleTypeProps) => {
  // Switch statement to handle different key events
  switch (event.key) {
    case 'Enter':
      // Handle the 'Enter' key press
      handleEnter({
        currentGuess, 
        guesses, 
        setGuesses, 
        setCurrentGuess, 
        event, 
        word, 
        setShowPopup
      });
      break;

    case 'Backspace':
      // Play sound for 'Backspace' key press and handle character removal
      playsound.currentTime = 0; // Reset audio to start to ensure immediate playback
      playsound.play().catch((error) => console.error("Failed to play sound:", error));
      handleBackspace({ setCurrentGuess });
      break;

    default:
      // Handle any other key press (usually a character input)
      handleCharacterInput({ event, currentGuess, setCurrentGuess });
      break;
  }
};

export default handleType;
