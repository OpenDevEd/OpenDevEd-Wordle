import {useContext} from 'react'
import {GameContext} from '../Context/Context'

//icons
import { IoGameControllerOutline } from "react-icons/io5";
import { FaRegFaceSadCry } from "react-icons/fa6";
import { TfiCup } from "react-icons/tfi";
import { FaPercentage } from "react-icons/fa"
import { IoCloseOutline } from "react-icons/io5";

export const StateModal = ({setActiveModal}) => {

  const {win ,loss , color} = useContext(GameContext); 

  return (
    <div className={` w-full h-full  ml-auto mr-auto md:w-[500px] md:h-[700px] shadow-2xl flex-wrap z-20 ${color.background} ${color.text}  md:border-2 md:rounded-3xl p-5 overflow-auto`}>
        <IoCloseOutline onClick={()=>{setActiveModal('')}} className='float-end cursor-pointer'  size={30}/>
        <div className=' w-full flex gap-16 justify-center items-center sm:h-1/3 flex-wrap'>
            <div className='flex justify-center items-center flex-col  gap-6'>
              <IoGameControllerOutline className='sm:h-[60px] sm:w-[60px] h-[60px] w-[60px]'/>
              <span className='font-bold text-2xl'>{win + loss}</span>

            </div>
            <div className='flex justify-center items-center flex-col gap-6'>
              <TfiCup className='sm:h-[60px] sm:w-[60px] h-[60px] w-[60px]'/>
              <span className='font-bold text-2xl'>{win}</span>
              
            </div>
            <div className='flex justify-center items-center flex-col  gap-6 '>
              <FaRegFaceSadCry className='sm:h-[60px] sm:w-[60px] h-[60px] w-[60px]'/>  
              <span className='font-bold text-2xl'>{loss}</span>
              
            </div>

        </div>
        <h1 className=' h-1/6 w-full text-center font-bold text-3xl sm:text-6xl mt-12' >Win Rate</h1>
        <div className=' md:h-1/3 md:w-1/2  min-w-28 max-w-56 min-h-56 flex items-center justify-center gap-5 ml-auto mr-auto rounded-full  border-4 p-5 shadow-xl flex-wrap '>
            <span className='font-bold text-6xl'>{(win + loss) === 0 ? 0 : Math.floor((win / (win + loss)) * 100 )} </span>
            <FaPercentage size={90}/>
        </div>

    </div>
  )
}



/*

*/
