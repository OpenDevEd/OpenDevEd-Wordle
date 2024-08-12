import styles from "./styles/Keyboard.module.css";

const keys = [
	["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
	["A", "S", "D", "F", "G", "H", "J", "K", "L"],
	["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"],
];

const KeyRow = ({
	row,
	onKeyPress,
}: {
	row: string[];
	onKeyPress: (letter: string) => void;
}) => {
	return (
		<div className={styles.row}>
			{row.map((key, index) => (
				<button
					className={styles.key}
					key={index}
					onClick={() => onKeyPress(key)}
				>
					{key}
				</button>
			))}
		</div>
	);
};

export const Keyboard = ({
	onKeyPress,
}: {
	onKeyPress: (letter: string) => void;
}) => {
	return (
		<div className={styles.container}>
			{keys.map((row, index) => (
				<KeyRow key={index} row={row} onKeyPress={onKeyPress} />
			))}
		</div>
	);
};
