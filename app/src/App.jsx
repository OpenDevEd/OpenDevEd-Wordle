import { useEffect, useState } from 'react';
import words from "./words.json"
import './App.css';
import HowToPlay from './HowToPlay';
import Modal from 'react-modal';
import { Toaster, toast } from 'react-hot-toast';

Modal.setAppElement('#root');

const WORD_SIZE = 5;
function App() {
  let randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex].toUpperCase();
  const [solution, setSolution] = useState(randomWord)
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isGuessed, setIsGuessed] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)
  const [isNightMode, setIsNightMode] = useState(true);

  useEffect(() => {
    if (isNightMode) {
      document.body.classList.add('night-mode');
      document.body.classList.remove('day-mode');
    } else {
      document.body.classList.add('day-mode');
      document.body.classList.remove('night-mode');
    }
  }, [isNightMode]);

  const resetGame = () => {
    setCurrentIndex(0);
    setIsGameOver(false);
    setIsGuessed(false);
    setGuesses(Array(6).fill(null));
    randomIndex = Math.floor(Math.random() * words.length);
    setSolution(words[randomIndex].toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentGuess.length === 5) {
      if (!words.includes(currentGuess.toLowerCase()))
        toast.error('not in word list', {
          style: {
            background: isNightMode ? '#ccc' : '#333',
            color: isNightMode ? '#333' : '#ccc'
          }
        });
      else if (guesses.includes(currentGuess))
        toast.error('you already tried this one', {
          style: {
            background: isNightMode ? '#ccc' : '#333',
            color: isNightMode ? '#333' : '#ccc'
          }
        });
      else {
        if (currentGuess === solution) {
          setIsGameOver(true);
          setIsGuessed(true);
        }
        else if (currentIndex === 5)
          setIsGameOver(true);
        let newGuesses = [...guesses];
        newGuesses[currentIndex] = currentGuess.toUpperCase();
        setCurrentGuess('');
        setGuesses(newGuesses)
        setCurrentIndex((old) => old + 1);
      }
    }
  }

  const handleChange = (e) => {
    const guess = e.target.value;
    if (guess.length < 6 && guess.match(/^[a-zA-Z]*$/))
      setCurrentGuess(e.target.value.toUpperCase());
  }
  
  const Line = ({ guess }) => {
    let char = ''
    let boxes = []
    let className = 'tile';
    for (let i = 0; i < WORD_SIZE; i++) {
      if (guess && solution[i] === guess[i])
        className += ' correct';
      else if (guess && solution.includes(guess[i]))
        className += ' close';
      else if (guess)
        className += ' incorrect';
      char = <div className={className}>{guess[i]}</div>;
      className = 'tile';
      boxes.push(char);
    }
  
    return <div className='line'>{boxes}</div>
  }

  const toggleMode = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div className="App">
      <div className='title-div'>
        <button onClick={toggleMode} className={isNightMode ? 'toggle-btn night-btn' : 'toggle-btn day-btn'}>
          {isNightMode ? '🔆' : '🌑'}
        </button>
        <h1 className='title'>Wordle</h1>
      </div>
      {
        guesses.map(guess => {
          return <Line guess={guess ?? ''}/>
        })
      }
      <form onSubmit={handleSubmit}>
        <input 
          className='input'
          type='text'value={currentGuess} 
          onChange={handleChange}
        />
        <button type="submit" className='guess-button'>➤</button>
      </form>
      <Modal
        isOpen={isGameOver}
        onRequestClose={resetGame}
        contentLabel="Game Over Modal"
        className="modal-content"
      >
        <h2>{isGuessed ? 'Congratulations!' : 'Game Over'}</h2>
        <p>{isGuessed ? 'You guessed the word!' : `Better luck next time! The word was "${solution}".`}</p>
        <button onClick={resetGame} className='play-again-button'>Play Again</button>
      </Modal>
      <h1 className='how-to-play-title'>how to play:</h1>
      <HowToPlay />
      <Toaster />
    </div>
  );
}

export default App;
