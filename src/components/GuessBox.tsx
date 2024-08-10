
import { motion } from 'framer-motion';

export default function GuessBox({correctLetters}:{correctLetters: string[]}) {
    return (
        <motion.div className='flex gap-2 items-center justify-between'>
        {
            correctLetters.map((letter, index) => (
                <motion.div key={index} className='text-white font-bold text-5xl w-[4.5rem] h-[4.5rem] flex items-center justify-center uppercase'
                    style={{backgroundColor: letter.length === 0 ? "transparent" : "var(--green)" }}>
                    {letter}
                </motion.div>
            ))
        }
        </motion.div>
    )
}