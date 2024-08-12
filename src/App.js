import { Header } from "./components/Header/Header";
import { Games } from "./components/Game/Game";

import { useContext, useEffect } from 'react'
import { GameContext } from './components/Context/Context'
import { useParams } from 'react-router-dom'
function App() {

  const { id } = useParams();
  const { color , fetchWord} = useContext(GameContext);
  useEffect(()=>{
        fetchWord(id);
  },[]);
  return (
    <div className={`h-screen w-screen flex justify-between items-center flex-col ${color.background} ${color.text}`}>
      <Header />
      <Games />
    </div>
  );
}

export default App;


