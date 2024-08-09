export type GridProps = {
	showGrid: boolean;
	setAttempts: React.Dispatch<React.SetStateAction<string[]>>;
	attempts: string[];
	randomWord: string;
	setRandomWord: React.Dispatch<React.SetStateAction<string>>;
	resetGame: (() => void) | null;
	setResetGame: React.Dispatch<React.SetStateAction<(() => void) | null>>;
	heartsLeft: number;
};
