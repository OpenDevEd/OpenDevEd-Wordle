import toast from "react-hot-toast";
import { Words } from "./RandomWords";
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

function evaluate(index, setIndex, words, setWords, setResults, setWin, target, setNotInList){
    const input = words[index].toLowerCase();
    if (input.length < 5) return;
    
    if (!Words.includes(input)){
      toast.error(`${input}: Not in the word list.`)
      setNotInList(true);
      setTimeout(() => setNotInList(false), 1000);
      setWords(prev => {
        const newWords = [...prev];
        newWords[index] = "";
        return newWords;
      });
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
      setTimeout(() => setWin('win'), 1500);
      return;
    }
        
    if (index < 5) setIndex(prev => prev + 1);
    else  setTimeout(() => setWin('lose'), 1500);
}


export default function handleKeyCallBack(alpha, index, setIndex, words, setWords, setResults, setWin, target, setNotInList){

  const key = alpha.toUpperCase();
  if (key === 'ENTER'){
    evaluate(index, setIndex, words,setWords, setResults, setWin, target, setNotInList);
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
    setWords(
      (prev) => {
        let newWord = [...prev];
        newWord[index] = prev[index] + key;
        return newWord;
    })
  }
}