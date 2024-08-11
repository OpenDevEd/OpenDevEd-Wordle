

export function Submit(props)
{
    const incrementWordInd = () =>
    {
        if (props.registeredWords[props.guessedWord]
            && 
            props.registeredWords[props.guessedWord].length < 4)
        {
            console.log('Enter a word');
        }
        if (props.words[props.guessedWord] &&
            props.registeredWords[props.guessedWord].join('') == props.words[props.guessedWord])
        {
            props.setGuessedWord(guessedWord => guessedWord + 1);
        }
        else
        {
            if (props.registeredWords[props.guessedWord].length == 4)
                console.log('Word is wrong');
            props.setAttempts(attempts => attempts - 1);
        }
    };

    return (
        <button
            onClick={incrementWordInd}
            className="button"
        >
        
        Submit
    </button>)
}

export function Delete(props)
{
    const deleteLetters =  () =>
    {
        props.removeRegistered(props.guessedWord,props.registeredWords[props.guessedWord].length - 1);
    };

    return (<button className="button"
        onClick={deleteLetters}>
        Delete
    </button>)
}


