import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";

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
            <Grid currentGuess={currentGuess} guesses={guesses} attempts={attempts}/>
        </>
    )
}

export default Wordle;