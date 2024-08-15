import React from 'react';

interface LetterBoxProps {
  letter: string;
  status: string;
  borderColor: string;
}

const LetterBox: React.FC<LetterBoxProps> = ({ letter, status, borderColor }) => {
  return (
    <div
      className={`w-14 h-14 ${status} ${borderColor} flex items-center justify-center rounded-[8px] font-baloo font-bold text-4xl uppercase`}
    >
      {letter}
    </div>
  );
};

export default LetterBox;
