import useWordle from '../hook/useWordle'
import { WordleProps } from '@/types/types'
import React, { useEffect } from 'react'
import Grid from './Grid'



const Wordle: React.FC<WordleProps> = ({ solution }) => {
    const { handleKeyup ,currentGuess, guesses} = useWordle(solution)
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)
        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])
    return (
        <div>
            <div>solution - {solution.word}</div>
            <div>current guess - {currentGuess}</div>
            <Grid guesses={guesses} currentGuess={currentGuess}/>
        </div>
    )
}

export default Wordle