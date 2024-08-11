
import { InputField, InputFields } from './inputField';
import { InputKeys } from './inputKeys';
import { useContext, useEffect, useState } from 'react';
import { wordGenerator } from './wordGenerator';
import { Delete, Submit } from './submitGuess';
import { GuessedWord } from './guessedWords';
import { useNavigate } from 'react-router-dom';
import { GameContext } from './GameContext';

export function Game({children})
{
	let [registeredWords, setRegisteredWords] = useState(Array(5).fill(null).map(() => Array(0).fill('')));
	let [guessedWord, setGuessedWord] = useState(0);
	let [attempts, setAttempts] = useState(6);
    const navigate = useNavigate('');
    let {gameState, setGameState} = useContext(GameContext);

    if (attempts <= 0)
    {
        setGameState('lose');
        navigate('/endgame');
    }
    

	const [words, setWords] = useState([]);

    useEffect(() => {
        const initialWords = [
            wordGenerator(),
            wordGenerator(),
            wordGenerator(),
            wordGenerator(),
            wordGenerator()
        ];
		
		setWords(initialWords);
    }, []);

    if (guessedWord == 5)
    {
        setGameState('win');
        navigate('/endgame');
    }


	const addRegistered = (newRow) => {
		setRegisteredWords(prevRegisteredWords => {
		const updatedWords = [...prevRegisteredWords];
		updatedWords[guessedWord] = newRow;
		return updatedWords;
		});
	};

	const removeRegistered = (rowIndex, colIndex) => {
		setRegisteredWords(prevRegisteredWords => {
		  const updatedWords = prevRegisteredWords.map((row, rIdx) => {
			if (rIdx === rowIndex) {
			  return row.filter((_, cIdx) => cIdx !== colIndex);
			}
			return row;
		  });
		  return updatedWords;
		});
	};

const titleStyle = {
	color: 'white',
	fontFamily: 'sans-serif',
	margin: 'auto',
	width: '13%',
	padding: '10px'
};

return (
	<>
		<h1 style={titleStyle}>{attempts}</h1>
			<InputFields 
				registeredWords={registeredWords}
				addRegistered={addRegistered}
			/>
			<InputKeys  
				registeredWords={registeredWords}
				addRegistered={addRegistered}
				guessedWord={guessedWord}
				setGuessedWord={setGuessedWord}
				setAttempts={setAttempts}			
				words={words}
				removeRegistered={removeRegistered}
			/>
		<div>
			<GuessedWord 
					words={words}
					registeredWords={registeredWords}
					guessedWord={guessedWord}/>
		</div>
	</>);
}

