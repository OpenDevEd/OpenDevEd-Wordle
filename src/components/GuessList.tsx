import React from 'react';

interface GuessListProps {
  guesses: string[];
  targetWord: string;
}

const GuessList: React.FC<GuessListProps> = ({ guesses, targetWord }) => {
  const getFeedback = (guess: string) => {
    return guess.split('').map((letter, index) => {
      if (letter === targetWord[index]) {
        return <span key={index} style={{ color: 'green' }}>{letter}</span>;
      } else if (targetWord.includes(letter)) {
        return <span key={index} style={{ color: 'orange' }}>{letter}</span>;
      }
      return <span key={index} style={{ color: 'red' }}>{letter}</span>;
    });
  };

  return (
    <div>
      {guesses.map((guess, index) => (
        <div key={index}>
          {getFeedback(guess)}
        </div>
      ))}
    </div>
  );
};

export default GuessList;
