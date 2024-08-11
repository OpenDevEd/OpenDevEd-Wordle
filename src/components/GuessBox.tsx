
import { motion } from 'framer-motion';

export default function GuessBox({correctLetters, gameOver}:{correctLetters: string[], gameOver: boolean}) {
    return (
        <motion.div 
            animate={{ 
                        opacity: gameOver ? 0 : 1, 
                        transition: { duration: 0.5 },
                        height: gameOver ? 0 : ""
                    }}
        className='flex gap-2 items-center justify-between'>
        {
            correctLetters.map((letter, index) => (
                <motion.div 
                    transition={{ duration: 0.5 }}
                    key={index} className='text-white font-bold text-5xl w-[4.5rem] h-[4.5rem] flex items-center justify-center uppercase transition-all'
                    style={
                        {
                            backgroundColor: letter.length === 0 ? "transparent" : "var(--green)" ,
                            height: letter.length === 0 ? "0" : "",
                        }
                    }>
                    {letter}
                </motion.div>
            ))
        }
        </motion.div>
    )
}