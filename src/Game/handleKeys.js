import toast from "react-hot-toast";
import { Target } from "./initGame";

function StoreItemState(target, words, results, index){
  if (index < 5)
    index++;
  const itemJson = {
    'words' : words,
    'results' : results,
    'index' : index,
    'word' : Target(target),
  }
  localStorage.setItem('state' , JSON.stringify(itemJson));
}

function evaluate(index, setIndex, words,setResults, setWin, target){

  const input = words[index].toLowerCase();
    
    if (input.length < 5){
      return;
    }

    setResults(prev => {
      const newResults = [...prev];
      newResults[index] = input.split('').reduce((acc, char, i) => {
        acc[i] = target[i] === char ? "correct" : target.includes(char) ? "include" : "false";
        return acc;
      }, {});
      StoreItemState(target, words, newResults, index);
      return newResults;
    });

    if (input === target) {
      setTimeout(() => setWin('win'), 500);
      return;
    }
        
    if (index < 5) setIndex(prev => prev + 1);
    else  setTimeout(() => setWin('lose'), 500);
}


export default function handleKeyCallBack(alpha, index, setIndex, words, setWords, setResults, setWin, target, win){

  const key = alpha.toUpperCase();
  if (key === 'ENTER'){
    evaluate(index, setIndex, words, setResults, setWin, target);
  }
  else if (key === 'BACKSPACE'){
    setWords(
      (prev) => {
        let newWord = [...prev];
        newWord[index] = prev[index].slice(0, -1);
        return newWord;
    })
  }
  else if (key >= 'A' && key <= 'Z' && key.length === 1) {
    if (words[index].length >= 5) return;
    setWords(
      (prev) => {
        let newWord = [...prev];
        newWord[index] = prev[index] + key;
        return newWord;
    })
  }
  else{
    if (win === 'play' && words[index].length < 5){
      toast.error('only accepts alphabetic characters')
    }
  }
}