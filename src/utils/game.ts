import wordlist from "@/data/wordlist.json";
import { WORD_LENGTH } from "@/constants/game";

export function generateRandomWord() {
	return wordlist[Math.floor(Math.random() * wordlist.length)];
}

export function processAttemptColors(
	currentString: string,
	randomWord: string,
): string[] {
	let colors: string[] = [];
	let unmatchedCharacters: string[] = randomWord.split("");

	const markCharacter = (color: string, index: number) => {
		colors[index] = color;
		unmatchedCharacters.splice(
			unmatchedCharacters.indexOf(currentString[index]),
			1,
		);
	};

	for (let i = 0; i < WORD_LENGTH; i++) {
		if (currentString[i] !== randomWord[i]) continue;
		markCharacter("green", i);
	}

	for (let i = 0; i < WORD_LENGTH; i++) {
		if (
			unmatchedCharacters.includes(currentString[i]) &&
			colors[i] != "green"
		)
			markCharacter("yellow", i);
		else colors[i] = colors[i] || "gray";
	}

	return colors;
}

export function newCheat(
	attempts: string[],
	randomWord: string,
	cheats: string[],
) {
	const characters = randomWord.split("");
	const missedCharacters = characters.map((character, index) => {
		if (attempts.some((attempt) => attempt[index] === character))
			return null;
		return character;
	});
	const missedCharacter = missedCharacters.findIndex(
		(character) => character !== null && !cheats.includes(character),
	);
	if (missedCharacter === -1) return cheats;
	const newArray = [...cheats];
	newArray[missedCharacter] = characters[missedCharacter];
	return newArray;
}

export function newColorExists(
	attemptColors: string[][],
	currentColors: string[],
	color: string,
) {
	return currentColors
		.filter((color, index) => {
			const isGreen = color === color;
			const isPreviousGreen = attemptColors.some(
				(attemptColors) => attemptColors[index] === color,
			);
			return isGreen && !isPreviousGreen;
		})
		.includes(color);
}
