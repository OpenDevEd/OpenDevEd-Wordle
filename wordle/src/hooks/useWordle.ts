import { useState } from "react"

type Status = "CORRECT" | "MISPLACED" | "WRONG";

export interface Letter {
    value: string;
    state: Status;

}

const useWordle  = (WordToGuess: string) => {
    const [attempts, setAttempts] = useState<number>(0);
    const [currentGuess, setCurrentGuess] = useState<string>('');
    const [guesses, setGuesses] = useState([...Array(6)]);
    const [history, setHistory] = useState<string[]>([]);
    const [isGuessed, setIsGuessed] = useState<boolean>(false);

    const guessColoring = () => {
        const correctWord: (string | null)[] = WordToGuess.split(''); 
        const enteredGuess: string[] = currentGuess.split('');
        const guessesColored: Letter[] = enteredGuess.map((l) => {
            return  ({value: l, state: "WRONG"});
        })

        guessesColored.forEach((letter, i) => {
            if (correctWord[i] === letter.value)
            {
                guessesColored[i].state = "CORRECT";
                correctWord[i] = null;
            }
        })

        guessesColored.forEach((letter, i) => {
            if (correctWord.includes(letter.value) && letter.state !== "CORRECT")
            {
                guessesColored[i].state = "MISPLACED";
                correctWord[correctWord.indexOf(letter.value)] = null;
            }
        })

        return (guessesColored);
    }

    const submitGuess = (guess: Letter[]) => {
        if (currentGuess === WordToGuess)
            setIsGuessed(true);

        setGuesses((prevGuesses) => {
            const newGuesses = [...prevGuesses];
            newGuesses[attempts] = guess;
            return (newGuesses);
        })

        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess];
        })

        setAttempts((prevAttempts) => {
            return (prevAttempts + 1)
        })

        setCurrentGuess('');
    }

    const handlekeyUp = (event: KeyboardEvent) => {

        if (event.key === "Enter")
        {
            if (attempts > 5)
            {
                console.log('you have no more attempts');
                return ;
            }

            if (history.includes(currentGuess))
            {
                console.log('duplicate word');
                return ;
            }

            if (currentGuess.length !== 5)
            {
                console.log('word must be 5 characters')
                return ;
            }
            const colored: Letter[] = guessColoring();
            submitGuess(colored);
            // console.log(colored);
        }

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