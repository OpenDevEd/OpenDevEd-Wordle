import React, { useState, useEffect } from 'react';
import './App.css';
import WordInput from './components/input';
import Keyboard from './components/keyboard';

const App: React.FC = () => {
  const maxAttempts = 6;
  const wordLength = 5;
  const possibleWords = ['APPLE', 'BANANA', 'ORANGE', 'LEMON', 'GRAPE']; // Add more words as needed
  const [randomWord, setRandomWord] = useState<string>('');
  const [guesses, setGuesses] = useState<string[][]>(Array(maxAttempts).fill(Array(wordLength).fill("")));
  const [currentAttempt, setCurrentAttempt] = useState<number>(0);
  const [currentGuess, setCurrentGuess] = useState<string[]>(Array(wordLength).fill(""));
  const [feedback, setFeedback] = useState<string[][]>(Array(maxAttempts).fill(Array(wordLength).fill("")));
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * possibleWords.length);
    setRandomWord(possibleWords[randomIndex]);
  }, []);

  const handleKeyClick = (letter: string) => {
    if (!gameOver) {
      const emptyIndex = currentGuess.findIndex(char => char === "");
      if (emptyIndex !== -1) {
        const newGuess = [...currentGuess];
        newGuess[emptyIndex] = letter;
        setCurrentGuess(newGuess);

        const nextInput = document.getElementById(`input-${currentAttempt}-${emptyIndex}`);
        if (nextInput && emptyIndex < wordLength - 1) {
          (nextInput as HTMLInputElement).focus();
        }
      }
    }
  };

  const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    if (!gameOver) {
      const newGuess = [...currentGuess];
      const value = event.target.value.toUpperCase();

      if (value.length <= 1 && /^[A-Z]?$/.test(value)) {
        newGuess[index] = value;
        setCurrentGuess(newGuess);

        if (value && index < wordLength - 1) {
          const nextInput = document.getElementById(`input-${currentAttempt}-${index + 1}`);
          if (nextInput) {
            (nextInput as HTMLInputElement).focus();
          }
        }
      }
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!gameOver) {
      if (event.key === "Backspace") {
        const prevInput = document.getElementById(`input-${currentAttempt}-${index - 1}`);
        if (currentGuess[index]) {
          const newGuess = [...currentGuess];
          newGuess[index] = '';
          setCurrentGuess(newGuess);
        } else if (prevInput && index > 0) {
          (prevInput as HTMLInputElement).focus();
        }
      } else if (event.key === "ArrowRight" && index < wordLength - 1) {
        const nextInput = document.getElementById(`input-${currentAttempt}-${index + 1}`);
        if (nextInput) {
          (nextInput as HTMLInputElement).focus();
        }
      } else if (event.key === "ArrowLeft" && index > 0) {
        const prevInput = document.getElementById(`input-${currentAttempt}-${index - 1}`);
        if (prevInput) {
          (prevInput as HTMLInputElement).focus();
        }
      }
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (currentAttempt < maxAttempts && !gameOver) {
      if (currentGuess.every(char => char.length === 1)) {
        const guessWord = currentGuess.join('');
        if (!possibleWords.includes(guessWord)) {
          setMessage('Invalid word. Please try again.');
          return;
        }

        const updatedGuesses = [...guesses];
        updatedGuesses[currentAttempt] = currentGuess;
        setGuesses(updatedGuesses);

        const newFeedback = currentGuess.map((char, index) => {
          if (char === randomWord[index]) {
            return 'correct';
          } else if (randomWord.includes(char)) {
            return 'incorrect-position';
          }
          return 'incorrect';
        });

        const updatedFeedback = [...feedback];
        updatedFeedback[currentAttempt] = newFeedback;
        setFeedback(updatedFeedback);

        if (guessWord === randomWord) {
          setGameOver(true);
          setMessage('Congratulations, you guessed the word!');
        } else if (currentAttempt + 1 === maxAttempts) {
          setGameOver(true);
          setMessage(`Game over! The correct word was ${randomWord}.`);
        } else {
          setCurrentAttempt(prev => prev + 1);
          setCurrentGuess(Array(wordLength).fill(''));
          const firstInput = document.getElementById(`input-${currentAttempt + 1}-0`);
          if (firstInput) {
            (firstInput as HTMLInputElement).focus();
          }
          setMessage('');
        }
      } else {
        setMessage('Please complete your guess before submitting.');
      }
    }
  };

  const handlePlayAgain = () => {
    setGuesses(Array(maxAttempts).fill(Array(wordLength).fill("")));
    setCurrentAttempt(0);
    setCurrentGuess(Array(wordLength).fill(""));
    setFeedback(Array(maxAttempts).fill(Array(wordLength).fill("")));
    setGameOver(false);
    const randomIndex = Math.floor(Math.random() * possibleWords.length);
    setRandomWord(possibleWords[randomIndex]);
    const firstInput = document.getElementById(`input-0-0`);
    if (firstInput) {
      (firstInput as HTMLInputElement).focus();
    }
    setMessage('');
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-2xl mb-4'>Welcome To Ed-Wordle</h1>

      <WordInput
        currentGuess={currentGuess}
        guesses={guesses}
        feedback={feedback}
        currentAttempt={currentAttempt}
        maxAttempts={maxAttempts}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
      />

      {gameOver && (
        <div className='mt-4 text-xl text-center'>
          {message}
          <button
            onClick={handlePlayAgain}
            className='mt-4 bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600'
          >
            Play Again
          </button>
        </div>
      )}

      {!gameOver && (
        <>
          <form onSubmit={handleSubmit} className='flex items-center mt-4'>
            <button
              type='submit'
              className='bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600'
            >
              Submit
            </button>
          </form>

          <Keyboard handleKeyClick={handleKeyClick} />
        </>
      )}

      {message && <div className='mt-2 text-red-600'>{message}</div>}
    </div>
  );
};

export default App;
