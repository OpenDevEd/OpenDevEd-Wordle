import { createContext, useState } from "react";

const WordleContext = createContext(null);

export const WordleProvider = ({ children }) => {

	const [gameLocal, setGameLocal] = useState(
		{
			target_word: '',
			is_won: false,
			is_game_finished: false,
			col_index: 0,
			attempt_index: 0,
			board: [
				{index: 0, letters: [{letter: '', current: false}, {letter: '', current: false}, {letter: '', current: false}, {letter: '', current: false}, {letter: '', current: false}], status: ['', '', '', '', ''], tried: false, current: true},
				{index: 1, letters: [{letter: '', current: false}, {letter: '', current: false}, {letter: '', current: false}, {letter: '', current: false}, {letter: '', current: false}], status: ['', '', '', '', ''], tried: false, current: false},
				{index: 2, letters: [{letter: '', current: false}, {letter: '', current: false}, {letter: '', current: false}, {letter: '', current: false}, {letter: '', current: false}], status: ['', '', '', '', ''], tried: false, current: false},
				{index: 3, letters: [{letter: '', current: false}, {letter: '', current: false}, {letter: '', current: false}, {letter: '', current: false}, {letter: '', current: false}], status: ['', '', '', '', ''], tried: false, current: false},
				{index: 4, letters: [{letter: '', current: false}, {letter: '', current: false}, {letter: '', current: false}, {letter: '', current: false}, {letter: '', current: false}], status: ['', '', '', '', ''], tried: false, current: false},
				{index: 5, letters: [{letter: '', current: false}, {letter: '', current: false}, {letter: '', current: false}, {letter: '', current: false}, {letter: '', current: false}], status: ['', '', '', '', ''], tried: false, current: false},
			]
		}
	)
	const [isWrongGuess, setIsWrongGuess] = useState(false);
	const [isWindowOpen, setIsWindowOpen] = useState(false);

	const [darkMode, setDarkMode] = useState(false);

	return (
		<WordleContext.Provider value={{
			gameLocal,
			setGameLocal,
			isWrongGuess,
			setIsWrongGuess,
			isWindowOpen,
			setIsWindowOpen,

			darkMode,
			setDarkMode
		}}>
			{children}
		</WordleContext.Provider>
	)
}

export default WordleContext;