import './App.css';
import { useEffect, useState, useCallback } from 'react';

const API_URL = '/words.json';
const WORD_LENGTH = 5;
const MAX_GUESSES = 6;

const KEYBOARD_ROWS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace']
];

function App() {
  const [solution, setSolution] = useState('');
  const [guesses, setGuesses] = useState(Array(MAX_GUESSES).fill(null));
  const [currentGuess, setCurrentGuess] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [usedLetters, setUsedLetters] = useState({});
  const [isWin, setIsWin] = useState(false);

  const resetGame = useCallback(() => {
    setGuesses(Array(MAX_GUESSES).fill(null));
    setCurrentGuess('');
    setIsGameOver(false);
    setUsedLetters({});
    setIsWin(false);
    fetchNewWord();
  }, []);

  const fetchNewWord = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Response was not ok');
      }
      const words = await response.json();
      const randomWord = words[Math.floor(Math.random() * words.length)];
      setSolution(randomWord.toLowerCase());
    } catch (error) {
      console.error('Failed to fetch words:', error);
    }
  };

  const handleKeyPress = useCallback((key) => {
    if (isGameOver) return;

    if (key === 'Enter') {
      if (currentGuess.length !== WORD_LENGTH) return;

      const newGuesses = [...guesses];
      const emptyIndex = newGuesses.findIndex(val => val == null);
      if (emptyIndex === -1) return;

      newGuesses[emptyIndex] = currentGuess;
      setGuesses(newGuesses);

      const newUsedLetters = {...usedLetters};
      for (let i = 0; i < currentGuess.length; i++) {
        const letter = currentGuess[i];
        if (solution[i] === letter) {
          newUsedLetters[letter] = 'correct';
        } else if (solution.includes(letter) && newUsedLetters[letter] !== 'correct') {
          newUsedLetters[letter] = 'close';
        } else if (!newUsedLetters[letter]) {
          newUsedLetters[letter] = 'incorrect';
        }
      }
      setUsedLetters(newUsedLetters);

      setCurrentGuess('');

      if (solution === currentGuess) {
        setIsWin(true);
        setIsGameOver(true);
      } else if (emptyIndex === MAX_GUESSES - 1) {
        setIsGameOver(true);
      }
    } else if (key === 'Backspace') {
      setCurrentGuess(prev => prev.slice(0, -1));
    } else if (currentGuess.length < WORD_LENGTH && key.length === 1 && key.match(/^[a-z]$/i)) {
      setCurrentGuess(prev => prev + key.toLowerCase());
    }
  }, [currentGuess, isGameOver, solution, guesses, usedLetters]);

  useEffect(() => {
    const handleType = (event) => handleKeyPress(event.key);
    window.addEventListener('keydown', handleType);
    return () => window.removeEventListener('keydown', handleType);
  }, [handleKeyPress]);
  
  useEffect(() => {
    fetchNewWord();
  }, []);
  return (
    <div className="game-container">
      <header>
        <h1>Wordle Clone</h1>
      </header>
      <div className="board-container">
        <div className="board">
          {guesses.map((guess, i) => {
            const isCurrentGuess = i === guesses.findIndex(val => val == null);
            return (
              <Line 
                key={i}
                guess={isCurrentGuess ? currentGuess : guess ?? ''}
                isFinal={!isCurrentGuess && guess != null}
                solution={solution}
              />
            );
          })}
        </div>
        <Keyboard onKeyPress={handleKeyPress} usedLetters={usedLetters} />
        {isGameOver && (
          <EndGamePopup 
            isWin={isWin}
            solution={solution}
            onPlayAgain={resetGame}
          />
        )}
      </div>
    </div>
  );
}

function Line({ guess, isFinal, solution }) {
  const tiles = [];
  
  for (let i = 0; i < WORD_LENGTH; i++) {
    const char = guess[i];
    let className = 'tile';

    if (isFinal) {
      if (char === solution[i]) {
        className += ' correct';
      } else if (solution.includes(char)) {
        className += ' close';
      } else {
        className += ' incorrect';
      }
    }

    tiles.push(
      <div key={i} className={className}>
        {char}
      </div>
    );
  }
  
  return <div className='line'>{tiles}</div>;
}

function Keyboard({ onKeyPress, usedLetters }) {
  return (
    <div className="keyboard">
      {KEYBOARD_ROWS.map((row, i) => (
        <div key={i} className="keyboard-row">
          {row.map((key) => {
            let className = 'key';
            if (usedLetters[key]) {
              className += ` ${usedLetters[key]}`;
            }
            return (
              <button 
                key={key} 
                className={className}
                onClick={() => onKeyPress(key)}
              >
                {key === 'Backspace' ? '←' : key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function EndGamePopup({ isWin, solution, onPlayAgain }) {
  return (
    <div className="popup-overlay">
      <div className="popup animate-pop">
        <h2>{isWin ? 'Congratulations!' : 'Game Over'}</h2>
        <p>{isWin ? 'You guessed the word!' : `The word was: ${solution}`}</p>
        <button onClick={onPlayAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default App;