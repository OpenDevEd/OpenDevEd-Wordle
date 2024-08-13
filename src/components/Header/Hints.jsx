import { toast } from 'react-toastify';
import { PiLightbulbFilamentFill } from "react-icons/pi";
import { GameContext } from '../Context/Context';
import { useContext } from 'react';

export const Hints = () => {


    const { hints  , setHints , targetWord  } = useContext(GameContext); 

    function displayHint(){
        toast.info(hints > 0 ? targetWord.hints[hints - 1] : 'Hints are out' , {
            autoClose: 3000,
        });
        setHints(hints > 0 ? hints - 1 : 0)
    }
  return (
    <div onClick={displayHint}>
        <div  className=" invisible sm:visible relative cursor-pointer md:h-[40px] md:w-[40px] h-[30px] w-[30px]">
          <span className='text-white bg-red-500 md:h-[20px] md:w-[20px] h-[10px] w-[10px] text-[10px] md:text-[15px] rounded-full absolute text-center'>{hints}</span>
          <PiLightbulbFilamentFill  className='w-full h-full'/>
        </div>
    </div>
  )
}
