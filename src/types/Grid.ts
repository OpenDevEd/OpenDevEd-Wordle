export type GridProps = {
	showGrid: boolean;
	setAttempts: React.Dispatch<React.SetStateAction<string[]>>;
	attempts: string[];
	randomWord: string;
	setRandomWord: React.Dispatch<React.SetStateAction<string>>;
	setResetGame: React.Dispatch<React.SetStateAction<() => void>>;
	heartsLeft: number;
};
