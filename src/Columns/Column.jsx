import React from 'react'
import styles from './Cases.module.css';

function Cell({alpha, result}){

  let MyStyle;
  if (result)
    MyStyle= result === 'correct' ? styles.Correct : result === 'include' ? styles.Include : styles.False;

  return(
    <div className={`${MyStyle} ${alpha ? styles.Active : ''}  ${styles.Items}`}>{alpha}</div>
  )
}


function Column({word, evaluate, notInList}) {


  return (
    <div className={`${notInList ? styles.Shake : ''} ${styles.Cell}`}>
        <Cell alpha={word[0]} result={evaluate[0]}/>
        <Cell alpha={word[1]} result={evaluate[1]}/>
        <Cell alpha={word[2]} result={evaluate[2]}/>
        <Cell alpha={word[3]} result={evaluate[3]}/>
        <Cell alpha={word[4]} result={evaluate[4]}/>
    </div>
  )
}

export default Column