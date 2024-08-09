import { useState } from "react"

type Status = "CORRECT" | "MISPLACED" | "WRONG";

export interface Letter {
    value: string;
    state: Status;
}

export interface UsedKeys {
    [key: string]: Status | undefined;   
}

const useWordle  = (WordToGuess: string) => {
    const [attempts, setAttempts] = useState<number>(0);
    const [currentGuess, setCurrentGuess] = useState<string>('');
    const [guesses, setGuesses] = useState([...Array(6)]);
    const [history, setHistory] = useState<string[]>([]);
    const [isGuessed, setIsGuessed] = useState<boolean>(false);
    const [usedKeys, setUsedKeys] = useState<UsedKeys>({});

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

        setUsedKeys((prevUsedKeys) => {
            const newKeys = {...prevUsedKeys};

            guess.forEach((letter) => {
                const state = newKeys[letter.value];

                if (letter.state === "CORRECT")
                {
                    newKeys[letter.value] = "CORRECT";
                    return ;
                }

                if (letter.state === "MISPLACED" && state !== "CORRECT")
                {
                    newKeys[letter.value] = "MISPLACED";
                    return ;
                }

                if (letter.state === "WRONG" && state !== "CORRECT" && state !== "MISPLACED")
                {
                    newKeys[letter.value] = "WRONG";
                    return ;
                }

                return (newKeys);
            })

            return newKeys;
        })

        setCurrentGuess('');
    }

    const handlekeyUp = (event: KeyboardEvent) => {

        if (event.key === "Enter")
        {
            if (attempts > 5)
                return ;

            if (history.includes(currentGuess))
                return ;

            if (currentGuess.length !== 5)
                return ;
            const colored: Letter[] = guessColoring();
            submitGuess(colored);
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

    return ({attempts, currentGuess, guesses, isGuessed, handlekeyUp, usedKeys})
}

export default useWordle;