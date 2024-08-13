import { useContext } from 'react';
import { GameContext } from '../Context/Context';
import { motion } from 'framer-motion';

//Display area for previous guesses
export const GuessList = () => {
    const {  attempt, targetWord , color , wordsList  , } = useContext(GameContext);

    //Determine the color of the letter from its condition in the word
    const getColorClass = (c, index) => {

        if (!targetWord || c === '') return color.background; 
        if (targetWord.word[index] === c) {
            //The character is in the right place
            return 'bg-green-500';
        } else if (targetWord.word.includes(c)) {
            //The character is in the wrong place
            return 'bg-yellow-500';
        } 
        else {
            //The character does not exist
            return 'bg-gray-500';
        }
    };

    return (
        <div className=' h-full flex flex-col gap-4 justify-center items-center text-white text-3xl font-bold w-full px-5'>
            {wordsList.map((result, rowIndex) => (
                <div key={rowIndex} className='w-full flex gap-4 h-1/6 '> 
                    {result.map((c, colIndex) => {
                        if (rowIndex === attempt - 1) {
                            const delay = colIndex * 0.1; 
                            return (
                                //the animation for the current attempt
                                <motion.span
                                    key={colIndex}
                                    className={`w-1/5 h-full  flex items-center justify-center border-2  rounded-lg shadow-lg ${getColorClass(c, colIndex)}`}
                                    initial={{ rotateX: 0, opacity: 0 }}
                                    animate={{
                                        rotateX: [0, 90, 90, 0],
                                        opacity: [0, 0 , 0, 1], 
                                    }}
                                    transition={{
                                        duration: 0.7,
                                        times: [0, 0.45, 0.55, 1],
                                        delay ,
                                    }}
                                >
                                    <span>{c}</span>
                                </motion.span>
                            );
                        }
                        return (
                            //remaining attempts
                            <span
                                key={colIndex}
                                className={`w-1/5 h-full flex  items-center justify-center border-2 rounded-lg shadow-lg ${getColorClass(c, colIndex)}`}
                            >
                                {c}
                            </span>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};


