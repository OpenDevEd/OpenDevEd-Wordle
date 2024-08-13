import {useContext} from 'react'
import {GameContext} from '../Context/Context'

import { IoCloseOutline } from "react-icons/io5";

//absolute  bottom-0 left-0 md:left-[37%] md:bottom-[10%]

const Example = ({string , targetC  , BgColor , order})=>{
    return (
        <div className='flex gap-2 flex-wrap'>
            <span className={`w-[40px] h-[40px] py-1 border-2 border-gray-600 font-bold text-2xl  ${BgColor} ${order} text-white text-center`}>{targetC}</span>
            {string.map((c, index)=>{
                return <span key={index} className={`w-[40px] h-[40px] py-1 border-2 border-gray-600 font-bold text-2xl text-center order-[${index + 4}]`}>{c}</span>
            })
            } 
        </div>
    )
}

const examples = [{
    str : ['C','E','A','N'] ,
    c : 'O',
    color : 'bg-green-500', 
    order : 'order-0',
    desc : ' is in the word and in the correct spot .'
}, 
{
    str : ['I','L','L','S'] ,
    c : 'P',
    color : 'bg-yellow-500', 
    order : 'order-0',
    desc : ' is in the word but in the wrong spot .'
},
{
    str : ['A','G','U','E'] ,
    c : 'V',
    color : 'bg-gray-500', 
    order : 'order-0',
    desc : ' is not in the word in any spot .'
}]


export const HelpModal = ({setActiveModal}) => {

    const {color} = useContext(GameContext); 
  return (
    <div className={` z-20 w-full h-full   ml-auto mr-auto md:w-[500px] md:h-[700px] shadow-2xl ${color.background} ${color.text} md:rounded-3xl p-5 md:border-2 overflow-auto`}>
        <IoCloseOutline onClick={()=>{setActiveModal('')}} className='float-end cursor-pointer'  size={30}/>
        <div className='mt-10 p-5'>
            <h1 className='font-bold text-3xl'>How To Play</h1>
            <p>Guess the Wordle in 6 tries</p>
            <ul className='mt-5'>
                <li>Each guess must be valid 5-letter word</li>
                <li>The color of the tiles will change to show how close your guess was to the word</li>
            </ul>
            <div className='mt-5 '>
                <h1 className='font-bold text-2xl'>Examples</h1>
                {
                        examples.map((example ,index) =>{
                            return  <div key={index} className=' flex  flex-col justify-center items-start gap-2 mt-5'>
                                        <Example string={example.str} targetC={example.c}   BgColor={example.color}  order={example.order}/>
                                        <p><span className='font-bold'>{example.c}</span>{example.desc}</p>
                                    </div>
                        })
                    }
            
                
            </div>
        </div>
    </div>
  )
}
