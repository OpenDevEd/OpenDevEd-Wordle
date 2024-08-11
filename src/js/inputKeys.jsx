import { InputFields } from "./inputField";
import { Delete, Submit } from "./submitGuess";

function InputKey({
                    style,
                    letter, 
                    registeredWords,
                    addRegistered,
                    guessedWord
                }
            )
{
    return (
        <button className="button" onClick={()=>{
            console.log(registeredWords[guessedWord].length);
            if (registeredWords[guessedWord].length < 4)
            {
                addRegistered([...registeredWords[guessedWord], letter]);
            }
        }}>
        {letter}
    </button>)
}

export function InputKeys(props)
{
    const letters = ['Q','W','E','R','T','Y','U','I','O','P',
                    'A','S','D','F','G','H','J','K','L','M',
                    'Z','X','C','V','B','N'];

    const keyDivstyle = 
    {
        margin:'auto',
        width: '50%',
        height: '50px',
        padding: '12px'
    };

    const key = 
    {
        border: 'none',
        width:'80px',
        height:'30px',
        borderRadius: '3px',
        background:'#DDDDDD',
        transition:'background-color 0.1 ease',
        cursor: 'pointer',
        ':hover': {
            background: 'green'
        }
    };

    return (
        <div style={keyDivstyle}>
            {letters.map((letter, index) =>(
                <InputKey key={index} style={key} letter={letter}
                    registeredWords = {props.registeredWords}
                    addRegistered={props.addRegistered}
                    guessedWord={props.guessedWord}/>
            ))}
            <Submit registeredWords={props.registeredWords}
					guessedWord={props.guessedWord}
					words={props.words}
					setGuessedWord={props.setGuessedWord}
					setAttempts={props.setAttempts}
					/>
			<Delete registeredWords={props.registeredWords}
					guessedWord={props.guessedWord}
					removeRegistered={props.removeRegistered}/>
        </div>
    )
}

