import { useEffect, useState } from 'react'
import Wordle from './components/Wordle';
// import Keyboard from './components/keyboard';

function App() {
	const [todaysWord, setTodaysWord] = useState('');

	useEffect(() => {
		async function fetchWords() {
			const response = await fetch('data/words.json');
			const data = await response.json();
			setTodaysWord(data.words[Math.floor(Math.random() * data.words.length)].word);
		}
		fetchWords();
	}, []);

  return (
    <>
			{
				todaysWord && <Wordle word={todaysWord} />
			}
    </>
  )
}

export default App
