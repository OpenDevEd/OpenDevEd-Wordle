import React, { useState, useEffect } from 'react';
import GuessInput from './components/GuessInput';
import GuessList from './components/GuessList';
import GameStatus from './components/GameStatus';
import RetryButton from './components/RetryButton';
import ColorExplanation from './components/ColorExplanation';
import Confetti from 'react-confetti';
import { generate } from 'random-words';
import './App.css';
import { isValidWord } from './utils/Validation';

const getRandomWord = () => {
  let word = '';

  while (word.length !== 5) {
    word = generate({ exactly: 1 })[0];
  }

  return word.toLowerCase();
};

const App = () => {
  const [targetWord, setTargetWord] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [attemptsLeft, setAttemptsLeft] = useState(6);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setTargetWord(getRandomWord());
  }, []);

  const handleGuess = async (guess) => {
    if (gameOver) return;

    const valid = await isValidWord(guess);
    if (!valid) {
      setError('Enter a valid word'); 
      return;
    } else {
      setError(''); 
    }

    const feedback = getFeedback(guess.toLowerCase());
    setGuesses([...guesses, { word: guess, feedback }]);
    setAttemptsLeft(attemptsLeft - 1);

    if (guess === targetWord) {
      setGameOver(true);
      setMessage('Congratulations! You guessed the word!');
    } else if (attemptsLeft - 1 === 0) {
      setGameOver(true);
      setMessage(`Game Over! The word was ${targetWord}.`);
    }
  };

  const getFeedback = (guess) => {
    let feedback = [];

    for (let i = 0; i < targetWord.length; i++) {
      if (guess[i] === targetWord[i]) {
        feedback.push('green');
      } else if (targetWord.includes(guess[i])) {
        feedback.push('yellow');
      } else {
        feedback.push('black');
      }
    }

    return feedback;
  };

  const handleRetry = () => {
    setTargetWord(getRandomWord());
    setGuesses([]);
    setAttemptsLeft(6);
    setGameOver(false);
    setMessage('');
    setError('');
  };

  return (
    <div>
      {gameOver && message.includes('Congratulations') && <Confetti />}
      <h1>Guess the Word</h1>
      <ColorExplanation />
      <div className="input-container">
        <GuessInput onSubmit={handleGuess} length={targetWord.length} />
        {error && <p className="error-message">{error}</p>}
      </div>
      <GuessList guesses={guesses} />
      <GameStatus attemptsLeft={attemptsLeft} gameOver={gameOver} message={message} />
      {gameOver && <RetryButton onClick={handleRetry} />}
    </div>
  );
};

export default App;
