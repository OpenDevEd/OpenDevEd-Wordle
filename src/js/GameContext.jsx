
import { useState } from "react";
import { createContext } from "react";

export const GameContext = createContext(
    {
        gameState: 'play',
        setGameState: () => {}
    }    
);

export const GameProvider = ({ children }) => {
    const [gameState, setGameState] = useState('play');

    return (
        <GameContext.Provider value={{ gameState, setGameState }}>
            {children}
        </GameContext.Provider>
    );
};

