import useWordle from '../hook/useWordle'
import { WordleProps, alertProps, itemSolution } from '@/utils/types'
import React, { useEffect } from 'react'
import Grid from './Grid'
import Keypad from './Keypad'
import Alert from '../utils/Alerts'



const Wordle = ({ solution, data}:{solution:itemSolution, data:itemSolution[] | null}) => {
    const { handleKeyup, currentGuess, setCurrentGuess, guesses, turn, alertState, setAlertState } = useWordle(solution,data)
    console.log(alertState)
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)
        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])
    return (
        <div className='w-full h-full flex flex-col justify-evenly items-center'>
            <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
            <Keypad solution={solution} handleKeyup={handleKeyup} setCurrentGuess={setCurrentGuess} currentGuess={currentGuess} />
            {alertState && <Alert alertState={alertState}  setAlertState={setAlertState}/>}
        </div>
    )
}

export default Wordle