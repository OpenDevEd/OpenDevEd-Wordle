
import React, { useState, useEffect } from 'react';
import './App.css';
import WordleGrid from './components/WordleGrid';
import { WORD_LIST } from './wordList';

const WORD_LENGTH = 5;
const MAX_ATTEMPTS = 6;

function App() {
  const [targetWord, setTargetWord] = useState('');
  const [guesses, setGuesses] = useState<string[]>([]);
  const [results, setResults] = useState<('correct' | 'present' | 'absent')[][]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost'>('playing');
  const [remainingAttempts, setRemainingAttempts] = useState(MAX_ATTEMPTS);

  useEffect(() => {
    // Select a random word when the game starts
    setTargetWord(WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)]);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    if (value.length <= WORD_LENGTH && /^[A-Z]*$/.test(value)) {
      setCurrentGuess(value);
    }
  };

  const checkGuess = (guess: string): ('correct' | 'present' | 'absent')[] => {
    const result: ('correct' | 'present' | 'absent')[] = [];
    const targetLetters = targetWord.split('');

    guess.split('').forEach((letter, index) => {
      if (letter === targetWord[index]) {
        result.push('correct');
        targetLetters[index] = '';
      } else if (targetLetters.includes(letter)) {
        result.push('present');
        targetLetters[targetLetters.indexOf(letter)] = '';
      } else {
        result.push('absent');
      }
    });

    return result;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentGuess.length !== WORD_LENGTH) return;

    const newGuesses = [...guesses, currentGuess];
    const newResults = [...results, checkGuess(currentGuess)];

    setGuesses(newGuesses);
    setResults(newResults);
    setCurrentGuess('');
    setRemainingAttempts(remainingAttempts - 1);

    if (currentGuess === targetWord) {
      setGameState('won');
    } else if (newGuesses.length === MAX_ATTEMPTS) {
      setGameState('lost');
    }
  };

  const resetGame = () => {
    setTargetWord(WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)]);
    setGuesses([]);
    setResults([]);
    setCurrentGuess('');
    setGameState('playing');
    setRemainingAttempts(MAX_ATTEMPTS);
  };

  return (
    <div  className="game-container">
      <h1>WORDLE</h1>
      <h2>Moonlit edition</h2>
      <WordleGrid guesses={guesses} results={results} />
      {gameState === 'playing' && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={currentGuess}
            onChange={handleInputChange}
            maxLength={WORD_LENGTH}
            placeholder="Enter your guess"
          />
          <button type="submit">Submit</button>
        </form>
      )}
      {gameState === 'won' && <p> <span style={{ fontWeight: 'bold' }}>Congratulations! You've won! </span></p>}
      {gameState === 'lost' && <p>Game over. The word was: <span style={{ fontWeight: 'bold' }}>{targetWord}</span>
        </p>}
      {gameState !== 'playing' && (
        <button onClick={resetGame}>Play Again</button>
      )}
    </div>
  );
}

export default App;