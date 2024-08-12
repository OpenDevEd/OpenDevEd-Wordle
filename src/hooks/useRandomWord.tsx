import { useEffect, useState } from 'react';
import { WORDS } from '../data/words';

// Custom hook to get a random word from a predefined list
const useRandomWord = () => {
  const [word, setWord] = useState<string>(''); // State to store the randomly selected word

  useEffect(() => {
    // Generate a random index within the range of the WORDS array
    const randomIndex = Math.floor(Math.random() * WORDS.length);
    
    // Set the word state to the word at the random index
    setWord(WORDS[randomIndex]);

  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  // Return the selected word
  return { word };
};

export default useRandomWord;
