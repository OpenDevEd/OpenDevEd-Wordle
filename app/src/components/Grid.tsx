import React from 'react'
import Row from './Row'

const Grid = ({guesses,currentGuess}:{guesses:any,currentGuess:string}) => {
    console.log(guesses)
  return (
    <div className='flex flex-col gap-4'>
        {guesses.map((g:any,i:number)=>(
            <Row g={g} key={i} currentGuess={currentGuess}/>
        ))}
        {/* <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row /> */}
    </div>
  )
}

export default Grid