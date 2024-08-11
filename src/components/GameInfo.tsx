import React from 'react';

interface GameInfoProps {
  remainingAttempts: number;
}

const GameInfo: React.FC<GameInfoProps> = ({ remainingAttempts }) => {
  return (
    <div className='w-full flex justify-center'>
      <p className='text-2xl font-baloo font-bold'>Attempts Remaining: {remainingAttempts}</p>
    </div>
  );
};

export default GameInfo;
