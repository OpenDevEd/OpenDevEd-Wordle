import { AnimationScope, useAnimate } from "framer-motion";

export type ActiveState = "playing" | "win" | "lose" | "loading";

export type GameState = {
	attempts: string[];
	setAttempts: React.Dispatch<React.SetStateAction<string[]>>;
	randomWord: string;
	setRandomWord: React.Dispatch<React.SetStateAction<string>>;
	resetGame: (() => void) | null;
	setResetGame: React.Dispatch<React.SetStateAction<(() => void) | null>>;
	gameState: string;
	showGrid: boolean;
	heartsLeft: number;
	results: Results;
	setResults: React.Dispatch<React.SetStateAction<Results>>;
};

export type GridState = {
	scope: AnimationScope;
	animate: ReturnType<typeof useAnimate>[1];
	attemptColors: string[][];
	setAttemptColors: React.Dispatch<React.SetStateAction<string[][]>>;
	isKeyDown: boolean;
	setIsKeyDown: React.Dispatch<React.SetStateAction<boolean>>;
	currentString: string;
	setCurrentString: React.Dispatch<React.SetStateAction<string>>;
	canPopOut: boolean;
	heartScope: AnimationScope;
	heartAnimate: ReturnType<typeof useAnimate>[1];
	cheats: string[];
	setCheats: React.Dispatch<React.SetStateAction<string[]>>;
};

export type Results = {
	gameState: string;
	heartsLeft: number;
	randomWord: string;
} | null;
