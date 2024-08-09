import { useState, useEffect } from 'react'
import './App.css';
import GuessInput from './components/GuessInput';
import GameStatus from './components/GameStatus';
import GuessList from './components/GuessList';

const getRandomWord = (): string => {
  const words = ['APPLE', 'BANANA', 'CHERRY', 'DATES', 'ELDER'];
  return words[Math.floor(Math.random() * words.length)];
};

const App: React.FC = () => {
  const [targetWord, setTargetWord] = useState<string>(getRandomWord());
  const [guesses, setGuesses] = useState<string[]>([]);
  const [remainingAttempts, setRemainingAttempts] = useState<number>(6);
  const [finished, setFinished] = useState<boolean>(false);

  useEffect(() => {
    setTargetWord(getRandomWord());
    startGame();
  }, []);

  const handleGuess = (guess: string) => {
    if (guess.length === targetWord.length) {
      const updatedGuesses = [...guesses, guess];
      setGuesses(updatedGuesses);
      setRemainingAttempts(prev => prev - 1);
      if (remainingAttempts <= 1){
        setFinished(true);
      }
    }
  };
  const handleWon = () =>{
    setFinished(true);
  }

  const startGame = () =>{
    setGuesses([]);
    setRemainingAttempts(6);
    setFinished(false);
  }

  return (
    <div className="app">
      <h1>Worde Game</h1>
      {finished ? <h1></h1> : <GuessInput onGuess={handleGuess}/>}
      <GuessList guesses={guesses} targetWord={targetWord} />
      <GameStatus remainingAttempts={remainingAttempts} targetWord={targetWord} guesses={guesses} onWon={handleWon}/>
      {finished ? <button onClick={startGame}>Play Again</button> : <></>}
    </div>
  );
};

export default App;
