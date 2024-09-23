import { items, variants, variantsFull } from '../utils/Variants'
import { guessesProps } from '../utils/types'
import { motion } from 'framer-motion'



const Row = ({g, currentGuess, turn}: { g?: guessesProps[], currentGuess?: string, turn: number }) => {
  if (g) {
    return (
      <motion.div className='flex' variants={variantsFull} animate={"visible"} initial={"hidden"}>
        {g?.map((item, i) => (
          <motion.div key={i} variants={items} className={`row rotate-180 border-[3px] ${item?.color === "green" ? "bg-green border-green" : item?.color === "yellow" ? "bg-yellow border-yellow" : "border-gray0 bg-gray0"}`}  >{item.key}</motion.div>
        ))}
      </motion.div>
    )
  }

  if (currentGuess) {
    let currentGuessArray = [...currentGuess]
    return (
      <div className='flex'>
        {
          Array(5).fill(1).map((_, j) => {
            if (currentGuessArray?.[j])
              return <motion.div key={j} variants={variants} animate={"end"} initial={"start"} className='row'>{currentGuessArray[j]}</motion.div>
            return <div key={j} className='row'></div>
          })
        }
      </div>
    )
  }

  return (
    <div className='flex'>
      <div className='row'></div>
      <div className='row'></div>
      <div className='row'></div>
      <div className='row'></div>
      <div className='row'></div>
    </div>
  )
}

export default Row
