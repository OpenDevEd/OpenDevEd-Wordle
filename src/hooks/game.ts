import { CharacterBoxProps } from "@/types/CharacterBox";
import { useState, useEffect, useMemo, useContext } from "react";
import { MAX_ATTEMPTS } from "@/constants/game";
import {
	ActiveState,
	GameState,
	GridState,
	HistoryEntry,
	Results,
} from "@/types/game";
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
		}, 750);

		return () => {
			clearTimeout(tim);
		};
	}, []);

	return canPopOut;
}

export function useGameState(presetWord?: string): GameState {
	const [savedHistory, setSavedHistory] = useState<HistoryEntry[]>([]);
	const [attempts, setAttempts] = useState<string[]>([]);
	const [attemptColors, setAttemptColors] = useState<string[][]>([]);
	const [randomWord, setRandomWord] = useState<string>(presetWord ?? "");
	const [resetGame, setResetGame] = useState<(() => void) | null>(null);
	const [results, setResults] = useState<Results>(null);
	const showGrid = useMemo<boolean>(() => {
		let gameState: ActiveState = "playing";
		if (randomWord === "") gameState = "loading";
		else if (attempts.includes(randomWord)) gameState = "win";
		else if (attempts.length === MAX_ATTEMPTS) gameState = "lose";
		return gameState === "playing" || gameState === "loading";
	}, [randomWord, attempts]);
	const heartsLeft = useMemo(
		() =>
			MAX_ATTEMPTS -
			attempts.filter((word) => word !== randomWord).length,
		[attempts, randomWord],
	);

	useEffect(() => {
		const history = localStorage.getItem("history");
		if (history) setSavedHistory(JSON.parse(history));
	}, []);

	useEffect(() => {
		if (savedHistory.length > 0)
			localStorage.setItem("history", JSON.stringify(savedHistory));
	}, [savedHistory]);

	return {
		attempts,
		setAttempts,
		attemptColors,
		setAttemptColors,
		randomWord,
		setRandomWord,
		resetGame,
		setResetGame,
		showGrid,
		heartsLeft,
		results,
		setResults,
		savedHistory,
		setSavedHistory,
	};
}

export function useGridState(): GridState {
	const [scope, animate] = useAnimate();
	const [heartScope, heartAnimate] = useAnimate();
	const [attemptColors, setAttemptColors] = useState<string[][]>([]);
	const [keysDown, setKeysDown] = useState<Map<string, boolean>>(new Map());
	const [currentString, setCurrentString] = useState("");
	const [cheats, setCheats] = useState<string[]>([]);
	const [showHistory, setShowHistory] = useState(false);
	const canPopOut = useCanPopOut();

	return {
		scope,
		animate,
		attemptColors,
		setAttemptColors,
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
	};
}

export function useAudio() {
	return useContext(AudioContextProvider) as AudioContextReturn;
}
