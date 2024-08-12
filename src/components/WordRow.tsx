import React from 'react';
import LetterBox from './LetterBox';

interface WordRowProps {
  word: string;
  result?: ('correct' | 'present' | 'absent')[];
}

const WordRow: React.FC<WordRowProps> = ({ word, result }) => {
  const letters = word.padEnd(5, ' ').split('');

  return (
    <div className="word-row">
      {letters.map((letter, index) => (
        <LetterBox
          key={index}
          letter={letter}
          state={
            !letter.trim()
              ? 'empty'
              : result
              ? result[index]
              : 'filled'
          }
        />
      ))}
    </div>
  );
};

export default WordRow;