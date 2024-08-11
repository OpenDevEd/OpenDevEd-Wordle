import React from 'react';

const KEYBOARD_LAYOUT = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE'],
];

function Keyboard({ onKeyPress, guesses }) {
  const getKeyStatus = (key) => {
    for (let guess of guesses) {
      if (!guess) continue;
      const matchingLetter = guess.find(letter => letter.letter === key);
      if (matchingLetter) return matchingLetter.status;
    }
    return '';
  };

  return (
    <div className="w-full max-w-lg">
      {KEYBOARD_LAYOUT.map((row, i) => (
        <div key={i} className="flex justify-center mb-2">
          {row.map(key => (
            <button
              key={key}
              className={`px-2 py-4 mx-0.5 text-sm font-bold rounded
                ${key.length > 1 ? 'w-16' : 'w-10'}
                ${getKeyStatus(key) === 'correct' ? 'bg-wordle-green' :
                  getKeyStatus(key) === 'present' ? 'bg-wordle-yellow' :
                  getKeyStatus(key) === 'absent' ? 'bg-wordle-darkgray' : 'bg-gray-400'}
                hover:opacity-80 transition-opacity`}
              onClick={() => onKeyPress(key)}
            >
              {key === 'BACKSPACE' ? '←' : key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;