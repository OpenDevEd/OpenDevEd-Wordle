import { useState } from "react"


const useWordle  = (WordToGuess: String) => {
    const [attempts, setAttempts] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [history, setHistory] = useState([]);
    const [isGuessed, setIsGuessed] = useState(false);

    const guessColoring = () => {

    }

    const submitGuess = () => {

    }

    const handlekeyUp = (event: KeyboardEvent) => {

        if (event.key === "Backspace")
        {
            setCurrentGuess((prev) => {
                return (prev.slice(0, -1))
            })
            return ;
        }

        if (/^[A-Za-z]$/.test(event.key))
        {
            if (currentGuess.length < 5)
            {
                setCurrentGuess((prev) => {
                    return prev + event.key;
                })

            }
        }
    }

    return ({attempts, currentGuess, guesses, isGuessed, handlekeyUp})
}

export default useWordle;