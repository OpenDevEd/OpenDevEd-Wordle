import React from 'react'

export default function Row({ guess, currentGuess }) {

    if(guess){
        return (
            <div className='row past'>
                {guess.map((l, i) => (
                    <div key={i} className={l.color}>{l.key}</div>
                ))}
            </div>
        )
    }
    if(currentGuess){
        return (
            <div className='row current'>
                {currentGuess.split('').map((l, i) => (
                    <div key={i}className='filled'>{l}</div>
                ))}
                {[...Array(5 - currentGuess.length)].map((v,i)=>(
                    <div key={i}></div>
                ))}
            </div>
        )
    }

  return (
    <div className='row'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}
