import React from 'react';

interface KeyboardProps {
  handleKeyClick: (letter: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ handleKeyClick }) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className='mt-4 grid grid-cols-10 gap-2'>
      {alphabet.map((letter) => (
        <button
          key={letter}
          onClick={() => handleKeyClick(letter)}
          className='bg-gray-300 p-2 rounded-lg text-xl font-bold'
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
