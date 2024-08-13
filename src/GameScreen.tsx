

import "./App.css";
import Button from "./components/Button";
import BoxesContainer from "./components/BoxesContainer";
import { MutableRefObject, useEffect, useRef, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import { motion } from "framer-motion";
import 'react-toastify/dist/ReactToastify.css';
import GuessBox from "./components/GuessBox";
import GameAudio  from "./Audio";


export function checkValidWord(string: string, setStrings: any, setString: any, cont: any, word: string, setColors: any, strings: string[], setGameOver: any, setWinState: any, setLoseState: any, setCorrectLetters: any, gameSounds: MutableRefObject<GameAudio>, setIncorrectLetters: any) {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${string}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.title === "No Definitions Found") {
        toast(string + " is an invalid word.", { type: "error" });
        gameSounds.current.playSound("invalidWord");
      } else {
        if (!cont.state) return;

        let word_copy: string = word;
        setStrings((prev: string) => [...prev, string]);
        if (string === word) {
          setGameOver(true);
          setWinState(true);
          gameSounds.current.playSound("youWin");
        }
        else if (strings.length === 5) {
          setGameOver(true);
          setLoseState(true);
          gameSounds.current.playSound("youLose");
          return ;
        }

        const red = "rgba(173, 0, 0, 0.65)";
        const yellow = "rgba(172, 173, 0, 0.65)";
        const green = "rgba(42, 173, 0, 0.65)";

        let new_colors: string[] = [];
        for (let i = 0; i < string.length; i++) {
          if (string[i] === word_copy[i]) {
            setCorrectLetters((prev: string[]) => {
              if (prev[i] === "")
                gameSounds.current.playSound("correctGuess");
              prev[i] = string[i];
              return [...prev];
            });
            new_colors[i] = green;
            word_copy = word_copy.slice(0, i) + " " + word_copy.slice(i + 1);
          }
        }

        for (let i = 0; i < string.length; i++) {
          if (new_colors[i] === green) continue;

          if (word_copy.includes(string[i])) {
            new_colors[i] = yellow;
            word_copy = word_copy.slice(0, word_copy.indexOf(string[i])) + " " + word_copy.slice(word_copy.indexOf(string[i]) + 1);
          }
          else {
            setIncorrectLetters((prev: string[]) => {
              const copy = prev + string[i];
              console.log(copy);
              return copy;
            });
            new_colors[i] = red;
          }
        }
        setColors((prev: string[][]) => [...prev, new_colors]);
        setString((prev: string) => {
          const emptyString = "";
          prev = emptyString;
          return prev;
        });
      }
    });
}

async function generateRandomWord(fetchState: any) {
  return fetch("https://random-word-api.vercel.app/api?words=1&length=5")
    .then((res) => res.json())
    .then((data) => {
      if (!fetchState.state) return;
      return data[0];
    });
}

function GameScreen({ gameStart }: { gameStart: boolean }) {
  const [strings, setStrings] = useState<string[]>([]);
  const [colors, setColors] = useState<string[][]>([]);
  const [string, setString] = useState<string>("");
  const [word, setWord] = useState<string>("");
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [winState, setWinState] = useState<boolean>(false);
  const [loseState, setLoseState] = useState<boolean>(false);
  const [correctLetters, setCorrectLetters] = useState<string[]>(["", "", "", "", ""]);
  const [incorrectLetters, setIncorrectLetters] = useState<string>("");
  const gameSounds = useRef(new GameAudio(0.1));

  const checkIncorrectCharacters = (letter: string) => {
    const regex = /^[a-zA-Z]$/;
    return !regex.test(letter);
  };

  useEffect(() => {
    let cont = {
      state: true
    };


    if (word.length != 5) {
      generateRandomWord(cont).then((data) => { 
        if (data) 
          setWord(data) 
      });
    }

    window.onkeydown = (e) => {
      if (gameOver || !gameStart) return;
      const letter = e.key;
      gameSounds.current.playSound("keystroke");
      if (!checkIncorrectCharacters(letter)) {
        if (string.length < 6) {
          setString((prev) => prev + letter);
        }
      }
      if (e.key === "Backspace") {
        setString((prev) => prev.slice(0, -1));
      }
      if (e.key === "Enter") {
        if (string.length < 5)
          return;
        else if (string.length >= 5)
          setString((prev) => prev.slice(0, 5));
        checkValidWord(string, setStrings, setString, cont, word, setColors, strings, setGameOver, setWinState, setLoseState, setCorrectLetters, gameSounds, setIncorrectLetters);
      }
    };

    return () => {
      cont.state = false;
    }
  }, [string, strings, word, gameStart]);
  return (
    <motion.div
      className="flex-col gap-5 justify-center items-center h-screen w-screen overflow-hidden"
      style={{ display: gameStart ? "flex" : "none" }}
      >
      <GuessBox correctLetters={correctLetters} gameOver={gameOver}/>
      <BoxesContainer strings={strings} string={string} setString={setString} colors={colors} gameOver={gameOver} winState={winState} loseState={loseState} word={word} gameSounds={gameSounds}  incorrectLetters={incorrectLetters} setCorrectLetters={setCorrectLetters}/>
      <Button gameOverState={gameOver} setStrings={setStrings} setColors={setColors} setString={setString} setWord={setWord} setGameOver={setGameOver} setWinState={setWinState} setLoseState={setLoseState} setCorrectLetters={setCorrectLetters} setIncorrectLetters={setIncorrectLetters}/>
      <ToastContainer />
    </motion.div>
  );
}

export default GameScreen;
