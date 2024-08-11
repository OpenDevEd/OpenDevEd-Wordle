import React from 'react';
import { useEffect, useState } from 'react'

interface RowProps {
  letters: string[];
  solution: string | undefined;
  submitted: boolean;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const Row: React.FC<RowProps> = ({ letters, solution, submitted, setSubmitted }) => {
  const [lettersStatus, setLettersStatus] = useState<string[]>(new Array(5).fill(""));
  const refi = React.useRef(false);

  useEffect(() => {
    if (submitted && letters.length === 5 && solution) {
      let solutionFreq = new Map<string, number>();

      solution.split("").forEach((letter) => {
        solutionFreq.set(letter, (solutionFreq.get(letter) || 0) + 1);
      });

      const newLettersStatus = new Array(5).fill("");
      for (let i = 0; i < 5; i++) {
        if (letters[i] === solution[i]) {
          solutionFreq.set(letters[i], solutionFreq.get(letters[i])! - 1);
          newLettersStatus[i] = 'bg-green';
        } else if (solution.includes(letters[i]) && solutionFreq.get(letters[i])! > 0) {
          solutionFreq.set(letters[i], solutionFreq.get(letters[i])! - 1);
          newLettersStatus[i] = 'bg-yellow';
        } else {
          newLettersStatus[i] = 'bg-grey';
        }
        setLettersStatus(newLettersStatus);
        refi.current = true;
      }

      setSubmitted(false);
    }
  }, [submitted]);

  //useEffect(() => {
  //console.log(lettersStatus);
  //}, [lettersStatus]);

  return (
    <div className='flex gap-2 flex-row'>
      <div className={`w-14 h-14 ${refi.current ? lettersStatus[0] : "bg-bg border-2"} ${letters.length >= 1 ? 'border-lightgrey' : 'border-grey'}  flex items-center justify-center rounded-[8px] font-baloo font-bold text-4xl uppercase`} >
        {letters.length >= 1 && letters[0]}
      </div>
      <div className={`w-14 h-14 ${refi.current ? lettersStatus[1] : "bg-bg border-2"} ${letters.length >= 2 ? 'border-lightgrey' : 'border-grey'}  flex items-center justify-center rounded-[8px] font-baloo font-bold text-4xl uppercase`}>
        {letters.length >= 2 && letters[1]}
      </div>
      <div className={`w-14 h-14 ${refi.current ? lettersStatus[2] : "bg-bg border-2"} ${letters.length >= 3 ? 'border-lightgrey' : 'border-grey'}  flex items-center justify-center rounded-[8px] font-baloo font-bold text-4xl uppercase`}>
        {letters.length >= 3 && letters[2]}
      </div>
      <div className={`w-14 h-14 ${refi.current ? lettersStatus[3] : "bg-bg border-2"} ${letters.length >= 4 ? 'border-lightgrey' : 'border-grey'}  flex items-center justify-center rounded-[8px] font-baloo font-bold text-4xl uppercase`}>
        {letters.length >= 4 && letters[3]}
      </div>
      <div className={`w-14 h-14 ${refi.current ? lettersStatus[4] : "bg-bg border-2"} ${letters.length >= 5 ? 'border-lightgrey' : 'border-grey'}  flex items-center justify-center rounded-[8px] font-baloo font-bold text-4xl uppercase`}>
        {letters.length >= 5 && letters[4]}
      </div>
    </div>
  );
}

export default Row;
