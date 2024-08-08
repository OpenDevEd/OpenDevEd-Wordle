import { Letter } from "../hooks/useWordle";
import Row from "./Row";

interface Props {
    guesses: Letter[][];
    attempts: number;
    currentGuess: string
}

const Grid = ({guesses, attempts, currentGuess}: Props) => {

    return (
        <div>
            {guesses.map((g: Letter[], i: number) => {
                if (attempts === i) {
                    return (<Row key={i}  guess={g} currentGuess={currentGuess}/>)
                }
                return (<Row key={i} guess={g} currentGuess={''}/>)
            })}
      </div>
    )
}

export default Grid;