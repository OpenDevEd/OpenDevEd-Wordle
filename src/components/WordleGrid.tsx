import React from 'react';
import WordRow from './WordRow';

interface WordleGridProps {
  guesses: string[];
  results: ('correct' | 'present' | 'absent')[][];
}

const WordleGrid: React.FC<WordleGridProps> = ({ guesses, results }) => {
  const emptyRows = Array(6 - guesses.length).fill('');

  return (
    <div className="wordle-grid">
      {guesses.map((guess, index) => (
        <WordRow key={index} word={guess} result={results[index]} />
      ))}
      {emptyRows.map((_, index) => (
        <WordRow key={guesses.length + index} word="" />
      ))}
    </div>
  );
};

export default WordleGrid;