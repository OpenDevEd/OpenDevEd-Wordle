import { useEffect } from "react";
import useWordle from "../hooks/useWordle";

interface Props {
    wordToGuess: String;
}

const Wordle = ({wordToGuess}: Props) => {

    const {currentGuess, handlekeyUp} = useWordle(wordToGuess);

    useEffect(() => {
        window.addEventListener('keyup', handlekeyUp);

        return () => window.removeEventListener('keyup', handlekeyUp);
    }, [handlekeyUp]);

    return (
        <>{currentGuess}</>
    )
}

export default Wordle;