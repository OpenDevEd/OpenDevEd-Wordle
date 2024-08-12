import React, { useEffect } from 'react'
import { useState } from 'react'
import Wordle from './components/Wordle'
// import Keyboard from './components/keyboard'

const DATA = './data.json'

function App() {

  const [words, setWord] = useState(null)
  const fetchwords = async () => {
    try {
      const res = await fetch(DATA)
      if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await res.json()
      const random = data[Math.floor(Math.random() * data.length)]
      console.log(random)
      setWord(random)
    }
    catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchwords()
  }, [setWord])
  
  const logo = "WORDLE".split('')

  return (
    <div className='App'>
      <div className='text'>
        {logo.map((letter, i) => (
          <span key={i} style={{ "--delay": i }}>{letter}</span>
        ))}
      </div>
      {
        words && (
          <Wordle words={words} />
        )}
    </div>
  )
}

export default App
