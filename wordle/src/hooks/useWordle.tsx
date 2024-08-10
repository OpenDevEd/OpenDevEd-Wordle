import React, { useState } from 'react';

const useWordle = (word: string) => {
	const [turns, setTurns] = useState(0);
	const [guesses, setGuesses] = useState<{key: string, color: string}[][]>([...Array(6)]);
	const [currentGuess, setCurrentGuess] = useState('');
	const [isCorrect, setIsCorrect] = useState(false);
	const [history, setHistory] = useState<string[]>(['']);
	const [usedKeys, setUsedKeys] = useState<{[key: string]: string}>({});


	const formatGuess = () => {
		let newLetter: {key: string, color: string};
		let formatedGuess: {key: string, color: string}[] = [];
		setCurrentGuess(prevCurrentGuess => prevCurrentGuess.toUpperCase());
		word = word.toLowerCase();
		for (let i = 0; i < currentGuess.length; i++) {
			if (word.includes(currentGuess[i])) {
				const indexes = [];
				for (let j = 0; j < word.length; j++) {
					if (word[j] === currentGuess[i]) {
						indexes.push(j);
					}
				}
				if (indexes.includes(i)) {
					newLetter = {
						key: currentGuess[i],
						color: 'green',
					}
				} else {
					newLetter = {
						key: currentGuess[i],
						color: 'yellow',
					} 
				}
			} else {
				newLetter = {
					key: currentGuess[i],
					color: 'red',
				}
			}
			formatedGuess.push(newLetter);
		}
		return formatedGuess;
	}

	const addNewGuesses = (formatedGuess: {key: string, color: string}[]) => {
		if (currentGuess === word) {
			setIsCorrect(prebIsCorrect => true);
		}
		let newGuesses = [...guesses];
		newGuesses[turns] = formatedGuess;
		setGuesses(prevGuesses => newGuesses);
		setTurns(prevTurns => prevTurns + 1);
		setHistory(prevHistory => [...prevHistory, currentGuess]);
		setCurrentGuess(prevCurrentGuess => '');
		setUsedKeys(prevUsedKeys => {
			let newKeys = {...prevUsedKeys};
			formatedGuess.forEach((letter) => {
				const currentColor = newKeys[letter.key];
				if (letter.color === 'green') {
					newKeys[letter.key] = 'green';
				}
				else if (letter.color === 'yellow' && currentColor !== 'green') {
					newKeys[letter.key] = 'yellow';
				}
				else if (letter.color === 'red' && currentColor !== 'green' && currentColor !== 'yellow') {
					newKeys[letter.key] = 'red';
				}
			});
			return newKeys;
		});
	}

	const handleKeyUp = ({key} : {key: React.Key}) =>{
		if (key == 'Enter') {
			if (currentGuess.length == 5) {
				if (!history.includes(currentGuess)) {
					let formatedGuess = formatGuess();
					addNewGuesses(formatedGuess);
				} else {
					console.log("Already guessed");
				}
			} else {
				console.log("Invalid guess");
			}
		}
		else if (key == 'Backspace') {
			console.log("Backspace");
			setCurrentGuess(prevCurrentGuess => prevCurrentGuess.slice(0, -1));
		}
		else if ((key >= 'a' && key <= 'z')
			|| (key >= 'A' && key <= 'Z')) {
			if (currentGuess.length < 5) {
				setCurrentGuess(prevCurrentGuess => prevCurrentGuess + key);
			}
		} 
	}

	return {
		turns,
		guesses,
		currentGuess,
		isCorrect,
		handleKeyUp,
		usedKeys,
	}
}

export default useWordle