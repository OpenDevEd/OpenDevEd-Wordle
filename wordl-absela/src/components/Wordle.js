import React, { useCallback, useEffect } from 'react'
import Grid from './Grid'
import Keyboard from './keyboard'
import Modal from './Modal'
import { useState } from 'react' 

const Wordle = ({ words }) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([...Array(6)]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [useKeyboard, setUseKeyboard] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [dictionary, setDictionary] = useState([]);

    useEffect(() => {
        const fetchDictionary = async () => {
            try {
                const res = await fetch('./data.json'); 
                if (!res.ok) {
                    throw new Error('Failed to fetch dictionary');
                }
                const data = await res.json();
                setDictionary(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchDictionary();
    }, []);

    const formatGuess = useCallback(() => {
      let wordsArray = [...words];
      let Guessforma = [...currentGuess].map(l => {
          return { key: l, color: 'grey' };
      });

      Guessforma.forEach((l, i) => {
          if (wordsArray[i] === l.key) {
              Guessforma[i].color = 'green';
              wordsArray[i] = null;
          }
      });

      Guessforma.forEach((l, i) => {
          if (wordsArray.includes(l.key) && l.color !== 'green') {
              Guessforma[i].color = 'yellow';
              wordsArray[wordsArray.indexOf(l.key)] = null;
          }
      });

      return Guessforma;
  }, [currentGuess, words]);

  const addNewGuess = useCallback((forma) => {
      if (currentGuess === words) {
          setIsCorrect(true);
      }

      setGuesses((prev) => {
          let newGuesses = [...prev];
          newGuesses[turn] = forma;
          return newGuesses;
      });

      setHistory((prev) => {
          return [...prev, currentGuess];
      });

      setTurn((prev) => {
          return prev + 1;
      });

      setUseKeyboard((prev) => {
          let newKeyboard = { ...prev };

          forma.forEach((l) => {
              const currColor = newKeyboard[l.key];
              if (l.color === 'green') {
                  newKeyboard[l.key] = 'green';
                  return;
              }
              if (l.color === 'yellow' && currColor !== 'green') {
                  newKeyboard[l.key] = 'yellow';
                  return;
              }
              if (l.color === 'grey' && currColor !== 'green' && currColor !== 'yellow') {
                  newKeyboard[l.key] = 'grey';
                  return;
              }
          });

          return newKeyboard;
      });

      setCurrentGuess('');
  }, [currentGuess, turn, words]);

  const handleKeyupVirtual = useCallback((key) => {
      if (key === 'Enter') {
          if (turn > 5) {
              return;
          }
          if (history.includes(currentGuess)) {
            setErrorMessage('You have already guessed this word.');
            setTimeout(() => setErrorMessage(''), 2000);
              return;
          }
          if (currentGuess.length !== 5) {
              console.log('Invalid Guess');
              return;
          }
          if(!dictionary.includes(currentGuess)){
            // console.log('The word you entered is not in the dictionary.');
            setErrorMessage('The word you entered is not in the dictionary.');
            setTimeout(() => setErrorMessage(''), 2000); // Hide the error message after 3 seconds
            return;
            
          }
          const forma = formatGuess();
          addNewGuess(forma);
      }
      if (key === 'Backspace') {
          setCurrentGuess((prev) => {
              return prev.slice(0, -1);
          });
      }
      if (/^[A-Za-z]$/.test(key)) {
          if (currentGuess.length < 5) {
              setCurrentGuess((prev) => {
                  return prev + key;
              });
          }
      }
  }, [addNewGuess, formatGuess, currentGuess, history, turn, dictionary]);

  const handleKeyup = useCallback(({ key }) => {
      handleKeyupVirtual(key);
  }, [handleKeyupVirtual]);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);

        if (isCorrect) {
            setTimeout(() => setShowModal(true), 1000);
            window.removeEventListener('keyup', handleKeyup);
        }
        if (turn > 5) {
            setTimeout(() => setShowModal(true), 1000);
            window.removeEventListener('keyup', handleKeyup);
        }

        return () => {
            window.removeEventListener('keyup', handleKeyup);
        };
    }, [handleKeyup, isCorrect, turn]);

    return (
        <div>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
            <Keyboard useKeyboard={useKeyboard} handleKeyupVirtual={handleKeyupVirtual} />
            {showModal && <Modal isCorrect={isCorrect} turn={turn} words={words} />}
            {errorMessage && (
                <div className="error-message">
                    {errorMessage}
                </div>
            )}
        </div>
    );
};

export default Wordle;