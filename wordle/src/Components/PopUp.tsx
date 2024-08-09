
interface Props {
    isGuessed: boolean;
    attempts: number;
    wordToGuess: string;
}

const PopUp = ({isGuessed, attempts, wordToGuess} : Props) => {
    return (
        <div className="popup">
            {isGuessed && 
                <div>
                    <h1>Congrats!!! YOU WON</h1>
                    <button className="button" onClick={() => window.location.reload()}>Try Again</button>
                </div>
            }
            {!isGuessed && 
                <div>
                    <h1>Sorry!!! YOU LOST</h1>
                    <p className="solution"> The Solution was {wordToGuess}</p>
                    <button className="button" onClick={() => window.location.reload()}>Try Again</button>
                </div>
            }
        </div>
    )
}

export default PopUp;