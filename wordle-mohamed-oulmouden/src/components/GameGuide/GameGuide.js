import React from "react";
import styles from "./GameGuide.module.css";

export default function GameGuide() {
  const firstRow = ["W", "E", "A", "R", "Y"];
  const secondRow = ["P", "I", "L", "L", "S"];
  const thirdRow = ["V", "A", "G", "U", "E"];

  return (
    <div className={styles.container}>
      <div className={styles.guides}>
        <h1 className={styles.welcome}>Welcome to Wordle!</h1>
        <h1 className={styles.title}>What is Wordle?</h1>
        <p className={styles.paragraph}>
          It's a word puzzle game where you guess a secret 5-letter word each
          day. Use clues from your guesses to crack the code. Fun and
          challenging!
        </p>
        <h1 className={styles.title}>How to Play</h1>
        <div className={styles.list}>
          <p className={styles.paragraph}>
            Each guess must be a valid 5-letter world.Hit the enter key or
            submit button to submit.
          </p>
          <p className={styles.paragraph}>
            After each guess, the color of the tiles will change to show how
            close your guess was to the word.
          </p>
        </div>
        <h1 className={styles.title}>Examples</h1>
        <div className={styles.row}>
          {firstRow.map((letter, index) => (
            <button
              key={index}
              className={`${styles.gameInput} ${
                letter === "W" ? styles.correct : styles.filled
              }`}
            >
              <h1 className={styles.cellText}>{letter}</h1>
            </button>
          ))}
        </div>
        <p className={styles.paragraph}>
          The letter <span>W</span> is in the word and in the correct spot.
        </p>
        <div className={styles.row}>
          {secondRow.map((letter, index) => (
            <button
              key={index}
              className={`${styles.gameInput} ${
                letter === "I" ? styles.includes : styles.filled
              }`}
            >
              <h1 className={styles.cellText}>{letter}</h1>
            </button>
          ))}
        </div>
        <p className={styles.paragraph}>
          The letter <span>I</span> is in the word but in the wrong spot.
        </p>
        <div className={styles.row}>
          {thirdRow.map((letter, index) => (
            <button
              key={index}
              className={`${styles.gameInput} ${
                letter === "U" ? styles.incorrect : styles.filled
              }`}
            >
              <h1 className={styles.cellText}>{letter}</h1>
            </button>
          ))}
        </div>
        <p className={styles.paragraph}>
          The letter <span>U</span> is not in the word in any spot.
        </p>
        <h1 className={styles.welcome}>Game Modes</h1>
        <h1 className={styles.title}>Daily Challenge 🌟</h1>
        <p className={styles.paragraph}>
          Guess a new 5-letter word each day, Come back daily for a new challenge!
        </p>
        <h1 className={styles.title}>Unlimited Play 🚀</h1>
        <p className={styles.paragraph}>
          Play as much as you want! Guess words without any limits and keep
          having fun. Challenge yourself to guess as many as you can!
        </p>

        <h1 className={styles.goodLuck}>Good Luck! 🍀</h1>
      </div>
    </div>
  );
}
