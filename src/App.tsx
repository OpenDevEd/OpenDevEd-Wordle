import Row from '@components/Row';
import logo from '@assets/logo.svg';
import { useEffect, useRef, useState } from 'react';
import wordList from '@data/words';

function App() {
  let SOLUTION = useRef<string>();
  const [focusedRow, setFocusedRow] = useState<number>(1);
  const [letters, setLetters] = useState<string>("");
  const [words, setWords] = useState<string[]>(Array(6).fill(""));
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [remainingAttempts, setRemainingAttempts] = useState<number>(6);
  const [win, setWin] = useState<boolean>(false);

  useEffect(() => {
    SOLUTION.current = [...wordList][Math.floor(Math.random() * wordList.size)];
  }, []);

  const submit = () => {
    if (letters.length === 5 && focusedRow <= 6 && wordList.has(letters)) {
      setSubmitted(true);
      setRemainingAttempts((prev) => prev - 1);
      setFocusedRow((prev) => prev + 1);
      setLetters("");
      if (letters === SOLUTION.current) {
        setWin(true);
      }
    }
  }

  useEffect(() => {
    setWords((prev) => {
      const newWords = [...prev];
      newWords[focusedRow - 1] = letters;
      return newWords;
    });
  }, [letters]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      submit();
    }
    else if (e.key === 'Backspace') {
      setLetters(letters.slice(0, -1));
    } else if (e.key.match(/^[a-zA-Z]$/) && letters.length < 5 && remainingAttempts > 0 && !win) {
      setLetters((prev) => { return prev + e.key; });
    }
  }
  // console log stete for debugging
  //useEffect(() => {
  //console.log(letters, words, focusedRow, submitted, remainingAttempts, win);
  //}, [letters, words, focusedRow, submitted, remainingAttempts, win]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [letters]);

  return (
    <>
      <div className='w-full flex justify-center mt-16 mb-20'>
        <img src={logo} />
      </div>
      <div className='flex gap-12 flex-col justify-center w-full'>
        <div className='w-full flex justify-center'>
          <p className='text-2xl font-baloo font-bold'>Attempts Remaining: {remainingAttempts}</p>
        </div>
        <div className='flex items-center justify-center flex-col gap-2'>
          {
            words.map((word, index) => {
              return (
                <Row key={index} letters={word.split("")} solution={SOLUTION.current} submitted={submitted} setSubmitted={setSubmitted} />
              );
            })
          }
        </div >
        <div className='w-full flex justify-center'>
          <button className='px-8 py-3 bg-orange text-white font-baloo font-bold rounded-[16px]' onClick={submit}>
            <p className='text-2xl'>submit</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
