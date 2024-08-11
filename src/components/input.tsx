import React from 'react';

interface WordInputProps {
  currentGuess: string[];
  guesses: string[][];
  feedback: string[][];
  currentAttempt: number;
  maxAttempts: number;
  handleChange: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (index: number, event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const WordInput: React.FC<WordInputProps> = ({
  currentGuess,
  guesses,
  feedback,
  currentAttempt,
  handleChange,
  handleKeyDown,
}) => {
  return (
    <div className='flex flex-col'>
      {guesses.map((guessRow, rowIndex) => (
        <div key={rowIndex} className='flex justify-center mb-2'>
          {guessRow.map((char, charIndex) => (
            <input
              key={charIndex}
              id={`input-${rowIndex}-${charIndex}`}
              type='text'
              value={rowIndex === currentAttempt ? currentGuess[charIndex] : char}
              onChange={(e) => handleChange(charIndex, e)}
              onKeyDown={(e) => handleKeyDown(charIndex, e)}
              maxLength={1}
              className={`border-2 rounded-lg p-2 m-1 text-center text-xl w-12 h-12 font-bold ${
                feedback[rowIndex][charIndex] === 'correct' ? 'bg-green-500 text-white' :
                feedback[rowIndex][charIndex] === 'incorrect-position' ? 'bg-yellow-500 text-white' :
                feedback[rowIndex][charIndex] === 'incorrect' ? 'bg-gray-500 text-white' : 'bg-white text-black'
              }`}
              disabled={rowIndex !== currentAttempt}
              autoFocus={rowIndex === currentAttempt && charIndex === 0}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default WordInput;
