import Cases from '../Columns/Cases';
import KeyBoard from '../KeyBoard/KeyBoard';
import WinPopUp from '../EndGame/win';
import { useContext } from 'react';
import { GameContext } from './GameContextProvider';


function Game() {

    const {win} = useContext(GameContext);

    return (
        <>
            <Cases/>
            <KeyBoard/>
            { win !== 'play' && <WinPopUp/>}
        </>
    )
}

export default Game