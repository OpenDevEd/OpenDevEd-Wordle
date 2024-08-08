import { useEffect } from "react";
import useWordle from "../hooks/useWordle";

interface Props {
    wordToGuess: string;
}

const Wordle = ({wordToGuess}: Props) => {

    const {currentGuess, handlekeyUp, guesses, isGuessed, attempts} = useWordle(wordToGuess);

    useEffect(() => {
        window.addEventListener('keyup', handlekeyUp);

        return () => window.removeEventListener('keyup', handlekeyUp);
    }, [handlekeyUp]);

    useEffect(() => {
        console.log(guesses, attempts, isGuessed);
    }, [attempts, guesses, isGuessed]);

    return (
        <>
            <div>{wordToGuess}</div>
            <div>{currentGuess}</div>
        </>
    )
}

export default Wordle;