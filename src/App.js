import React, { useState, useEffect } from 'react';
import GuessInput from './components/GuessInput';
import GuessList from './components/GuessList';
import GameStatus from './components/GameStatus';
import Confetti from 'react-confetti';
import { generate } from 'random-words';
import './App.css';

const RetryButton = ({ onClick }) => {
  return (
    <button className="retry-button" onClick={onClick}>
      Retry
    </button>
  );
};

const getRandomWord = () => {
  const word = generate({ exactly: 1, maxLength: 10 })[0];
  return word.toLowerCase();
};

const App = () => {
  const [targetWord, setTargetWord] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [attemptsLeft, setAttemptsLeft] = useState(6);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setTargetWord(getRandomWord());
  }, []);

  const handleGuess = (guess) => {
    if (gameOver) return;

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
  };

  return (
    <div>
      {gameOver && message.includes('Congratulations') && <Confetti />}
      <h1>Wordle Game</h1>
      <div className="explanation">
        <div><span className="color-box green"></span> Correct letter and position</div>
        <div><span className="color-box yellow"></span> Correct letter, wrong position</div>
        <div><span className="color-box black"></span> Incorrect letter</div>
      </div>

      <GuessInput onSubmit={handleGuess} length={targetWord.length} />
      <GuessList guesses={guesses} />
      <GameStatus attemptsLeft={attemptsLeft} gameOver={gameOver} message={message} />
      {gameOver && (
        <RetryButton onClick={handleRetry} />
      )}
    </div>
  );
};

export default App;
