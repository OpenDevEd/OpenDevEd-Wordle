import styles from "./styles/Keyboard.module.css";

const keys = [
	["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
	["A", "S", "D", "F", "G", "H", "J", "K", "L"],
	["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"],
];

const KeyRow = ({ row }: { row: string[] }) => {
	const add_key = (key: string) => {
		console.log(key);
	};

	return (
		<div className={styles.row}>
			{row.map((key, index) => (
				<button className={styles.key} key={index} onClick={() => add_key(key)}>
					{key}
				</button>
			))}
		</div>
	);
};

export const Keyboard = () => {
	return (
		<div className={styles.container}>
			{keys.map((row, index) => (
				<KeyRow key={index} row={row} />
			))}
		</div>
	);
};
