import {
  HandleTypeProps,
  HandleBackspaceProps,
  HandleCharacterInputProps,
} from "../types/PropsTypes";
import { toast } from "react-toastify";
import clickSound from '../assets/click.wav';

const playsound = new Audio(clickSound);

const GUESS_LENGTH = 5;

// Function to handle 'Enter' key press
export const handleEnter = ({
  currentGuess,
  guesses,
  word,
  setGuesses,
  setCurrentGuess,
  setShowPopup,
}: HandleTypeProps) => {
  // Check if the current guess is the correct length
  if (currentGuess.length !== GUESS_LENGTH) {
    toast.error(`Guess must be exactly ${GUESS_LENGTH} characters long!`);
    return;
  }
  
  // Update the guesses state with the current guess
  const newGuesses = [...guesses];
  const emptyIndex = guesses.findIndex((val) => val == null);
  newGuesses[emptyIndex] = currentGuess;
  setGuesses(newGuesses);
  setCurrentGuess('');
  
  // Show the popup if the guess is correct
  if (currentGuess === word) {
    setShowPopup(true);
  }
};

// Function to handle 'Backspace' key press
export const handleBackspace = ({ setCurrentGuess }: HandleBackspaceProps) => {
  // Remove the last character from the current guess
  setCurrentGuess((prevGuess) => prevGuess.slice(0, -1));
};

// Function to handle character input
export const handleCharacterInput = ({
  event,
  currentGuess,
  setCurrentGuess,
}: HandleCharacterInputProps) => {
  // Check if the input is a valid character and the guess length is valid
  if (currentGuess.length < GUESS_LENGTH && /^[a-zA-Z]$/.test(event.key)) {
    playsound.currentTime = 0; // Reset audio to start for immediate playback
    playsound.play().catch((error) => console.error("Failed to play sound:", error));
    // Append the new character to the current guess
    setCurrentGuess((prevGuess) => prevGuess + event.key.toLocaleLowerCase());
  }
};
