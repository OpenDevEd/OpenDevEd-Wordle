import React from 'react';

function GameStatus({ status, targetWord, onReset }) {
  return (
    <div className="mt-8 text-center">
      {status === 'won' && (
        <div className="animate-bounce">
          <p className="text-2xl font-bold mb-4">Congratulations! You guessed the word!</p>
          <button 
            className="bg-wordle-green text-white px-6 py-2 rounded-full font-bold hover:opacity-80 transition-opacity"
            onClick={onReset}
          >
            Play Again
          </button>
        </div>
      )}
      {status === 'lost' && (
        <div className="animate-shake">
          <p className="text-2xl font-bold mb-2">Game Over</p>
          <p className="text-xl mb-4">The word was: <span className="font-bold">{targetWord}</span></p>
          <button 
            className="bg-wordle-darkgray text-white px-6 py-2 rounded-full font-bold hover:opacity-80 transition-opacity"
            onClick={onReset}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}

export default GameStatus;