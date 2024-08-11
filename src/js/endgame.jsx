import { useContext } from "react";
import { GameContext } from "./GameContext";
import { useNavigate } from "react-router-dom";


export function GameEnd(props)
{
    const gameState = useContext(GameContext);
    const backToGame = useNavigate('');
    const mystyle = {
        margin: 'auto',
        width: '20%',
        height: '40px',
        padding: '10px'
    };

    console.log(gameState.gameState);
    return (
        <>
            <div style={mystyle}>
                {<h1> Game End </h1>}
                {gameState.gameState == 'lose' && <h1>You lost</h1>}
                {gameState.gameState == 'win' && <h1>You win</h1>}
                <button
                    className="button" 
                    onClick={()=>{ backToGame('/') }}>
                    Play again ?
                </button>
            </div>
        </>
    );
}

