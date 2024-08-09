import {useState} from 'react'
import { UsedKeys } from '../hooks/useWordle';

interface Props {
    usedKeys: UsedKeys;
}

const KeyBoard = ({usedKeys}: Props) => {
    const lettersData = [
        { key: 'a' },
        { key: 'b' },
        { key: 'c' },
        { key: 'd' },
        { key: 'e' },
        { key: 'f' },
        { key: 'g' },
        { key: 'h' },
        { key: 'i' },
        { key: 'j' },
        { key: 'k' },
        { key: 'l' },
        { key: 'm' },
        { key: 'n' },
        { key: 'o' },
        { key: 'p' },
        { key: 'q' },
        { key: 'r' },
        { key: 's' },
        { key: 't' },
        { key: 'u' },
        { key: 'v' },
        { key: 'w' },
        { key: 'x' },
        { key: 'y' },
        { key: 'z' }
      ];      

      const [letters, setLetters] = useState(lettersData);

      return (
        <div className="keyboard">
            {letters && letters.map((l) => {
                const state = usedKeys[l.key]
                return (
                    <div key={l.key} className={state}>{l.key}</div>
                )
            })}
        </div>
      )
}

export default KeyBoard;