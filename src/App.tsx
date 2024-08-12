import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import { Keyboard } from "./components/Keyboard";

function App() {
	const [Tries, setTries] = useState<number>(0);
	const [words, setWords] = useState<string[][]>(new Array(6).fill([]));

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

	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			console.log(e.key);
			if (Tries === 6) return;
			if (e.key === "Enter" && words[Tries].length === 5) {
				setTries((prev) => prev + 1);
				return;
			} else if (e.key === "Backspace") deleteLetter();
			const Letter: string = e.key.toUpperCase();
			if (Letter.length === 1 && Letter >= "A" && Letter <= "Z")
				addLetter(Letter);
		};
		window.addEventListener("keydown", handleKeyPress);

		return () => window.removeEventListener("keydown", handleKeyPress);
	}, [words, Tries, deleteLetter, addLetter]);

	return (
		<div className="app_container">
			<div className="game_container">
				<Board Words={words} />
				<Keyboard />
			</div>
		</div>
	);
}

export default App;
