import React, { useEffect, useState } from 'react';
import { Input, Button, FormControl, useToast } from '@chakra-ui/react';
import PastGuesses from './PastGuesses';
import Letter from './Letter';
import initList from './InitList';
import { Link, useNavigate } from 'react-router-dom';
import GameInfo from './GameInfo';
import { FaArrowAltCircleLeft } from "react-icons/fa";


const GameArea = () => {
    const MAX_GUESSES = 6;
    const navigate = useNavigate(); // to navigate Between the components without refreching the page
    const [word, setWord] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [isError, setIsError] = useState(false);
    const [pastGuessWords, setPastGuessWords] = useState([]);
    const [pastGuessObjs, setPastGuessesObj] = useState(initList);
    const toast = useToast();

    let upperInputValue;

    useEffect(() => { // ueEffect to fetch the word once (just in the  firstrendring)
        const getWord = async () => {
            const response = await fetch('https://api.datamuse.com/words?sp=??????');
            const data = await response.json();
            const index = Math.floor(Math.random() * data.length); // Ensure index is within bounds
            console.log(data[index].word.toUpperCase());
            setWord(data[index] ? data[index].word.toUpperCase() : 'WORDLE');
        };
        getWord();
    }, []);

    const showError = (error) => {
        toast({
            title: "Error",
            description: error,
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top",
        });
    }


    const addInputToHistory = () => {
        setIsError(false);
        if (word === upperInputValue)
            navigate('/winning')

        const newLetters = [];
        for (let i = 0; i < upperInputValue.length; i++) {
            const key = upperInputValue[i];
            let color = 'gray';

            if (word[i] === upperInputValue[i])
                color = 'green';
            else if (word.includes(key))
                color = 'yellow';

            newLetters.push(new Letter(key, color)); // [{key : 'a', color : 'yellow'}, {key : 'b', color : 'green'}]
        }

        setPastGuessesObj(prevState => {
            const updatedState = [...prevState];
            updatedState[pastGuessWords.length] = newLetters;
            return updatedState;
        });

        setPastGuessWords(prevState => {
            const updatedWords = [...prevState, upperInputValue];
            if (updatedWords.length >= MAX_GUESSES) { // if the lenght of the past guesses is equal to 6 navigate yo losing Componenent
                navigate('/losing')
            }
            return updatedWords;
        });

        setInputValue(''); // clear The input
    }

    const handleSubmit = async (event) => {

        event.preventDefault(); // form element by default refrech The page on submit
        upperInputValue = inputValue.toUpperCase();

        const checkWordValidity = async () => {
            // the api return an array if the word is exists
            const response = await fetch(`https://api.datamuse.com/words?sp=${inputValue}`);
            const data = await response.json(); // convert response object to Js object
            return data.length === 0; 
        };

        const isInvalidWord = await checkWordValidity();

        if (inputValue.length < word.length) {
            setIsError(true);
            showError('Input length must be equal to 6.')

        } else if (isInvalidWord) {
            setIsError(true);
            showError('Input is not a valid English word.');
        } else if (pastGuessWords.includes(upperInputValue)){
            setIsError(true);
            showError('Already used word.');
        } 
        else {
            addInputToHistory()
        }
    };


    const handleChange = (event) => {
        const inputValue = event.target.value;
        
        if (!/^[a-zA-Z]*$/.test(inputValue)) { // if not alpha ERROR 
            setIsError(true);
            showError('Input must only contain alphabetic characters.');
        } else {
            setIsError(false);
            setInputValue(inputValue);
        }
    };

    return (
        <div className="relative w-[70%] p-4">
    
            <Link to={'/'} className="lg:-translate-x-20 flex justify-between border-2 text-white w-32 items-center
            scale-150 py-2 px-4 rounded-lg shadow-2xl hover:bg-blue-600 transition duration-300 ">
                <FaArrowAltCircleLeft className='scale-150' />
                Go back
            </Link>

            <form onSubmit={handleSubmit} className="mt-20  flex gap-y-4 flex-col justify-around items-center">
                <FormControl sx={{ '@media (min-width: 1024px)': { width: '50%' }, width: '100%' }} 
                isInvalid={isError}>
                    <Input
                        id="word-input"
                        size={"lg"}
                        className="slide-down text-center focus:text-white text-black scale-125 font-bold"
                        variant="filled"
                        maxLength={6}
                        placeholder="Guess a word with 6 characters"
                        value={inputValue}
                        onChange={handleChange}
                    />
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
