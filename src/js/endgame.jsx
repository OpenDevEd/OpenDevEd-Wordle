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
        padding: '170px'
    };
    const mystyleChild = {
        margin: 'auto',
        width: '70%'
    };
    const buttonSize = {
        width: '100px',
        height: '60px',
        borderRadius: '30px'
    };

    return (
        <>
            <div style={mystyle}>
                {<h1 style={{color:'white'}}> GAME OVER </h1>}
                <div style={mystyleChild}>
                    {gameState.gameState == 'lose' && <h1>You lost</h1>}
                    {gameState.gameState == 'win' && <h1>You win</h1>}
                    <button
                        className="button"
                        style={buttonSize}
                        onClick={()=>{ backToGame('/') }}>
                        Play again ?
                    </button>
                </div>
            </div>
        </>
    );
}

