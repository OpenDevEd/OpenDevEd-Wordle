import wordles from "@/data/wordles.json";
import { WORD_LENGTH } from "@/constants/game";

export function generateRandomWord() {
	return wordles[Math.floor(Math.random() * wordles.length)];
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
	const bestGuesses = Array(WORD_LENGTH)
		.fill("")
		.map((_, index) => {
			return attempts.some(
				(attempt) => attempt[index] == characters[index],
			)
				? characters[index]
				: "";
		});
	const newCharacterIndex = bestGuesses.findIndex(
		(character, index) =>
			character === "" && cheats[index] != characters[index],
	);
	if (newCharacterIndex === -1) return cheats;
	const newArray = [...cheats];
	newArray[newCharacterIndex] = characters[newCharacterIndex];
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
