import React, { useState, useEffect } from 'react';
import GuessGrid from './GuessGrid';
import Keyboard from './Keyboard';
import GameStatus from './GameStatus';

const MAX_ATTEMPTS = 6;
const WORD_LENGTH = 5;

function WordleGame() {
  const [targetWord, setTargetWord] = useState('');
  const [guesses, setGuesses] = useState(Array(MAX_ATTEMPTS).fill(null));
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomWord = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://random-word-api.herokuapp.com/word?length=${WORD_LENGTH}`);
      if (!response.ok) {
        throw new Error('Failed to fetch word');
      }
      const [word] = await response.json();
      setTargetWord(word.toUpperCase());
    } catch (err) {
      setError('Failed to start new game. Please try again.');
      console.error('Error fetching random word:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomWord();
  }, []);

  const handleKeyPress = (key) => {
    if (gameStatus !== 'playing') return;

    if (key === 'ENTER') {
      if (currentGuess.length === WORD_LENGTH) {
        submitGuess();
      }
    } else if (key === 'BACKSPACE') {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (currentGuess.length < WORD_LENGTH) {
      setCurrentGuess(currentGuess + key);
    }
  };

  const submitGuess = () => {
    const newGuesses = [...guesses];
    const currentGuessIndex = newGuesses.findIndex(guess => guess === null);
    newGuesses[currentGuessIndex] = evaluateGuess(currentGuess);
    setGuesses(newGuesses);
    setCurrentGuess('');

    if (currentGuess === targetWord) {
      setGameStatus('won');
    } else if (currentGuessIndex === MAX_ATTEMPTS - 1) {
      setGameStatus('lost');
    }
  };

  const evaluateGuess = (guess) => {
    return guess.split('').map((letter, index) => {
      if (letter === targetWord[index]) {
        return { letter, status: 'correct' };
      } else if (targetWord.includes(letter)) {
        return { letter, status: 'present' };
      } else {
        return { letter, status: 'absent' };
      }
    });
  };

  const resetGame = () => {
    setGuesses(Array(MAX_ATTEMPTS).fill(null));
    setCurrentGuess('');
    setGameStatus('playing');
    fetchRandomWord();
  };

  if (isLoading) {
    return <div className="text-center text-2xl mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-2xl mt-10 text-red-500 bg-wordle-gray">{error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-wordle-gray text-white p-4">
      <h1 className="text-4xl font-bold mb-8">OpenDevEd-Wordle</h1>
      <GuessGrid guesses={guesses} currentGuess={currentGuess} />
      <Keyboard onKeyPress={handleKeyPress} guesses={guesses} />
      <GameStatus 
        status={gameStatus} 
        targetWord={targetWord}
        onReset={resetGame}
      />
    </div>
  );
}

export default WordleGame;