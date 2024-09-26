import React from 'react'
import Row from './Row'

const Grid = ({guesses,currentGuess, turn}:{guesses:any, currentGuess:string, turn:number}) => {
    console.log(guesses)
  return (
    <div className='flex flex-col gap-2'>
        {guesses.map((g:any,i:number)=>{
          if(turn === i)
            return <Row key={i} currentGuess={currentGuess} turn={turn}/>
          return <Row g={g} key={i} turn={turn}/>
        })}
    </div>
  )
}

export default Grid