import 'react-toastify/dist/ReactToastify.css';
import {  useContext } from 'react';
import { GuessList } from './GuessList';
import { InputField } from './InputField';

import { GameContext } from '../Context/Context';
import { LossModal } from '../Modals/LossModal';
import { WinModal } from '../Modals/WinModal';



export const Games = () => {

    
    const { end ,attempt , checkAttempt } = useContext(GameContext);

    return (
        <div className='h-5/6 w-full flex justify-center items-center flex-col'>
             
            <div className=' w-full sm:w-[450px]  h-2/3 6'>
                <GuessList  />
                <InputField />
            </div>
            {/* End game state UI (upon winning or losing) */}
            <div className={`${(!end &&  attempt < 6) ? 'relative hidden' : 'absolute w-full h-full bottom-0 flex justify-center items-center  '}`}>
                    { checkAttempt && <LossModal/>}
                    { end  &&  <WinModal/> }
            </div>
        </div>
    );
};


