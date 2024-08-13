import { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export const GameContext = createContext();


const URL = 'http://localhost:3000/';

const board = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
];

//Target word selection (randomly generate a word at the start of the game)
const getRandomWord = async (id) => {
    try {
        const response = await axios.get('/words.json');

        if (response.status === 200 && response.headers['content-type'].includes('application/json')) {
            
            const data = response.data;
            if (!Array.isArray(data) || data.length === 0) {
                throw new Error('Word list is empty or not an array');
            }
            const foundWord = data.find(item => item.id === id);
            if (foundWord) {
                return foundWord;
            } else {
                const randomIndex = Math.floor(Math.random() * data.length);
                return data[randomIndex];
            }
        } else {
            throw new Error(`Unexpected content type: ${response.headers['content-type']}`);
        }
    } catch (error) {
        console.error('Error fetching the random word:', error);
        return null;
    }
};


const GameProvider = ({ children }) => {

    const navigate = useNavigate();
    //states required for storing infos
    const [targetWord, setTargetWord] = useState({
        id: null,
        word: null,
        hints: null,
    });
    const [wordsList, setWordsList] = useState(board);
    const [currentWord, setCurrentWord] = useState('');
    const [attempt, setAttempt] = useState(0);
    const [checkAttempt, setCheckAttempt] = useState(false);
    const [hints, setHints] = useState(3);
    const [end, setEnd] = useState(false);

    // States required for storing statistics 
    const [loss, setLoss] = useState(0);
    const [win, setWin] = useState(0);

    //states required for storing current theme infos
    const [theme, setTheme] = useState('default');
    const [color, setColor] = useState({
        text: 'text-black',
        background: 'bg-white'
    });


    //fetch the word
    const fetchWord = async (id) => {
       const data = await getRandomWord(id);
        if (data) {
            data.word = data.word.toUpperCase();
            setTargetWord(data);
        }
    };


    //Capture user input for word guesses
    const handleWordSubmit = (e) => {

        e.preventDefault();

        //Validate input (alphabetic characters)
        const isAlpha = /^[A-Z]+$/.test(currentWord);
        if (!isAlpha) {
            toast.error('Please enter only alphabetic characters!', {
                autoClose: 3000,
            });
            return;
        }
        
        //Validate input word length
        if (currentWord.length === 5 && attempt < 6) {
           
            //Handle the submission of guesses and update the game state and Tracking remaining attempts
            const updatedWordsList = [...wordsList];
            updatedWordsList[attempt] = currentWord.split('');
            setWordsList(updatedWordsList);
            setAttempt(attempt + 1);
            setCurrentWord('');
            
            setTimeout(()=>{
                
                if (currentWord === targetWord.word) {
                    setEnd(true);
                    setWin(win + 1);
                    toast.success('Congratulations! You guessed the word!', {
                        autoClose: 3000,
                    });
                } else if (attempt >= 5) {
                    setLoss(loss + 1);
                    setCheckAttempt(true);
                    toast.error('Game over! You\'ve used all your attempts.', {
                        autoClose: 3000,
                    });
                } 
            }, 1200);

            } else if (currentWord.length !== 5) {
            toast.error('The word must be exactly 5 letters long!', {
                autoClose: 3000,
            });
            }
    };

    //Resetting data
    const Retry = () => {
        setAttempt(0);
        setWordsList(board);
        setEnd(false);
        setHints(3);
        fetchWord();
        setCheckAttempt(false);
        navigate('/');
    };

    const data = { 
        URL, checkAttempt,
        handleWordSubmit,
        Retry, fetchWord,
        hints, setHints,
        theme, setTheme,
        color, setColor,
        loss, setLoss,
        end, setEnd,
        wordsList, setWordsList,
        win, setWin,
        currentWord, setCurrentWord,
        targetWord, setTargetWord,
        attempt, setAttempt,
    };

    return (
        <GameContext.Provider value={data}>
            {children}
        </GameContext.Provider>
    );
};

export default GameProvider;
