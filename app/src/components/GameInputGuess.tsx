import React from 'react'
import {useState} from 'react'

const GameInputGuess = () => {
    const [input, setInput] = useState<string[]>(['','','','',''])

    const handleKeyDown=(e:Event)=>{
        
    }
  return (
    <div className="flex gap-4">
        {
            input.map((char,i)=>(
                <div className="flex " key={i}>
                    <input type="email" className="w-10" maxLength={1}
                        // onKeyDown={(e)=>handleKeyDown(e)}
                    />
                </div>
            ))
        }
    </div>
  )
}

export default GameInputGuess