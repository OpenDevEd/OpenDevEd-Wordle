import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState, useEffect } from "react";
import GameUI from "./Components/Game";

const generateWord = async () => {
  try {
    const response = await fetch(
      "https://random-word-api.herokuapp.com/word?length=5"
    );
    const randomWord = await response.json();
    return randomWord[0];
  } catch (error) {
    return "";
  }
};

function App() {
  const [word, setWord] = useState("");

  useEffect(() => {
    const fetchWord = async () => {
      const word = await generateWord();
      setWord(word);
    };

    fetchWord();
  }, []);

  return (
    <div className="App">
      <Router>
        <GameUI word={word} />
      </Router>
    </div>
  );
}

export default App;
