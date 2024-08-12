import React from 'react';

interface LetterBoxProps {
  letter: string;
  state: 'empty' | 'filled' | 'correct' | 'present' | 'absent';
}

const LetterBox: React.FC<LetterBoxProps> = ({ letter, state }) => {
  return (
    <div className={`letter-box ${state}`}>
      {letter}
    </div>
  );
};

export default LetterBox;