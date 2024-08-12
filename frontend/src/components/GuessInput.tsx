import React, { useRef, useState } from 'react';
import classes from './guessInput.module.css'
import { GuessInputProps } from '../types/main';

function GuessInput({ onGuess }: GuessInputProps) {
  const [guess, setGuess] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate the input
    if (guess.length !== 5) {
      setError('Please enter a 5-letter word.');
      return;
    }
    if (!/^[A-Za-z]+$/.test(guess)) {
      setError('Please enter only alphabetic characters.');
      return;
    }
    setError(null);
    onGuess(guess.toLowerCase());
    setGuess('');
    inputRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };
  
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        className={classes.guessInput}
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        // pattern="[A-Za-z]{5}"
        placeholder='Enter your guess'
        required
      />
        {error && <p className="text-red-500 my-3 text-center">{error}</p>}
      <button type="submit" className={classes.guessSubmit}>Submit</button>
    </form>
  );
}

export default GuessInput;