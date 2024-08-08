import { useState } from 'react';
import Wordle from './Components/Wordle';
import './App.css';

export interface Word {
  id: number;
  word: string;
}

const words : Word[] =  [
  { "id": 0, "word": "apple" },
  { "id": 1, "word": "bread" },
  { "id": 2, "word": "crane" },
  { "id": 3, "word": "dream" },
  { "id": 4, "word": "eagle" },
  { "id": 5, "word": "flood" },
  { "id": 6, "word": "grape" },
  { "id": 7, "word": "house" },
  { "id": 9, "word": "jolly" },
  { "id": 10, "word": "knack" },
  { "id": 11, "word": "lucky" },
  { "id": 12, "word": "moose" },
  { "id": 13, "word": "night" },
  { "id": 14, "word": "ocean" },
  { "id": 15, "word": "peace" },
  { "id": 16, "word": "quick" },
  { "id": 17, "word": "raven" },
  { "id": 18, "word": "stone" },
  { "id": 19, "word": "train" },
  { "id": 20, "word": "under" },
  { "id": 21, "word": "vivid" },
  { "id": 22, "word": "wheat" },
  { "id": 23, "word": "xenon" },
  { "id": 24, "word": "yacht" },
  { "id": 25, "word": "zebra" }
];

const getRandomWord = (): string  => {
  const rndm = Math.floor(Math.random() * words.length);

  return (words[rndm].word)
}

function App() {

  const [word, setWord] = useState<string>(getRandomWord);

  return (
    <div className="App">
      <h1>OpenDevEd Wordle</h1>
      {word && <Wordle wordToGuess={word}/>}
    </div>
  );
}

export default App;
