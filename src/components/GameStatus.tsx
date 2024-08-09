import React, { useEffect } from 'react';

interface GameStatusProps {
  remainingAttempts: number;
  targetWord: string;
  guesses: string[];
  onWon : ()=> void;
}

const GameStatus: React.FC<GameStatusProps> = ({ remainingAttempts, targetWord, guesses, onWon}) => {
  const hasWon = guesses.length > 0 && guesses[guesses.length - 1] === targetWord;
  const hasLost = remainingAttempts === 0 && !hasWon;


  // const handleWon = () => {
  //   onWon();
  // };

  useEffect(() =>{
    if (hasWon){
      onWon();
    }
  },[hasWon])


  return (
    <div>
      {hasWon && <h2>Congratulations! You've won!</h2>}
      {hasLost && <h2>Game Over! The word was {targetWord}.</h2>}
      <p>Remaining Attempts: {remainingAttempts}</p>
    </div>
  );
};

export default GameStatus;
