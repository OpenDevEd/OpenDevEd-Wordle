import { useContext} from 'react'
import { GameContext} from '../Context/Context'
import Confetti from 'react-confetti';
//icons
import { FaArrowRotateRight } from "react-icons/fa6";
import { TfiCup } from "react-icons/tfi";
import { toast } from 'react-toastify';
import { FaRegCopy } from "react-icons/fa";

export const WinModal = () => {

  const {Retry , color , targetWord,URL} = useContext(GameContext);
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
    <div className={` w-full h-full ml-auto mr-auto  md:w-[500px] md:h-[700px] shadow-2xl ${color.background} ${color.text}   md:border-2 md:rounded-3xl p-5 flex flex-col justify-center items-center gap-16`}>
    <TfiCup size={130}/>
    <Confetti
        //  className='relative w-[500px] h-[700px]'
         numberOfPieces={300}
         recycle={false}
    />
    <h1 className="text-xl sm:text-5xl font-bold">Congratulations!</h1>
    <p className="text-2xl ">! You guessed the word!</p>
    <FaArrowRotateRight size={60} className="cursor-pointer" onClick={Retry}/>
    <div className={`flex flex-col gap-2 justify-center items-center border-dashed w-3/4 h-1/6 border-2 rounded-lg ${color.background === 'bg-white' ? 'border-black' : 'border-white'}`}>

              <span className="text-xl">Challenge your friends in this word :  </span>
              <div className="flex flex-col gap-2 w-full justify-center items-center flex-wrap">
                <span className="font-bold text-xl  text-center invisible w-0 h-0 sm:visible sm:w-full ">{URL}{targetWord.id}</span>
                <br/>
                <FaRegCopy onClick={()=>{copyToClipboard(targetWord.id)}} size={20} className={`ml-2  ${color.text} cursor-pointer`}/>
              </div>
    </div>
</div>
  )
}


