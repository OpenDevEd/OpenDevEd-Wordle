import { motion } from "framer-motion";
import { useRef } from "react";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FiDelete } from "react-icons/fi";
import '../App.css';


export default function Keyboard(
    {
        string,
        setString,
        gameSounds,
        incorrectLetters,
        word,
        setCorrectLetters,
        gameOver,
    }: 
    {
        string: string;
        setString: any;
        gameSounds: any;
        incorrectLetters: string;
        word: string;
        setCorrectLetters: any;
        gameOver: boolean;
    }) {
    const timerId = useRef(0);
    const keyboardLayout = useRef([
        "q","w","e","r","t","y","u","i","o","p",
        "a","s","d","f","g","h","j","k","l",
        "z","x","c","v","b","n","m"
    ])


    const deleteEntireString = () => {
        timerId.current = setTimeout(() => {
            setString("");
            gameSounds.current.playSound("keystroke");
        }, 750);
    }

    const stopDeleteEntireString = () => {
        clearTimeout(timerId.current);
    }

    return (
        <motion.div 
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: gameOver ? 0 : 1, translateY: gameOver ? 100 : 0, transition: { duration: 0.25, delay: 0.2 }, display: gameOver ? "none" : "flex" }}
            className="flex gap-2 flex-wrap justify-center bg-neutral-900 rounded-xl w-[100%] md:w-[550px] border border-neutral-500 select-none">
            <motion.div className="flex w-full items-center justify-between border-b border-b-neutral-500 pb-2 mb-1 bg-neutral-800 p-2 rounded-xl">
                <motion.button 
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, transition: { duration: 0.25, delay: 0.05 * 26 } }}
                    whileHover={{ scale: 1.05, backgroundColor: "var(--green)", opacity: 0.95 }}
                    whileTap={{ scale: 0.95, boxShadow: "none", transition: { duration: 0.1 } }}
                    onClick={ () => { 
                        gameSounds.current.playSound("keystroke");
                        if (string.length === 5) {
                            const e = new KeyboardEvent("keydown", { key: "Enter" });
                            window.dispatchEvent(e);
                        }
                    }}
                    style={{ fontFamily: "system-ui", boxShadow: "#8f8c8c 0px -4px inset" }}
                    className="bg-neutral-500 flex items-center justify-center text-neutral-100 font-bold w-16 h-11 rounded border border-neutral-500">
                    <MdOutlineKeyboardReturn className="size-6"/>
                </motion.button>

                <motion.button 
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, transition: { duration: 0.25, delay: 0.05 * 26 } }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgb(146 105 1)", opacity: 0.95 }}
                    whileTap={{ scale: 0.95, transform: "rotate(15deg)", boxShadow: "none", transition: { duration: 0.1 } }}
                    onClick={ () => { 
                        gameSounds.current.playSound("keystroke"); 
                        setCorrectLetters((prev: string[]) => {
                            const copy = [...prev];
                            copy[copy.indexOf("")] = word[copy.indexOf("")];
                            return copy;
                        });
                    }}
                    style={{ fontFamily: "system-ui", boxShadow: "#8f8c8c 0px -4px inset" }}
                    className="bg-neutral-500 flex items-center justify-center text-neutral-100 font-bold w-16 h-11 rounded border border-neutral-500">
                    <HiOutlineLightBulb className="size-6"/>
                </motion.button>

                <motion.button 
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, transition: { duration: 0.25, delay: 0.05 * 26 } }}
                    whileHover={{ scale: 1.05, backgroundColor: "#6A2E35", opacity: 0.95 }}
                    whileTap={{ scale: 0.95, boxShadow: "none", transition: { duration: 0.1 } }}
                    onClick={ () => { 
                        gameSounds.current.playSound("keystroke"); 
                        if (string.length > 0) {
                            setString((prev: string) => prev.slice(0, -1));
                        }
                    }}
                    onTapStart={deleteEntireString}
                    onTapCancel={stopDeleteEntireString}
                    onMouseDown={deleteEntireString}
                    onMouseUp={stopDeleteEntireString}
                    style={{ fontFamily: "system-ui", boxShadow: "#8f8c8c 0px -4px inset" }}
                    className="bg-neutral-500 flex items-center justify-center text-neutral-100 font-bold w-16 h-11 rounded border border-neutral-500">
                    <FiDelete className="size-6"/>
                </motion.button>
            </motion.div>

            <motion.div className="flex flex-wrap gap-2 items-center justify-center pb-3">
            {
                keyboardLayout.current
                .map((key, index) => (
                    <motion.button 
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1, transition: { duration: 0.25, delay: 0.025 * index } }}
                        whileHover={{ scale: !incorrectLetters.includes(key) ? 1.05: 1, backgroundColor: !incorrectLetters.includes(key) ? "rgb(101 101 100)" : "initial" , opacity: 0.95 }}
                        whileTap={{ scale: !incorrectLetters.includes(key) ? 0.95: 1, boxShadow: !incorrectLetters.includes(key) ? "none" : "" , transition: { duration: 0.25 } }}
                        onClick={ () => { 
                                gameSounds.current.playSound("keystroke"); 
                                if (string.length < 5) {
                                    setString((prev: string) => prev + key);
                                }
                        }}
                        style={{ fontFamily: "system-ui", boxShadow: "#8f8c8c 0px -4px inset", backgroundColor: incorrectLetters.includes(key) ? "#371d1d" : "rgb(115 115 115)" }}
                        disabled={incorrectLetters.includes(key)}
                        key={index} className="bg-neutral-500 text-neutral-100 font-bold size-9 md:size-11 rounded border border-neutral-500 ">
                        {
                            key.toUpperCase()
                        }
                    </motion.button>
            ))}
            </motion.div>
        </motion.div>
    )
}