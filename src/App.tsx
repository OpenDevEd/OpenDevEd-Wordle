import { useEffect, useState } from 'react'
import './App.css'
import Board from './components/board'
const API_URL = "https://random-word-api.herokuapp.com/word?number=1000&length=5&lang=en"
function App() {
  const[Wordle,SetWordle] = useState('')
  const[guesses,setGuesses] = useState(Array(6).fill(null))
  const[CurrentGuess,setCurrentGuess] = useState('')
  const[GameOver,SetGameOver] = useState(false)
useEffect(()=>{
  const fetchWords = async () => {
      const response = await fetch(API_URL)
      const words = await response.json();
      const randomWord = words[Math.floor(Math.random() * words.length)];
      SetWordle(randomWord)
  }
  fetchWords()
},[])
useEffect(() => {
  const handletype = (e: KeyboardEvent) => {
    if(GameOver)
    {
      return;
    }
    if (e.key === 'Enter') {
      if (CurrentGuess.length !== 5) {
        return; // Ensure the guess is exactly 5 characters
      }
      const newGuesses = [...guesses];
      newGuesses[guesses.findIndex(val => val == null)] = CurrentGuess;
      setGuesses(newGuesses);
      setCurrentGuess('');
      const isCorrect = Wordle === CurrentGuess;
      if (isCorrect) {
        SetGameOver(true);
        return;
      }
      // Moved the background color logic to be applied after a guess is submitted
      return; // Exit after processing 'Enter' to avoid adding 'Enter' to the guess
    }
    if (e.key === 'Backspace') {
      setCurrentGuess(CurrentGuess.slice(0, -1));
      return;
    }
    if (CurrentGuess.length >= 5) {
      return; // Prevent adding more characters if guess is already 5 characters long
    }
    setCurrentGuess(oldguess => oldguess + e.key);
  };
  window.addEventListener('keydown', handletype);

  return () => {
    window.removeEventListener('keydown', handletype); // Cleanup event listener
  };
}, [CurrentGuess, Wordle, GameOver, guesses]); // Added 'guesses' to dependencies
  return (
    <div className='bg-[#121213] h-screen w-screen items-center justify-center flex'>
          <div className=' flex flex-col gap-6 h-[60%]  w-[35%] justify-center items-center'>
          {guesses.map((guess,i) => {
            const isCurrentGuess = i === guesses.findIndex(val=>val == null)
            return(
              <Board  guess={isCurrentGuess ? CurrentGuess : guess ?? ''}
                      Wordle={Wordle}
                      isFinal={!isCurrentGuess && guess != null}/>
            )
          })
          }
          {Wordle}
        </div>
    </div>
      
    
  )
}

export default App

