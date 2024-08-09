import React from 'react';
import styles from './ColorExplanation.module.css';

const ColorExplanation = () => {
  return (
    <div className={styles.explanation}>
      <div><span className={`${styles.colorBox} ${styles.green}`}></span> Correct letter and position</div>
      <div><span className={`${styles.colorBox} ${styles.yellow}`}></span> Correct letter, wrong position</div>
      <div><span className={`${styles.colorBox} ${styles.black}`}></span> Incorrect letter</div>
    </div>
  );
};

export default ColorExplanation;
