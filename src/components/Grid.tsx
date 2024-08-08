"use client";
import { useCallback, useEffect } from "react";
import wordles from "@/data/wordles.json";
import allowed_guesses from "@/data/allowed_guesses.json";
import { twMerge } from "tailwind-merge";
import { CornerDownLeft } from "lucide-react";
import { MAX_ATTEMPTS, WORD_LENGTH } from "@/constants/game";
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

export default function Grid({
	showGrid,
	setAttempts,
	attempts,
	randomWord,
	setRandomWord,
	setResetGame,
	heartsLeft,
}: GridProps) {
	const {
		scope,
		animate,
		attemptColors,
		setAttemptColors,
		isKeyDown,
		setIsKeyDown,
		currentString,
		setCurrentString,
		canPopOut,
		heartScope,
		heartAnimate,
		cheats,
		setCheats,
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
			setAttempts((prev) => [...prev, currentString]);
			setAttemptColors((prev) => [...prev, currentColors]);
			setCurrentString("");
			heartAnimate("#heartList", {
				x: [10, 0],
			});
		} else {
			animate(`.row-${attempts.length}`, {
				x: [10, 0],
			});
			playSound("invalid", 0.5);
		}
	}, [
		currentString,
		attempts,
		randomWord,
		animate,
		setAttempts,
		setAttemptColors,
		setCurrentString,
		attemptColors,
		heartAnimate,
		playSound,
	]);

	useEffect(() => {
		const alphabetRegex = /^[a-zA-Z]$/;

		const resetGame = () => {
			setAttempts([]);
			setAttemptColors([]);
			setCurrentString("");
			setRandomWord(generateRandomWord());
			setCheats([]);
		};

		const handleKeyDown = (e: KeyboardEvent) => {
			if (alphabetRegex.test(e.key)) setIsKeyDown(true);
		};

		const handleKeyUp = (e: KeyboardEvent) => {
			setIsKeyDown(false);
			if (!showGrid) resetGame();
			else if (
				alphabetRegex.test(e.key) &&
				currentString.length < WORD_LENGTH
			) {
				setCurrentString((prev) => prev + e.key.toLowerCase());
				playSound("typing");
			} else if (e.key === "Backspace") {
				setCurrentString((prev) => prev.slice(0, -1));
				playSound("backspace", 0.5, 0.05);
			} else if (e.key === "Enter") {
				submitWord();
			}
		};

		if (randomWord === "") setRandomWord(generateRandomWord());

		setResetGame(() => resetGame);

		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, [
		currentString,
		submitWord,
		randomWord,
		setRandomWord,
		setAttempts,
		setAttemptColors,
		setResetGame,
		setCurrentString,
		setIsKeyDown,
		heartScope,
		playSound,
		setCheats,
		showGrid
	]);

	return (
		<div
			className={twMerge(
				"flex flex-1 flex-col items-center justify-center gap-8 transition-all duration-500",
				!showGrid && "-translate-x-full scale-0 opacity-0",
			)}
		>
			<HintsRow
				randomWord={randomWord}
				attempts={attempts}
				cheats={cheats}
				setCheats={setCheats}
			/>
			<div ref={scope} className="flex flex-col gap-2">
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
									className={twMerge(
										"flex gap-2 transition-all",
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
											isKeyDown={isKeyDown}
											attemptColors={attemptColors}
										/>
									))}
									<div
										onClick={
											isCurrentWord && canPopOut
												? submitWord
												: undefined
										}
										className={twMerge(
											"absolute -right-0 flex size-16 items-center justify-center rounded bg-primary opacity-0 transition-all hover:bg-primary-400 active:scale-95 dark:bg-primary-300",
											isCurrentWord &&
												canPopOut &&
												"-right-2 translate-x-full cursor-pointer opacity-100",
										)}
									>
										<CornerDownLeft className="stroke-text" />
									</div>
								</div>
							</div>
						);
					})}
			</div>
			<div ref={heartScope}>
				<Hearts heartsLeft={heartsLeft} />
			</div>
		</div>
	);
}
