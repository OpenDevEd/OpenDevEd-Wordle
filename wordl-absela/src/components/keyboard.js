import React from 'react'

export default function keyboard({useKeyboard, handleKeyupVirtual}) {
        const row1 = ["q","w","e","r","t","y","u","i","o","p"]
        const row2 = ["a","s","d","f","g","h","j","k","l"]
        const row3 = ["z","x","c","v","b","n","m"]
      
        return (
          <div className='keyb'>
            {row1.map((letter) => {
                const color = useKeyboard[letter]
                return <div key={letter} className={`${color} row`} onClick={()=>handleKeyupVirtual(letter)}  >{letter}</div>
            })}
            <br/>
            {row2.map((letter) => {
                const color = useKeyboard[letter]
                return <div key={letter} className={`${color} row`} onClick={()=>handleKeyupVirtual(letter)}>{letter}</div>
            })}
            <br/>
            <div key="Enter" onClick={() => handleKeyupVirtual("Enter")} style={{width: "10%", fontSize:"13px"}}>Enter</div>
            {row3.map((letter) => {
                const color = useKeyboard[letter]
                return <div key={letter} className={`${color} row`} onClick={()=>handleKeyupVirtual(letter)}>{letter}</div>
            })}
            <div key="Backspace" onClick={()=>handleKeyupVirtual('Backspace')} style={{width: "15%"}}>⌫</div>
          </div>
        )
}
