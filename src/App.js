import React, { useState, useEffect } from 'react';
import './App.css';
import { WORDS } from './words';

function App() {
  const [targetWord, setTargetWord] = useState('');
  const [guess, setGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setTargetWord(WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase());
  }, []);

  const handleInputChange = (e) => {
    setGuess(e.target.value.toUpperCase());
  };

  const handleGuess = () => {
    if (guess.length !== targetWord.length) {
      setMessage(`Please enter a ${targetWord.length}-letter word.`);
      return;
    }

    const newGuesses = [...guesses, analyzeGuess(guess)];
    setGuesses(newGuesses);
    setRemainingAttempts(remainingAttempts - 1);

    if (guess === targetWord) {
      setGameOver(true);
      setMessage('Congratulations! You guessed the word!');
    } else if (remainingAttempts - 1 === 0) {
      setGameOver(true);
      setMessage(`Game over! The correct word was ${targetWord}.`);
    }
  };

  const analyzeGuess = (guess) => {
    let result = [];
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === targetWord[i]) {
        result.push({ letter: guess[i], status: 'correct' });
      } else if (targetWord.includes(guess[i])) {
        result.push({ letter: guess[i], status: 'present' });
      } else {
        result.push({ letter: guess[i], status: 'absent' });
      }
    }
    return result;
  };

  const handleRetry = () => {
    setGuess('');
    setMessage('');
    setGameOver(false);
    setGuesses([])
    setRemainingAttempts(10);
    setTargetWord(WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase());
  }

  return (
    <div className="App">
      <h1>Wordle Game</h1>
      <input
        type="text"
        placeholder='guess the word'
        value={guess}
        onChange={handleInputChange}
        maxLength={targetWord.length}
        disabled={gameOver}
      />
      <button onClick={handleGuess} disabled={gameOver}>
        Submit
      </button>
      <button onClick={handleRetry} id='retry-btn'>
        Retry
      </button>
      <div className="message">{message}</div>
      <div className="guesses">
        {guesses.map((guess, index) => (
          <div key={index} className="guess">
            {guess.map((letterObj, idx) => (
              <span
                key={idx}
                className={`letter ${letterObj.status}`}
              >
                {letterObj.letter}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="remaining-attempts">
        Remaining Attempts: {remainingAttempts}
      </div>
      {gameOver && (
        <div className="end-game">
          {guess === targetWord
            ? 'You Win!'
            : `You Lose! The word was ${targetWord}`}
        </div>
      )}
    </div>
  );
}

export default App;
