import React from 'react';
import styles from './GameStatus.module.css';

const GameStatus = ({ attemptsLeft, gameOver, message }) => {
  return (
    <div>
      <h3 className={styles.h3}>{gameOver ? message : `Attempts Left: ${attemptsLeft}`}</h3>
    </div>
  );
};

export default GameStatus;
