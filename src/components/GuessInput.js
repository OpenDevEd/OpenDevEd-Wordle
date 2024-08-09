import React, { useState } from 'react';
import styles from './GuessInput.module.css';

const GuessInput = ({ onSubmit, length }) => {
  const [guess, setGuess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setGuess(e.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (guess.length !== length) {
      setError(`Guess must be ${length} characters long`);
    } else {
      onSubmit(guess);
      setGuess('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.input_group}>
        <input
          type="text"
          value={guess}
          onChange={handleChange}
          maxLength={length}
          placeholder={`Enter a ${length}-letter word`}
          className={styles.custom_input}
        />
        <button type="submit" className={styles.custom_button}>Guess</button>
      </div>
      {error && <p className={styles.error_message}>{error}</p>}
    </form>
  );
};

export default GuessInput;
