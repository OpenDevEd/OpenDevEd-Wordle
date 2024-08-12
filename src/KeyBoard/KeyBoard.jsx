import React, { useContext } from 'react'
import styles from './KeyBoard.module.css';
import { GameContext } from '../Game/GameContextProvider';

const buttons = [
  {key: 'Q', style: styles.div1},
  {key: 'w', style: styles.div2},
  {key: 'E', style: styles.div3},
  {key: 'R', style: styles.div4},
  {key: 'T', style: styles.div5},
  {key: 'Y', style: styles.div6},
  {key: 'U', style: styles.div7},
  {key: 'I', style: styles.div8},
  {key: 'O', style: styles.div9},
  {key: 'P', style: styles.div10},
  {key: 'A', style: styles.div11},
  {key: 'S', style: styles.div12},
  {key: 'D', style: styles.div13},
  {key: 'F', style: styles.div14},
  {key: 'G', style: styles.div15},
  {key: 'H', style: styles.div16},
  {key: 'J', style: styles.div17},
  {key: 'K', style: styles.div18},
  {key: 'L', style: styles.div19},
  {key: 'backspace', style: styles.div20},
  {key: 'Z', style: styles.div21},
  {key: 'X', style: styles.div22},
  {key: 'C', style: styles.div23},
  {key: 'V', style: styles.div24},
  {key: 'B', style: styles.div25},
  {key: 'N', style: styles.div26},
  {key: 'M', style: styles.div27},
  {key: 'Enter', style: styles.div28},
]


function KeyBoard() {

  
  return (
    <div className={styles.Parent}>
      {
        buttons.map((button, index) => {
          return <Key button={button} key={index}/>
        })
      }
    </div>
  )
}


function Key({button}){
  
  const {handleKey} = useContext(GameContext);

  return (
    <div 
      onClick={() => {handleKey(button.key)}} 
      className={`${button.style} ${styles.Key}`}
    >
      { button.key === 'backspace' ? <span className={`material-symbols-outlined ${styles.backspace}`}>backspace</span> : button.key}
    </div>
  )
}

export default KeyBoard;