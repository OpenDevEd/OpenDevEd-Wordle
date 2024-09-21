import { IoHelpSharp } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";



const GameBoard = () => {
  return (
    <div className='h-16 bg-header w-full'>
      <div className="max-w-[500px] h-full mx-auto flex items-center justify-between relative">
      <div className="text-[20px] text-white flex items-center gap-[.5px] ">
        <span className="px-1 rounded-md bg-green" >W</span>
        <span className="tracking-widest">ordle</span>
      </div>
      <div className="flex items-center gap-3">
      <div className="button">
            <IoHelpSharp className="text-white"/>
        </div>
        <div className="button">
            <IoSettingsSharp className="text-white" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default GameBoard
