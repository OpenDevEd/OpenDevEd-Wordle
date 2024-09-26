import { useEffect, useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import { itemSolution } from './utils/types';
import Wordle from './components/Worlde';




function App() {
  const [solution, setSolution] = useState<itemSolution | null>(null)
  const [data, setData] = useState<itemSolution[] | null>(null)

  useEffect(() => {
    fetch("http://localhost:3001/solution")
      .then((res) => res.json())
      .then((data: itemSolution[]) => {
        const randomWord = data[Math.floor(Math.random() * data.length)]
        setSolution(randomWord)
        setData(data)
      })
  }, [setSolution])
  
  return (
    <div className="App text-[20px] text-blue-700 h-screen">
      <div className='h-full w-full   '>
        <GameBoard />
        <div className='mx-auto container  h-full max-w-[500px]'>
          {solution && <Wordle solution={solution} data={data}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
