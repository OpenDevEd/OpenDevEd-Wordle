
import { useEffect } from 'react';
import { VscDebugRestart } from "react-icons/vsc";
import { motion, useAnimation } from 'framer-motion';


function resetGame(setStrings: any, setColors: any, setString: any, setWord: any, setGameOver: any, setCorrectLetters: any, setWinState: any, setLoseState: any) {
    setStrings([]);
    setColors([]);
    setString("");
    setWord("");
    setGameOver(false);
    setCorrectLetters(["", "", "", "", ""]);
    setWinState(false);
    setLoseState(false);
}  

export default function Button(props: any) {
    const { setStrings, setColors, setString, setWord, setGameOver, gameOverState, setCorrectLetters, setWinState, setLoseState } = props;
    const controls = useAnimation();

    useEffect(() => {
        if (gameOverState) {
            controls.start({
                transform: "translateY(25px)",
                opacity: 1,
                display: "block",
                transition: { duration: 0.5 }
            });
        } else {
            controls.start({
                transform: "translateY(0px)",
                opacity: 0,
                display: "none",
                transition: { duration: 0.5 }
            });
        }
    }, [gameOverState, controls]);

    return (
        <motion.button 
            initial={{ transform: "translateY(0px)", opacity: 0, display: "none" }}
            animate={controls}
            className="bg-fuchsia-400 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded w-[5rem] h-[3rem]"
            onClick={() => resetGame(setStrings, setColors, setString, setWord, setGameOver, setCorrectLetters, setWinState, setLoseState)}>
            <VscDebugRestart className="inline-block w-[1.5rem] h-[1.5rem]" />
        </motion.button>
    );
}