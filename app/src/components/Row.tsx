import React from 'react'

const Row = ({g, currentGuess}:{g:any, currentGuess:string}) => {
  return (
    <div className='flex gap-4'>
        {/* {g?.map((g:any, i:number)=>(
            <div className={`border p-10 ${g?.color}`} key={i}>{g?.key}</div>
        ))} */}
        
    </div>
  )
}

export default Row
