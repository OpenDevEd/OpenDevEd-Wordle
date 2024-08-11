import React, { useEffect, useState } from 'react';
import { Input, Button, FormErrorMessage, FormControl } from '@chakra-ui/react';
import PastGuesses from './PastGuesses';
import Letter from './Letter';
import initList from './InitList';
import { useNavigate } from 'react-router-dom';
import GameInfo from './GameInfo';

const GameArea = () => {
    const MAX_GUESSES = 6;
    const navigate = useNavigate();
    const [word, setWord] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [pastGuessWords, setPastGuessWords] = useState([]);
    const [pastGuessObjs, setPastGuessesObj] = useState(initList);
    let upperInputValue;

    useEffect(() => {
        const getWord = async () => {
            const response = await fetch('https://api.datamuse.com/words?sp=??????');
            const data = await response.json();
            const index = Math.floor(Math.random() * data.length); // Ensure index is within bounds
            setWord(data[index] ? data[index].word.toUpperCase() : 'WORDLE');
        };
        getWord();
    }, []);

    const addInputToHistory = () => {
        setIsError(false);
        if (word === upperInputValue)
            navigate('/winning')

        const newLetters = [];
        for (let i = 0; i < upperInputValue.length; i++) {
            const key = upperInputValue[i];
            let color = 'gray';

            if (word[i] === upperInputValue[i]) {
                color = 'green';
            } else if (word.includes(key)) {
                color = 'yellow';
            }

            newLetters.push(new Letter(key, color));
        }

        setPastGuessesObj(prevState => {
            const updatedState = [...prevState];
            updatedState[pastGuessWords.length] = newLetters;
            return updatedState;
        });

        setPastGuessWords(prevState => {
            const updatedWords = [...prevState, upperInputValue];
            if (updatedWords.length >= MAX_GUESSES) {
                navigate('/losing')
            }
            return updatedWords;
        });

        setInputValue('');
    }

    const handleSubmit = async (event) => {
                console.log(word);

        event.preventDefault();
        upperInputValue = inputValue.toUpperCase();

        const checkWordValidity = async () => {
            const response = await fetch(`https://api.datamuse.com/words?sp=${inputValue}`);
            const data = await response.json();
            return data.length === 0;
        };

        const isInvalidWord = await checkWordValidity();

        if (inputValue.length < word.length) {
            setIsError(true);
            setErrorMessage('Input length must be equal to 6.');
        } else if (isInvalidWord) {
            setIsError(true);
            setErrorMessage('Input is not a valid English word.');
        } else if (pastGuessWords.includes(upperInputValue)){
            setIsError(true);
            setErrorMessage('Already used word.');
        } 
        else {
            addInputToHistory()
        }
    };

    const playSound = () => {
        const audio = new Audio('/click.mp3');
        audio.play();
    };

    const handleChange = (event) => {
        const inputValue = event.target.value;
        playSound();
        if (!/^[a-zA-Z]*$/.test(inputValue)) {
            setIsError(true);
            setErrorMessage('Input must only contain alphabetic characters.');
        } else {
            setIsError(false);
            setErrorMessage('');
            setInputValue(inputValue);
        }
    };

    return (
        <div className="relative w-[70%] p-4">
            <form onSubmit={handleSubmit} className="mt-20  flex gap-y-4 flex-col justify-around items-center">
                <FormControl sx={{ '@media (min-width: 1024px)': { width: '50%' }, width: '100%' }} 
                isInvalid={isError}>
                    <Input
                        id="word-input"
                        size={"lg"}
                        className="slide-down text-center focus:text-black focus:text-white text-black scale-125 font-bold"
                        variant="filled"
                        maxLength={6}
                        placeholder="Guess a word with 6 characters"
                        value={inputValue}
                        onChange={handleChange}
                    />
                    {isError && <FormErrorMessage className='scale-125'>{errorMessage}</FormErrorMessage>}
                </FormControl>
                <Button type="submit" className='slide-down scale-125 mt-4' colorScheme="teal">Submit</Button>
            </form>
            <div className="animate-slide-in slide-in flex justify-center mt-20">
                <PastGuesses pastGuesses={pastGuessObjs} />
            </div>
            <GameInfo/>
        </div>
    );
};

export default GameArea;
