import Box from "./Box";
import { motion } from "framer-motion";
import '../App.css';
import Keyboard from "./Keyboard";
import GameAudio from "../Audio";
import { MutableRefObject, useEffect, useState } from "react";
import ConfettiExplosion from 'react-confetti-explosion';


export default function BoxesContainer({
  strings,
  string,
  setString,
  colors,
  gameOver,
  winState,
  loseState,
  word,
  gameSounds,
  incorrectLetters,
  setCorrectLetters,
}: {
  strings: string[];
  string: string;
  colors: string[][];
  gameOver: boolean;
  winState: boolean;
  loseState: boolean;
  word: string;
  setString: any;
  gameSounds: MutableRefObject<GameAudio>;
  incorrectLetters: string;
  setCorrectLetters: any
}) {

  const [currentAnimState, setCurrentAnimState] = useState("start");
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    if (!gameOver) {
      setCurrentAnimState("start");
    } else {
      setCurrentAnimState("end");
    }
    if (winState) {
      setTimeout(() => {
        setIsExploding(true);
      }, 750);
    }
  }, [gameOver]);

  const animationStates = {
    start : { opacity: 1, scale: 1, display: "grid", height: "auto", translateY: 0 },
    end : { opacity: 0, scale: 0, height: 0, display: "none", translateY: -500 }
  }

  const confettiData = {
    force: 0.6,
    duration: 3200,
    particleCount: 100,
    width: 1000,
  }
  

  return (
    <>
      <motion.div 
        className="flex flex-col items-center md:gap-5 gap-1 select-none">
        <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={currentAnimState}
            variants={animationStates}
          className="grid grid-cols-5 grid-rows-6 md:gap-2 gap-1 w-max">
            {Array(6)
              .fill(0)
              .map((_, row) =>
                Array(5)
                  .fill(0)
                  .map((_, column) => (
                    <Box
                      key={row * 5 + column}
                      row={row}
                      column={column}
                      strings={strings}
                      string={string}
                      colors={colors}
                    />
                  ))
              )}
        </motion.div>
        <Keyboard string={string} setString={setString} gameSounds={gameSounds} incorrectLetters={incorrectLetters} word={word} setCorrectLetters={setCorrectLetters} gameOver={gameOver}/>
      </motion.div>
    
      <motion.h2
        className="text-7xl font-bold delay-500 text-center"
        initial={{ display: "none", opacity: 0 }}
        animate={{
          opacity: gameOver ? 1 : 0,
          transition: { duration: 0.25 },
          display: gameOver ? "block" : "none",
        }}
        style={{
          color: winState ? "green" : loseState ? "red" : "transparent",
        }}
      >{winState ? "You Win!" : loseState ? "You Lose!" : ""} <br></br>
        <span className="text-white text-5xl">Correct word is {word}</span>
      </motion.h2>
      <div 
        style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
        }}>
          {winState && isExploding && <ConfettiExplosion {...confettiData}/>}
      </div>
    </>
  );
}
