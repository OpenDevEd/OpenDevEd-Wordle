import { Guess } from '../types/main';
import classes from './guessDisplay.module.css'
import './guessDisplay.module.css'
import { GuessDisplayProps } from '../types/main';

function GuessDisplay({ guesses }: GuessDisplayProps) {
  return (
    <div className={classes['guess-display']}>
      {guesses.map((guess, index) => (
        <div key={index} className={classes['guess-row']}>
          {guess.word.split('').map((letter, letterIndex) => (
            <span
              key={letterIndex}
              className={`${classes.letter} ${classes[guess.result[letterIndex]]}`}
            >
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GuessDisplay;