import { AnimationScope, useAnimate } from "framer-motion";

export type ActiveState = "playing" | "win" | "lose" | "loading";

export type GameState = {
	attempts: string[];
	setAttempts: React.Dispatch<React.SetStateAction<string[]>>;
	attemptColors: string[][];
	setAttemptColors: React.Dispatch<React.SetStateAction<string[][]>>;
	randomWord: string;
	setRandomWord: React.Dispatch<React.SetStateAction<string>>;
	resetGame: (() => void) | null;
	setResetGame: React.Dispatch<React.SetStateAction<(() => void) | null>>;
	showGrid: boolean;
	heartsLeft: number;
	results: Results;
	setResults: React.Dispatch<React.SetStateAction<Results>>;
	savedHistory: HistoryEntry[];
	setSavedHistory: React.Dispatch<React.SetStateAction<HistoryEntry[]>>;
};

export type GridState = {
	scope: AnimationScope;
	animate: ReturnType<typeof useAnimate>[1];
	attemptColors: string[][];
	setAttemptColors: React.Dispatch<React.SetStateAction<string[][]>>;
	keysDown: Map<string, boolean>;
	setKeysDown: React.Dispatch<React.SetStateAction<Map<string, boolean>>>;
	currentString: string;
	setCurrentString: React.Dispatch<React.SetStateAction<string>>;
	canPopOut: boolean;
	heartScope: AnimationScope;
	heartAnimate: ReturnType<typeof useAnimate>[1];
	cheats: string[];
	setCheats: React.Dispatch<React.SetStateAction<string[]>>;
	showHistory: boolean;
	setShowHistory: React.Dispatch<React.SetStateAction<boolean>>;
};

export type InputFunction = (e: KeyboardEvent | { key: string }) => void;

export type Results = {
	gameState: string;
	heartsLeft: number;
	randomWord: string;
} | null;

export type HistoryEntry = {
	attempts: string[];
	colors: string[][];
	word: string;
	date: Date;
};
