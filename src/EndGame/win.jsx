import React, { useContext, useEffect } from 'react'
import styles from './win.module.css';
import WordStyles from "../Guide/Guide.module.css";
import getRandomWord from '../Game/RandomWords';
import * as TrophyAnimation from './assets/trophy.json';
import * as ArtificeAnimation from './assets/artifice.json';
import * as LoseAnimation from './assets/lose.json';
import { GameContext } from '../Game/GameContextProvider';
import Lottie from 'react-lottie';

function WinCard(){

  const TrophyOptions = {
    loop: false,
    autoplay: true, 
    animationData: TrophyAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const ArtificeOptions = {
    loop: false,
    autoplay: true, 
    animationData: ArtificeAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <>
      <Lottie
        style={{position: 'absolute', top: 0}}
	      options={ArtificeOptions}
        height={200}
        width={200}
      />
      <Lottie 
	      options={TrophyOptions}
        height={200}
        width={200}
      />
      <h1>Congratulations!</h1>
    </>
  )
}


function LoseCard(){
  
  const {target} =  useContext(GameContext);

  const LoseOptions = {
    loop: true,
    autoplay: true, 
    animationData: LoseAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return(
    <>
      <Lottie 
	      options={LoseOptions}
        height={200}
        width={200}
        />
      <h1>Good try! You almost had it. Keep going!</h1>
      <div className={styles.answer}>
        <h3>The word was : </h3>
        <div className={WordStyles.Example}>
          <div className={WordStyles.char}>{target[0]}</div>
          <div className={WordStyles.char}>{target[1]}</div>
          <div className={WordStyles.char}>{target[2]}</div>
          <div className={WordStyles.char}>{target[3]}</div>
          <div className={WordStyles.char}>{target[4]}</div>
        </div>
      </div>
    </>
  )
}

function replay(setWin, setWords, setResults, setTarget, setIndex){
  setIndex(0);
  setResults(Array(6).fill({}));
  setWords(Array(6).fill(""));
  setTarget(getRandomWord().toLowerCase());
  setWin('play');
}

function WinPopUp() {

  const {win, setIndex, setWin, setTarget, setResults, setWords} = useContext(GameContext);
  
  useEffect(() => localStorage.removeItem('state'), []);

  return (
    <div className={styles.Win}>
        <div className={styles.popup}>            
            {win === 'win' && <WinCard/>}
            {win === 'lose' && <LoseCard/>}
            <button onClick={() => replay(setWin, setWords, setResults, setTarget, setIndex)} className={styles.replay}>Replay</button>
        </div>

    </div>
  )
}

export default WinPopUp