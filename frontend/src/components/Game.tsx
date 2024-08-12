import { useState, useEffect } from 'react';
import GuessInput from './GuessInput';
import GuessDisplay from './GuessDisplay';
import EndGame from './EndGame';
import { getRandomWord } from '../utils/randomWord';
import { Guess } from '../types/main';
import classes from './game.module.css'

const MAX_ATTEMPTS = 10;
const WORD_LENGTH = 5;

function Game() {
  const [targetWord, setTargetWord] = useState<string>('');
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [remainingAttempts, setRemainingAttempts] = useState<number>(MAX_ATTEMPTS);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [win, setWin] = useState<boolean>(false);

  useEffect(() => {
    setTargetWord(getRandomWord());
  }, []);

  const handleGuess = (guess: string): void => {
    if (guess.length !== WORD_LENGTH) {
      alert('Please enter a 5-letter word.');
      return;
    }

    const newGuess: Guess = {
      word: guess,
      result: evaluateGuess(guess),
    };

    setGuesses([...guesses, newGuess]);
    setRemainingAttempts(remainingAttempts - 1);

    if (guess === targetWord) {
      setWin(true);
      setGameOver(true);
    } else if (remainingAttempts === 1) {
      setGameOver(true);
    }
  };

  const evaluateGuess = (guess: string): ('correct' | 'present' | 'absent')[] => {
    const result: ('correct' | 'present' | 'absent')[] = [];
    const targetLetters: (string | null)[] = targetWord.split('');

    // First pass: mark correct letters
    for (let i = 0; i < WORD_LENGTH; i++) {
      if (guess[i] === targetWord[i]) {
        result[i] = 'correct';
        targetLetters[i] = null;
      }
    }

    for (let i = 0; i < WORD_LENGTH; i++) {
      if (result[i]) continue;

      if (targetLetters.includes(guess[i])) {
        result[i] = 'present';
        targetLetters[targetLetters.indexOf(guess[i])] = null;
      } else {
        result[i] = 'absent';
      }
    }

    return result;
  };

  const resetGame = (): void => {
    setTargetWord(getRandomWord());
    setGuesses([]);
    setRemainingAttempts(MAX_ATTEMPTS);
    setGameOver(false);
    setWin(false);
  };

  return (
    <div className={`${classes.gameContainer} pb-10 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        <p className={` ${classes.attempts} ${remainingAttempts > 5 ? 'bg-green-500' : 'bg-red-500' }`}>{remainingAttempts}</p>
      <div className={`${classes.game} bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100`}>
        <h1 className='mb-6'>Guess what</h1>
        <GuessDisplay guesses={guesses} />
        {!gameOver ? (
          <>
            <GuessInput onGuess={handleGuess} />
          </>
        ) : (
          <EndGame win={win} targetWord={targetWord} onRestart={resetGame} />
        )}
      </div>
    </div>
  );
}

export default Game;