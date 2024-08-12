import { GameContext } from "../Context/Context";
import { useContext } from "react";
import { toast } from 'react-toastify';
//icons
import { FaRegCopy } from "react-icons/fa";
import { FaArrowRotateRight } from "react-icons/fa6";
import { FaRegFaceSadCry } from "react-icons/fa6";

export const LossModal = () => {

    const {Retry , color , targetWord , URL} = useContext(GameContext);
    const copyToClipboard = async (text) => {
      try {
        await navigator.clipboard.writeText(URL+text);
        toast.success('Copied!', {
          autoClose: 3000,
      });
      } catch (err) {
        toast.error('Failed to copy!', {
            autoClose: 3000,
        });  
      }
    };

    return (
      <div className={`w-full h-full   ml-auto mr-auto md:w-[500px] md:h-[700px] shadow-2xl ${color.background} ${color.text}  md:border-2 md:rounded-3xl p-5 flex flex-col justify-center items-center gap-16`}>

           <FaRegFaceSadCry size={130}/>
          <h1 className="text-5xl font-bold">Game over!</h1>
          <p className="text-2xl ">You've used all your attempts.</p>
          <FaArrowRotateRight size={60} className="cursor-pointer" onClick={Retry}/>
          <div className={` flex flex-col gap-1 justify-center items-center border-dashed w-3/4 h-2/6 border-2 rounded-lg ${color.background === 'bg-white' ? 'border-black' : 'border-white'}`}>
            <span className="text-xl">The answer is : <span className="font-bold underline">{targetWord.word}</span> </span>
            <span className="text-xl">Challenge your friends in this word :  </span>
            <div className="flex flex-col gap-1 w-full justify-center items-center flex-wrap">
              <span className="font-bold text-xl  text-center invisible w-0 h-0 sm:visible sm:w-full ">{URL}{targetWord.id}</span>
              <br/>
              <FaRegCopy onClick={()=>{copyToClipboard(targetWord.id)}} size={20} className={`ml-2  ${color.text} cursor-pointer`}/>
            </div>
          </div>
      </div>
    )
  }
  
