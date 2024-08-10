import Box from "./Box";
import { motion } from "framer-motion";
import '../App.css';

export default function BoxesContainer({
  strings,
  string,
  colors,
  gameOver,
  winState,
  loseState,
  word,
}: {
  strings: string[];
  string: string;
  colors: string[][];
  gameOver: boolean;
  winState: boolean;
  loseState: boolean;
  word: string;
}) {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: gameOver ? 0 : 1, scale: 1, transition: { duration: 0.25 }, display: gameOver ? "none" : "grid", height: gameOver ? 0 : "auto" }}
      className="grid grid-cols-5 grid-rows-6 gap-2">
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
    </>
  );
}
