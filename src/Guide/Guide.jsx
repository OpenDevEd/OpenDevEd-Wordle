
import React from 'react';
import styles from  './Guide.module.css';

function Example({word, type}){

  return (
    <div className={styles.Example}>
      <div className={`${styles.char} ${type === 'false' ? styles.absent : ''}`}>{word[0]}</div>
      <div className={`${styles.char}`}>{word[1]}</div>
      <div className={`${styles.char} ${type === 'include' ? styles.present : ''}`}>{word[2]}</div>
      <div className={`${styles.char} ${type === 'correct' ? styles.correct : ''}`}>{word[3]}</div>
      <div className={`${styles.char} `}>{word[4]}</div>
    </div>
  )
}


function Guide({setHelp}){
  return (
    <div className={styles.GuideContainer}>
        <div className={styles.instructions}>
        <span onClick={() => setHelp(false)} className={`material-symbols-outlined ${styles.close}`}>close</span>
          <h1>How to Play Wordle</h1>
            <p><strong>Objective:</strong> Guess the hidden five-letter word within six attempts.</p>
            <p><strong>Guess a Word:</strong> Type a valid five-letter word and press Enter.</p>
              <div className={styles.Examples}>
                <strong>Receive Feedback:</strong> 
                <Example word={'panda'} type={'false'}/>
                <p>The letter is not in the word.</p>

                <Example word={'panda'} type={'include'}/>
                <p>The letter is in the word but in the wrong position.</p>

                <Example word={'panda'} type={'correct'}/>
                <p>The letter is in the correct position.</p>
              </div>
        </div>
    </div>
  );
};

export default Guide;
