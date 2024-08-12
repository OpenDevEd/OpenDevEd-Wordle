import { useContext} from 'react';
import styles from './Cases.module.css';
import Column from './Column';
import { GameContext } from '../Game/GameContextProvider';


function Cases() {

  const {words, results} = useContext(GameContext);
  
  return (
    <div className={styles.Container}>
        <Column word={words[0]} evaluate={results[0]}/>
        <Column word={words[1]} evaluate={results[1]}/>
        <Column word={words[2]} evaluate={results[2]}/>
        <Column word={words[3]} evaluate={results[3]}/>
        <Column word={words[4]} evaluate={results[4]}/>
        <Column word={words[5]} evaluate={results[5]}/>
    </div>
  )
}

export default Cases;