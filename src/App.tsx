import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import { Keyboard } from "./components/Keyboard";
import { checkWord, selectTargetWord } from "./tools/helper";

function App() {
	const [TargetWord] = useState(() => selectTargetWord());
	const [Tries, setTries] = useState<number>(0);
	const [words, setWords] = useState<string[][]>(new Array(6).fill([]));
	const [results, setResults] = useState<string[][]>(new Array(6).fill([]));

	const addLetter = useCallback(
		(Letter: string) => {
			if (words[Tries].length != 5) {
				setWords((prev) => {
					const newWords = prev.map((word, index) =>
						index === Tries ? [...word, Letter] : word
					);
					return newWords;
				});
			}
		},
		[words, Tries]
	);

	const deleteLetter = useCallback(() => {
		if (words[Tries].length != 0) {
			setWords((prev) => {
				const newWords = prev.map((word, index) =>
					index === Tries ? word.slice(0, -1) : word
				);
				return newWords;
			});
		}
	}, [words, Tries]);

	const handleKeyPress = useCallback(
		(key: string) => {
			if (Tries === 6) return;
			if (key === "Enter" && words[Tries].length === 5) {
				words[Tries].map((letter, index) => {
					const result = checkWord(letter, index, TargetWord);

					setResults((prev) => {
						const newResults = prev.map((word, i) =>
							i === Tries ? [...word, result] : word
						);
						return newResults;
					});
				});
				setTries((prev) => prev + 1);
				return;
			} else if (key === "Backspace") deleteLetter();
			const Letter: string = key.toUpperCase();
			if (Letter.length === 1 && Letter >= "A" && Letter <= "Z")
				addLetter(Letter);
		},
		[TargetWord, words, Tries, deleteLetter, addLetter]
	);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => handleKeyPress(e.key);
		window.addEventListener("keydown", handleKeyDown);

		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [handleKeyPress]);

	return (
		<div className="app_container">
			<div className="game_container">
				<Board Words={words} Results={results} />
				<Keyboard onKeyPress={handleKeyPress} />
			</div>
		</div>
	);
}

export default App;
