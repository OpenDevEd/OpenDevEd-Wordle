import React from 'react';

function GuessGrid({ guesses, currentGuess }) {
  return (
    <div className="grid grid-rows-6 gap-1 mb-4">
      {guesses.map((guess, i) => (
        <div key={i} className="grid grid-cols-5 gap-1">
          {guess
            ? guess.map((letter, j) => (
                <div 
                  key={j} 
                  className={`w-14 h-14 flex items-center justify-center text-2xl font-bold border-2 animate-flip
                    ${letter.status === 'correct' ? 'bg-wordle-green border-wordle-green' : 
                      letter.status === 'present' ? 'bg-wordle-yellow border-wordle-yellow' : 
                      'bg-wordle-darkgray border-wordle-darkgray'}`}
                >
                  {letter.letter}
                </div>
              ))
            : currentGuess && i === guesses.findIndex(g => g === null)
            ? currentGuess.split('').concat(Array(5 - currentGuess.length).fill('')).map((letter, j) => (
                <div key={j} className="w-14 h-14 flex items-center justify-center text-2xl font-bold border-2 border-wordle-darkgray">
                  {letter}
                </div>
              ))
            : Array(5).fill('').map((_, j) => (
                <div key={j} className="w-14 h-14 border-2 border-wordle-darkgray"></div>
              ))
          }
        </div>
      ))}
    </div>
  );
}

export default GuessGrid;