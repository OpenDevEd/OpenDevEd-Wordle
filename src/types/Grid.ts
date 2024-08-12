import { HistoryEntry, Results } from "./game";

export type GridProps = {
	showGrid: boolean;
	setAttempts: React.Dispatch<React.SetStateAction<string[]>>;
	attempts: string[];
	attemptColors: string[][];
	setAttemptColors: React.Dispatch<React.SetStateAction<string[][]>>;
	randomWord: string;
	setRandomWord: React.Dispatch<React.SetStateAction<string>>;
	resetGame: (() => void) | null;
	setResetGame: React.Dispatch<React.SetStateAction<(() => void) | null>>;
	heartsLeft: number;
	savedHistory: HistoryEntry[];
	setSavedHistory: React.Dispatch<React.SetStateAction<HistoryEntry[]>>;
	setResults: React.Dispatch<React.SetStateAction<Results>>;
};
