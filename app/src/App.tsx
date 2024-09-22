import { useEffect, useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import GameInputGuess from './components/GameInputGuess';
import { itemSolution } from './types/types';
import Wordle from './components/Worlde';




function App() {
  const [solution, setSolution] = useState<itemSolution | null>(null)

  useEffect(() => {
    fetch("http://localhost:3001/solution")
      .then((res) => res.json())
      .then((data: itemSolution[]) => {
        const randomWord = data[Math.floor(Math.random() * data.length)]
        setSolution(randomWord)
      })
  }, [setSolution])
  
  return (
    <div className="App text-[100px] text-blue-700 w-full h-full">
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
