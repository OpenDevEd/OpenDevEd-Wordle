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
                return (<Row key={i}/>)
            })}
      </div>
    )
}

export default Grid;