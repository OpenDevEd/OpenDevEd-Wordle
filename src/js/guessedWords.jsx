

export function GuessedWord(props)
{
    const colors = ['green','red','gray']
    const childStyle = [];

    if (props.words[props.guessedWord])
    {
        // Since the word to guess is the same as the registered word we gonna loop through its size alone
        for (let i = 0; i < props.words[props.guessedWord].length; i++)
        {
            if (props.words[props.guessedWord].includes(props.registeredWords[props.guessedWord][i]))
            {
                if (props.words[props.guessedWord][i] == props.registeredWords[props.guessedWord][i])
                {
                    childStyle.push(
                        {
                            background: colors[0],
                            border: 'none',
                            borderRadius: '11px',
                            marginRight:'1px',
                            width: '50px',        
                            height: '50px',
                            color: 'white',
                            float: 'left',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems:'center'
                        }
                    )
                }
                else
                {
                    childStyle.push(
                        {
                            background: colors[2],
                            border: 'none',
                            borderRadius: '11px',
                            marginRight:'1px',
                            width: '50px',        
                            height: '50px',
                            color: 'white',
                            float: 'left',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems:'center'
                        }
                    )
                }
            }
            else
            {
                childStyle.push(
                    {
                        background: colors[1],
                        border: 'none',
                        borderRadius: '11px',
                        marginRight:'1px',
                        width: '50px',        
                        height: '50px',
                        color: 'white',
                        float: 'left',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems:'center'
                    }
                )
            }
        }
    }

    const keyDivstyle = 
    {
        border: 'none',
        borderRadius: '11px',
        marginRight:'1px',
        width: '20%',        
        height: '130%',
        color: 'white',
    };

    return (
        <div style={keyDivstyle}>
            {props.registeredWords[props.guessedWord].length === 4 && 
                (props.registeredWords[props.guessedWord].map((word, index)=>(
                    <div key={index} style={childStyle[index]}>
                        {word}
                    </div>
                ))
                )
            }
        </div>
    )
}


