import { useState } from 'react';
import './App.css';
import Game from './Game/Game';
import GameContextProvider from './Game/GameContextProvider';
import Guide from './Guide/Guide';
import { Toaster } from 'react-hot-toast';

function App() {

  const [help, setHelp] = useState(false);

  return (
    <div className="App">
      <Toaster position="top-right" reverseOrder={false} />
      <nav className='navBar'>
        <h1 className='title'>Wordle</h1>
        <span onClick={() => setHelp(true)} className="material-symbols-outlined">help</span>
      </nav>
      <div className='Container'>
          <GameContextProvider>
            {!help && <Game/> }
          </GameContextProvider>
          {help && <Guide setHelp={setHelp}/>}
      </div>
    </div>
  );
}

export default App;
