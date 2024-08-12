"use client";
import { useCallback, useEffect } from "react";
import wordles from "@/data/wordles.json";
import allowed_guesses from "@/data/allowed_guesses.json";
import { twMerge } from "tailwind-merge";
import { CornerDownLeft } from "lucide-react";
import { alphabetRegex, MAX_ATTEMPTS, WORD_LENGTH } from "@/constants/game";
import { useAudio, useGridState } from "@/hooks/game";
import {
	processAttemptColors,
	generateRandomWord,
	newColorExists,
} from "@/utils/game";
import CharacterBox from "@/components/CharacterBox";
import Hearts from "./Hearts";
import { GridProps } from "@/types/Grid";
import HintsRow from "./HintsRow";
import { InputFunction } from "@/types/game";
import HistoryPage from "./HistoryPage";
import HistoryToggle from "./HistoryToggle";
import KeyboardContainer from "./KeyboardContainer";

export default function Grid({
	showGrid,
	setAttempts,
	attempts,
	randomWord,
	attemptColors,
	setAttemptColors,
	setRandomWord,
	resetGame,
	setResetGame,
	heartsLeft,
	savedHistory,
	setSavedHistory,
	setResults,
}: GridProps) {
	const {
		scope,
		animate,
		keysDown,
		setKeysDown,
		currentString,
		setCurrentString,
		canPopOut,
		heartScope,
		heartAnimate,
		cheats,
		setCheats,
		showHistory,
		setShowHistory,
	} = useGridState();

	const { playSound } = useAudio();

	const submitWord = useCallback(() => {
		if (currentString.length !== WORD_LENGTH) return;
		const wordExists =
			wordles.includes(currentString) ||
			allowed_guesses.includes(currentString);
		if (wordExists) {
			const currentColors = processAttemptColors(
				currentString,
				randomWord,
			);
			if (newColorExists(attemptColors, currentColors, "green"))
				playSound("correct", 0.5);
			else playSound("deny");
			const newAttempts = [...attempts, currentString];
			const newColors = [...attemptColors, currentColors];
			setAttempts(newAttempts);
			setAttemptColors(newColors);
			const condition = {
				win: newColors[newColors.length - 1].every(
					(color) => color === "green",
				),
				lose: newAttempts.length === MAX_ATTEMPTS,
			};
			if (condition.win || condition.lose) {
				playSound(condition.win ? "victory" : "lose");
				setResults({
					gameState: condition.win ? "win" : "lose",
					heartsLeft: condition.win ? heartsLeft : heartsLeft - 1,
					randomWord,
				});
				setSavedHistory([
					{
						attempts: newAttempts,
						colors: newColors,
						word: randomWord,
						date: new Date(),
					},
					...savedHistory,
				]);
			} else {
				heartAnimate("#heartList", {
					x: [10, 0],
				});
			}
			setCurrentString("");
		} else {
			animate(`.row-${attempts.length}`, {
				x: [10, 0],
			});
			playSound("invalid", 0.5);
		}
	}, [
		animate,
		attemptColors,
		attempts,
		currentString,
		heartAnimate,
		heartsLeft,
		playSound,
		randomWord,
		savedHistory,
		setAttemptColors,
		setAttempts,
		setCurrentString,
		setResults,
		setSavedHistory,
	]);

	const resetGameUpdate = useCallback(() => {
		setAttempts([]);
		setAttemptColors([]);
		setCurrentString("");
		setRandomWord(generateRandomWord());
		setCheats([]);
	}, [
		setAttempts,
		setAttemptColors,
		setCurrentString,
		setRandomWord,
		setCheats,
	]);

	const handleKeyDown = useCallback<InputFunction>(
		(e) => {
			if (e.key == "Tab" && e instanceof KeyboardEvent) {
				e.preventDefault();
				return;
			}
			if (showHistory) return;
			setKeysDown((prev) => new Map(prev.set(e.key.toLowerCase(), true)));
		},
		[setKeysDown, showHistory],
	);

	const handleKeyUp = useCallback<InputFunction>(
		(e) => {
			if (showHistory) return;
			const key = e.key.toLowerCase();
			setKeysDown((prev) => {
				prev.delete(key);
				return new Map(prev);
			});
			if (!showGrid) resetGameUpdate();
			else if (
				alphabetRegex.test(key) &&
				currentString.length < WORD_LENGTH
			) {
				setCurrentString((prev) => prev + key);
				playSound("typing");
			} else if (key === "backspace") {
				setCurrentString((prev) => prev.slice(0, -1));
				playSound("backspace", 0.5, 0.05);
			} else if (key === "enter") {
				submitWord();
			}
		},
		[
			currentString,
			setCurrentString,
			submitWord,
			showGrid,
			resetGameUpdate,
			playSound,
			showHistory,
			setKeysDown,
		],
	);

	useEffect(() => {
		if (randomWord === "") setRandomWord(generateRandomWord());

		if (!showGrid && !resetGame) setResetGame(() => resetGameUpdate);
		else if (showGrid && resetGame) setResetGame(null);

		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, [
		randomWord,
		setRandomWord,
		showGrid,
		resetGame,
		setResetGame,
		resetGameUpdate,
		handleKeyDown,
		handleKeyUp,
	]);

	return (
		<div
			className={twMerge(
				"flex-1 overflow-hidden transition-all duration-500",
				!showGrid && "-translate-x-full scale-0 opacity-0",
			)}
		>
			<div
				className={twMerge(
					"relative flex h-svh flex-col items-center justify-center gap-8 transition-all duration-500",
					showHistory && "-translate-y-full opacity-0",
				)}
			>
				<HistoryToggle
					showHistory={false}
					setShowHistory={setShowHistory}
				/>
				<HintsRow
					randomWord={randomWord}
					attempts={attempts}
					cheats={cheats}
					setCheats={setCheats}
				/>
				<div ref={scope} className="flex flex-col gap-1 sm:gap-2">
					{Array(MAX_ATTEMPTS)
						.fill(Array(WORD_LENGTH).fill(null))
						.map((row: string[], rowIndex) => {
							const isCurrentWord = rowIndex === attempts.length;

							return (
								<div
									key={rowIndex}
									className={twMerge(
										`row-${rowIndex} relative select-none`,
									)}
								>
									<div
										data-testid={`row-${rowIndex}`}
										className={twMerge(
											"flex gap-1 transition-all sm:gap-2",
											isCurrentWord &&
												canPopOut &&
												"translate-x-[-10%]",
										)}
									>
										{row.map((_, columnIndex) => (
											<CharacterBox
												key={columnIndex}
												rowIndex={rowIndex}
												columnIndex={columnIndex}
												attempts={attempts}
												currentString={currentString}
												randomWord={randomWord}
												keysDown={keysDown}
												attemptColors={attemptColors}
											/>
										))}
										<div
											data-testid="submit-button"
											onClick={
												isCurrentWord && canPopOut
													? submitWord
													: undefined
											}
											className={twMerge(
												"absolute -right-0 flex size-10 items-center justify-center rounded bg-primary opacity-0 transition-all hover:bg-primary-400 active:scale-95 sm:size-16 dark:bg-primary-300",
												isCurrentWord &&
													canPopOut &&
													"-right-1 sm:-right-2 translate-x-full cursor-pointer opacity-100",
											)}
										>
											<CornerDownLeft className="stroke-text" />
										</div>
									</div>
								</div>
							);
						})}
				</div>
				<div id="gridHearts" ref={heartScope}>
					<Hearts heartsLeft={heartsLeft} />
				</div>
				<KeyboardContainer
					attempts={attempts}
					randomWord={randomWord}
					handleKeyDown={handleKeyDown}
					handleKeyUp={handleKeyUp}
					keysDown={keysDown}
				/>
			</div>
			<div
				className={twMerge(
					"absolute inset-0 translate-y-full opacity-0 transition-all duration-500",
					showHistory && "translate-y-0 opacity-100",
				)}
			>
				<HistoryPage
					savedHistory={savedHistory}
					setShowHistory={setShowHistory}
				/>
			</div>
		</div>
	);
}
