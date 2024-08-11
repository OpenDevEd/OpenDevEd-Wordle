import { useContext} from 'react';
import styles from './Cases.module.css';
import Column from './Column';
import { GameContext } from '../Game/GameContextProvider';


function Cases() {

  const {words, results, index, notInList} = useContext(GameContext);
  
  return (
    <div className={styles.Container}>
        <Column notInList={index === 0 ? notInList : false} word={words[0]} evaluate={results[0]}/>
        <Column notInList={index === 1 ? notInList : false} word={words[1]} evaluate={results[1]}/>
        <Column notInList={index === 2 ? notInList : false} word={words[2]} evaluate={results[2]}/>
        <Column notInList={index === 3 ? notInList : false} word={words[3]} evaluate={results[3]}/>
        <Column notInList={index === 4 ? notInList : false} word={words[4]} evaluate={results[4]}/>
        <Column notInList={index === 5 ? notInList : false} word={words[5]} evaluate={results[5]}/>
    </div>
  )
}

export default Cases;