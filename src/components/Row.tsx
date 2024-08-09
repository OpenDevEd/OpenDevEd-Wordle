import React from 'react';

interface RowProps {
  letters: string[];
}

const Row: React.FC<RowProps> = ({ letters}) => {
  return (
    <div className='flex gap-2 flex-row'>
      <div className='w-14 h-14 bg-bg border-2 border-grey flex items-center justify-center rounded-[8px]' >
        {letters.length >= 1 && letters[0]}
      </div>
      <div className='w-14 h-14 bg-bg border-2 border-grey flex items-center justify-center rounded-[8px]' >
        {letters.length >= 2 && letters[1]}
      </div>
      <div className='w-14 h-14 bg-bg border-2 border-grey flex items-center justify-center rounded-[8px]' >
        {letters.length >= 3 && letters[2]}
      </div>
      <div className='w-14 h-14 bg-bg border-2 border-grey flex items-center justify-center rounded-[8px]' >
        {letters.length >= 4 && letters[3]}
      </div>
      <div className='w-14 h-14 bg-bg border-2 border-grey flex items-center justify-center rounded-[8px]' >
        {letters.length >= 5 && letters[4]}
      </div>
    </div>
  );
}

export default Row;
