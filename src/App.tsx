import Row from '@components/Row';
import logo from '@assets/logo.svg';
import { useEffect, useState } from 'react';
import { argv0 } from 'process';

function App() {

  const [focusedRow, setFocusedRow] = useState<number>(1);
  const [letters, setLetters] = useState<string>("");
  const [words, setWords] = useState<string[]>(["", "", "", "", "", ""]);

  useEffect(() => {
    setWords((prev) => {
      const newWords = [...prev];
      newWords[focusedRow - 1] = letters;
      return newWords;
    });
  }, [letters]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        if (letters.length === 5 && focusedRow < 6) {
          setFocusedRow((prev) => prev + 1);
          setLetters("");
        }
        if (letters.length === 5 && focusedRow === 6) {
          console.log('submit');
          setFocusedRow(7);
        }
      }
      else if (e.key === 'Backspace') {
        if (focusedRow === 7) {
          return;
        }
        setLetters(letters.slice(0, -1));
      } else if (e.key.match(/^[a-zA-Z]$/)) {
        setLetters((prev) => {
          if (prev.length >= 5) {
            return prev;
          }
          return prev + e.key;
        });
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [letters, focusedRow]);

  useEffect(() => {
    console.log(words);
  }, [words]);

  return (
    <>
      <div className='w-full flex justify-center mt-16 mb-20'>
        <img src={logo} />
      </div>
      <div className='flex gap-12 flex-col justify-center w-full'>
        <div className='flex items-center justify-center flex-col gap-4'>
          <Row letters={words[0].split("")} />
          <Row letters={words[1].split("")} />
          <Row letters={words[2].split("")} />
          <Row letters={words[3].split("")} />
          <Row letters={words[4].split("")} />
          <Row letters={words[5].split("")} />
        </div >
        <div className='w-full flex justify-center'>
          <button className='px-8 py-3 bg-orange text-white font-baloo font-bold rounded-[16px]'>
            <p className='text-2xl'>submit</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
