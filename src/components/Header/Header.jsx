import { useState , useContext} from 'react'
import { GameContext} from '../Context/Context'
import { HelpModal} from '../Modals/HelpModal'
import { SettingModal } from '../Modals/SettingModal';
import { StateModal } from '../Modals/StateModal';
import { Hints} from './Hints'
//icons
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";


export const Header = () => {

const [activeModal, setActiveModal] = useState('help');
const {color} = useContext(GameContext); 

  return (
    <div className={`h-1/6  w-full flex justify-between flex-wrap items-center  border-b-2 overflow-hidden `}>
        <span className='w-1/3'>  <FaRegQuestionCircle  className="cursor-pointer md:h-[40px] md:w-[40px] h-[30px] w-[30px] ml-8 z-10" onClick={() => setActiveModal('help')} />
        </span>
        <h1 className='font-bold text-4xl  text-center  w-1/3 '>Wordle </h1>
        <div className=' flex gap-4 p-5 w-1/3 flex-wrap justify-end'>
            <Hints/>
            <IoStatsChart  className="cursor-pointer md:h-[40px] md:w-[40px] h-[30px] w-[30px] " onClick={() => setActiveModal('state')} />
            <IoMdSettings  className="cursor-pointer md:h-[40px] md:w-[40px] h-[30px] w-[30px] " onClick={() => setActiveModal('setting')} />
        </div>
        <div className={`${activeModal === '' ? 'relative hidden bg-red-300' : 'absolute w-full md:h-5/6 h-full bottom-0 flex justify-center items-center ' + color.background}`}>
                {activeModal === 'help' && <HelpModal setActiveModal={setActiveModal} />}
                {activeModal === 'state' && <StateModal setActiveModal={setActiveModal} />}
                {activeModal === 'setting' && <SettingModal setActiveModal={setActiveModal} />}
        </div>
        

    </div>
  )
}
