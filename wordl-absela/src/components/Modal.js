import React from 'react'

export default function Modal({isCorrect, turn, words}) {
  return (
    <div className='modal'>
        {isCorrect && (
            <div>
                <h1 className='corr'>Correct!</h1>
                <h2>The word was {words}</h2>
                <h2>It took you {turn} turns</h2>
                <button className="btn-class-name" onClick={()=>window.location.reload()}>
                    <span className="back"></span>
                    <span className="front">Again</span>
                </button>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1 className='inc'>Game Over!</h1>
                <h2>The word was {words}</h2>
                <h2>You have used all your turns</h2>
                <button className="btn-class-name" onClick={()=>window.location.reload()}>
                    <span className="back"></span>
                    <span className="front">Again</span>
                </button>
            </div>
        )}
    </div>
  )
}
