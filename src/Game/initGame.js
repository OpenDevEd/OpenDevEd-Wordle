import getRandomWord from "./RandomWords";

export function Target(str) {
    const newChar = str.replace(/[A-Za-z]/g, function(char) {
      return String.fromCharCode(
        char.charCodeAt(0) + (char.toUpperCase() <= 'M' ? 13 : -13)
      );  
    });
    return newChar;
}


export default function InitGame(setWords, setTarget, setResults, setIndex){
    
    const state = localStorage.getItem('state');

    if (!state){
        const target = getRandomWord().toLowerCase();
        setTarget(target);
        setWords(Array(6).fill(""));
        setResults(Array(6).fill({}));
        setIndex(0);
    }
    else {
        const StateJson = JSON.parse(state);
        setTarget(Target(StateJson.word));
        setWords(StateJson.words);
        setIndex(StateJson.index);
        setResults(StateJson.results);
    }
}