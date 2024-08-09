import { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import KeyBoard from "./KeyBoard"
import PopUp from "./PopUp"

interface Props {
    wordToGuess: string;
}

const Wordle = ({wordToGuess}: Props) => {

    const [showPopup, setShowPopup] = useState<boolean>(false);

    const {currentGuess, handlekeyUp, guesses, isGuessed, attempts, usedKeys} = useWordle(wordToGuess);

    useEffect(() => {
        window.addEventListener('keyup', handlekeyUp);

        if (isGuessed === true)
        {
            setTimeout(() => setShowPopup(true), 1000);
            window.removeEventListener('keyup', handlekeyUp);
        }

        if (attempts > 5)
        {
            setTimeout(() => setShowPopup(true), 1000);
            window.removeEventListener('keyup', handlekeyUp);
        }
        
        return () => window.removeEventListener('keyup', handlekeyUp);
    }, [handlekeyUp, isGuessed, attempts]);


    return (
        <>
            <div>{wordToGuess}</div>
            <Grid currentGuess={currentGuess} guesses={guesses} attempts={attempts}/>
            <KeyBoard usedKeys={usedKeys}/>
            {showPopup && <PopUp isGuessed={isGuessed} attempts={attempts} wordToGuess={wordToGuess}/>}
        </>
    )
}

export default Wordle;