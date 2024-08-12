import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import GameScreen from "./GameScreen";
import "./App.css";

export default function GameMainScreen() {

    const [animationState, setAnimationState] = useState("initial");
    const [gameStart, setgameStart] = useState(false);

    const animationVariants = {
        start: { opacity: 1, scale: 1, translateY: 0 },
        end: { opacity: 0, scale: 0, blur: 10, translate: -500, display: "none", height: 0 },
    };


    useEffect(() => {
        window.onclick = () => {
            setgameStart(prev => prev = true);
            console.log(gameStart);
        }
        if (!gameStart) {
            setAnimationState("start");
        } else {
            setAnimationState("end");
        }
    }, [gameStart]);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.5, translateY: -500 }}
                animate={animationState}
                variants={animationVariants}
                onClick={() => {
                    setgameStart(prev => prev = true);
                }}
                className="flex flex-col gap-5 justify-center items-center select-none h-screen w-screen overflow-hidden"
                >
                <h1 className="text-fuchsia-300 md:text-9xl text-7xl font-bold flex justify-center items-center flex-col">
                    Wordle
                </h1>
                <p className="text-white font-extralight text-center text-xl">Tap the screen to play</p>
            </motion.div>
            <GameScreen gameStart={gameStart} />
        </>
    )
}
