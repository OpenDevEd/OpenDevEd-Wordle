export interface FormatedGuess {
	key: string,
	color: string,
}

export interface WordleHook {
	currentGuess: string,
	handleKeyUp: ({key}: {key: React.Key}) => void,
	isCorrect: boolean,
	guesses:  {key: string, color: string}[][],
	turns: number,
	usedKeys: {[key: string]: string},
}


export interface GridProps {
	currentGuess: string,
	guesses: {key: string, color: string}[][],
	turns: number,
}


export interface RowProps {
	guess: {key: string, color: string}[],
	currentGuess?: string,
}