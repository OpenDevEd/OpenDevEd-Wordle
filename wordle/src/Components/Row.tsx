import { Letter } from "../hooks/useWordle";

interface Props {
    guess: Letter[];
    currentGuess: string;
}

const Row = ({guess, currentGuess}: Props) => {

    if (guess) {
        return (
            <div className="row past">{guess.map((letter, i) => (
                    <div key={i} className={letter.state}>{letter.value}</div>
            ))}</div>
        )
    }

    if (currentGuess)
    {
        const letters = currentGuess.split('');

        return (
            <div className="row current">
                {letters.map((letter, i) => {
                    return (
                    <div className="shadow">
                        <div key={i} className="filled">{letter}</div>
                    </div>
                )
                })}
                {[...Array(5 - letters.length)].map((_, i) => (
                <div key={i}></div>
                ))}
            </div>
        )
    }

    return (
        <div className="row">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}


export default Row;