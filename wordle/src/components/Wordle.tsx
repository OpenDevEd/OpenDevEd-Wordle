import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keyboard from "./Keyboard";

function Wordle( {word}: { word: string } ) {

	const { currentGuess, handleKeyUp, isCorrect, guesses, turns, usedKeys }: { currentGuess: string, handleKeyUp: ({key}: {key: React.Key}) => void, isCorrect: Boolean, guesses: any, turns: number, usedKeys: any } = useWordle(word);

	useEffect(() => {
		document.addEventListener('keyup', handleKeyUp);

		return () => {
			document.removeEventListener('keyup', handleKeyUp);
		}
	}, [handleKeyUp]);

	useEffect(() => {
		console.log(guesses, turns, isCorrect);
		if (isCorrect || turns === 6) {
			isCorrect ? console.log('You win!') : console.log('You lose!');
			document.removeEventListener('keyup', handleKeyUp);
			// window.location.reload();
		}
	}, [turns, isCorrect]);

		return (
				<div>
						<h1>{word}</h1>
						<h1>{currentGuess}</h1>
						<Grid currentGuess={currentGuess} guesses={guesses} turns={turns}/>
						<Keyboard usedKeys={usedKeys}/>
				</div>
		)
}

export default Wordle;