import { useNavigate } from "react-router-dom"
import { GameContext } from "./GameContext";
import { useContext } from "react";

export function GameMenu()
{
    const navigate = useNavigate('');

    const titleStyle = {
        color: 'white',
        fontFamily: 'sans-serif',
        margin: 'auto',
        width: '63%',
        padding: '10px'
    };

    const buttonCenter = {
        color: 'white',
        fontFamily: 'sans-serif',
        margin: 'auto',
        width: '23%',
        padding: '10px'
    };

    const buttonSize = {
        width: '170px',
        height: '50px',
        fontSize: '30px',
        fontWeight: 'bold',
        borderRadius: '30px'
    };

    const instructionsColor = {
        color: '#FFDDDD',
    };

    return (
        <>
            <div style={titleStyle}>
                <h1 style={{color:'white', 
                            fontSize:'50px',
                            position: 'relative',
                            right: '-140px'}}> 
                               Welcome, to wordle 
                </h1>
                <h2 style={instructionsColor}> Guess the words in the given attempts </h2>
                <h2 style={instructionsColor}> After entering a word the letters will be colored to indicate validity: </h2>
                <div style={
                    {
                        position:'relative',
                        right: '-70px'
                    }
                }>
                    <h2 style={instructionsColor}> Green means the letter is in the correct position 
                    </h2>
                    <div style={{
                        border: 'white',
                        borderStyle: 'dotted',
                        backgroundColor: 'green',
                        width: '40px',
                        height: '30px',
                    }}>     
                    </div>
                    <h2 style={instructionsColor}> Gray means the letter is not in the correct position </h2>
                    <div style={{
                        border: 'white',
                        borderStyle: 'dotted',
                        backgroundColor: '#aaaaaa',
                        width: '40px',
                        height: '30px',
                    }}>     
                    </div>
                    <h2 style={instructionsColor}> Red means the letter doesn't exist </h2>
                    <div style={{
                        border: 'white',
                        borderStyle: 'dotted',
                        backgroundColor: 'red',
                        width: '40px',
                        height: '30px',
                    }}>     
                    </div>
                </div>
            </div>
            <div style={buttonCenter}>
                <button className="button" style={buttonSize} onClick={()=>{
                    navigate('/game')
                }}>
                    Play
                </button>
            </div>
        </>
    )
}


