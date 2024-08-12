import React, { useRef, useState } from 'react';
import classes from './guessInput.module.css'
import { GuessInputProps } from '../types/main';

function GuessInput({ onGuess }: GuessInputProps) {
  const [guess, setGuess] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        maxLength={5}
        pattern="[A-Za-z]{5}"
        placeholder='Enter your guess'
        required
      />
      <button type="submit" className={classes.guessSubmit}>Submit</button>
    </form>
  );
}

export default GuessInput;