import { useState, createContext, useEffect} from 'react';
import getRandomWord from './RandomWords';
import handleKeyCallBack from './handleKeys';
import InitGame from './initGame';

export const GameContext = createContext(null);


function GameContextProvider({children}) {
  
  const [target, setTarget] = useState(() => getRandomWord().toLowerCase());
  const [words, setWords] = useState(() => Array(6).fill(""));
  const [results, setResults] = useState(() => Array(6).fill({}));
  const [index, setIndex] = useState(0);
  const [win, setWin] = useState('lose');


  useEffect(() => {
    InitGame(setWords, setTarget, setResults, setIndex);
  }, []);

  const handleKey = (alpha) => handleKeyCallBack(alpha, index, setIndex, words, setWords, setResults, setWin, target, win);

  useEffect(() => {
    const keyDownHandler = (event) => handleKey(event.key);
    
    window.addEventListener('keydown', keyDownHandler);
    
    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, [index, words, target, win]);
  
  return (
      <GameContext.Provider value={{words, target, results, index, win, handleKey, setWin, setIndex, setTarget, setResults, setWords}}>
        {children}
      </GameContext.Provider>
  )
}

export default GameContextProvider