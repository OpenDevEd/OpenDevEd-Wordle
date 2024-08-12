import Game from './components/Game'
import './App.css';
import Navbar from './components/navigation/Navbar';
import { useEffect, useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="App bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}/>
      <Game />
    </div>
  );
}

export default App;
