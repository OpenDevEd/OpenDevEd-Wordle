import { CharacterBoxProps } from "@/types/CharacterBox";
import { useState, useEffect, useMemo, useContext } from "react";
import { MAX_ATTEMPTS } from "@/constants/game";
import { ActiveState, GameState, GridState, Results } from "@/types/game";
import { useAnimate } from "framer-motion";
import { AudioContextProvider } from "@/providers/AudioProvider";
import { AudioContextReturn } from "@/types/AudioContext";

export function useCharacterBox({
	rowIndex,
	columnIndex,
	attempts,
	currentString,
}: CharacterBoxProps) {
	const isCurrentWord = rowIndex === attempts.length;
	const isCurrentCharacter =
		isCurrentWord && columnIndex === currentString.length;
	const attemptExists = attempts.length > rowIndex;
	let character = "";

	if (isCurrentWord) character = currentString[columnIndex] || "";
	else if (attemptExists) character = attempts[rowIndex][columnIndex] || "";

	return {
		isCurrentWord,
		isCurrentCharacter,
		attemptExists,
		character,
	};
}

export function useCanPopOut() {
	const [canPopOut, setCanPopOut] = useState(false);

	useEffect(() => {
		let tim = setTimeout(() => {
			setCanPopOut(true);
		}, 500);

		return () => {
			clearTimeout(tim);
		};
	}, []);

	return canPopOut;
}

export function useGameState(): GameState {
	const [attempts, setAttempts] = useState<string[]>([]);
	const [randomWord, setRandomWord] = useState<string>("");
	const [resetGame, setResetGame] = useState(() => () => {});
	const [results, setResults] = useState<Results>(null);
	const [gameState, showGrid] = useMemo<[ActiveState, boolean]>(() => {
		let gameState: ActiveState = "playing";
		if (randomWord === "") gameState = "loading";
		else if (attempts.includes(randomWord)) gameState = "win";
		else if (attempts.length === MAX_ATTEMPTS) gameState = "lose";
		return [gameState, gameState === "playing" || gameState === "loading"];
	}, [randomWord, attempts]);
	const heartsLeft = useMemo(
		() =>
			MAX_ATTEMPTS -
			attempts.filter((word) => word !== randomWord).length,
		[attempts, randomWord],
	);

	return {
		attempts,
		setAttempts,
		randomWord,
		setRandomWord,
		resetGame,
		setResetGame,
		gameState,
		showGrid,
		heartsLeft,
		results,
		setResults,
	};
}

export function useGridState(): GridState {
	const [scope, animate] = useAnimate();
	const [heartScope, heartAnimate] = useAnimate();
	const [attemptColors, setAttemptColors] = useState<string[][]>([]);
	const [isKeyDown, setIsKeyDown] = useState(false);
	const [currentString, setCurrentString] = useState("");
	const [cheats, setCheats] = useState<string[]>([]);
	const canPopOut = useCanPopOut();

	return {
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
	};
}

export function useAudio() {
	return useContext(AudioContextProvider) as AudioContextReturn;
}
