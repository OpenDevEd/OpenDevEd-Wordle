import { useEffect, useState, useRef } from 'react';
import LetterBox from '@components/LetterBox'

interface RowProps {
  letters: string[];
  solution: string | undefined;
  submitted: boolean;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const Row: React.FC<RowProps> = ({ letters, solution, submitted, setSubmitted }) => {
  const [lettersStatus, setLettersStatus] = useState<string[]>(Array(5).fill(""));
  const hasStatus = useRef(false);

  useEffect(() => {
    if (submitted && letters.length === 5 && solution) {
      const solutionFreq = new Map<string, number>();

      solution.split("").forEach(letter => {
        solutionFreq.set(letter, (solutionFreq.get(letter) || 0) + 1);
      });

      const newLettersStatus = letters.map((letter, index) => {
        if (letter === solution[index]) {
          solutionFreq.set(letter, solutionFreq.get(letter)! - 1);
          return 'bg-green';
        } else if (solution.includes(letter) && solutionFreq.get(letter)! > 0) {
          solutionFreq.set(letter, solutionFreq.get(letter)! - 1);
          return 'bg-yellow';
        } else {
          return 'bg-grey';
        }
      });

      setLettersStatus(newLettersStatus);
      hasStatus.current = true;
      setSubmitted(false);
    }
  }, [submitted, letters, solution]);

  return (
    <div className='flex gap-2 flex-row'>
      {Array.from({ length: 5 }, (_, index) => {
        const letter = letters[index] || '';
        const status = hasStatus.current ? lettersStatus[index] : "bg-bg border-2";
        const borderColor = letters.length > index ? 'border-lightgrey' : 'border-grey';

        return (
          <LetterBox
            key={index}
            letter={letter}
            status={status}
            borderColor={borderColor}
          />
        );
      })}
    </div>
  );
};

export default Row;
