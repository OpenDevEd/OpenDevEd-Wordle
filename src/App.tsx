import { useEffect, useRef, useState } from 'react';
import Row from '@components/Row';
import GameInfo from '@components/GameInfo';
import Header from '@components/Header';
import SubmitButton from '@components/SubmitButton';
import EndGameModal from '@components/EndGameModal';
import wordList from '@data/words';

function App() {
  let SOLUTION = useRef<string>();
  const [focusedRow, setFocusedRow] = useState<number>(1);
  const [letters, setLetters] = useState<string>("");
  const [words, setWords] = useState<string[]>(Array(6).fill(""));
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [remainingAttempts, setRemainingAttempts] = useState<number>(6);
  const [win, setWin] = useState<boolean>(false);
  const [lose, setLose] = useState<boolean>(false);

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

  const handleKeyDown = (e: KeyboardEvent) => {
    if (win || lose) return;

    if (e.key === 'Enter') {
      submit();
    } else if (e.key === 'Backspace') {
      setLetters(letters.slice(0, -1));
    } else if (e.key.match(/^[a-zA-Z]$/) && letters.length < 5) {
      setLetters((prev) => { return prev + e.key; });
    }
  }

  useEffect(() => {
    SOLUTION.current = [...wordList][Math.floor(Math.random() * wordList.size)];
    console.log(SOLUTION.current);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    if (focusedRow > 0 && focusedRow <= 6) {
      setWords((prev) => {
        const newWords = [...prev];
        newWords[focusedRow - 1] = letters;
        return newWords;
      });
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [letters]);

  useEffect(() => {
    if (remainingAttempts === 0) {
      setLose(true);
    }
  }, [remainingAttempts])

  return (
    <>
      <Header />
      <div className='flex gap-12 flex-col justify-center w-full'>
        <GameInfo remainingAttempts={remainingAttempts} />
        <div className='flex items-center justify-center flex-col gap-2'>
          {
            words.map((word, index) => {
              return (
                <Row key={index} letters={word.split("")} solution={SOLUTION.current} submitted={submitted} setSubmitted={setSubmitted} />
              );
            })
          }
        </div >
        <SubmitButton onClick={submit} />
      </div>
      {(win || lose) && <EndGameModal win={win} lose={lose} />}
    </>
  );
}

export default App;
