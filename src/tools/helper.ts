import { WORDLIST } from "./constant";

export function selectTargetWord() {
	const randomIndex = Math.floor(Math.random() * WORDLIST.length);
	return WORDLIST[randomIndex];
}

export function checkWord(letter: string, index: number, word: string) {
	if (word[index] === letter) return "Correct";
	if (word.includes(letter)) return "Included";
	else return "Incorrect";
}
