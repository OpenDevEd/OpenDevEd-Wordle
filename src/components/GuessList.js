import React from 'react';
import './GuessList.module.css';

const GuessList = ({ guesses }) => {
  return (
    <div>
      <h3>Previous Guesses</h3>
      <ul>
        {guesses.map((guess, index) => (
          <li key={index}>
            {guess.word}
            <div className="feedback">
              {guess.feedback.map((color, i) => (
                <span key={i} className={color}></span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuessList;
