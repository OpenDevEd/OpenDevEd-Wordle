import { useState } from "react";
import styles from "./styles/Board.module.css";

const Dummy_words = ["eeepl", "vqxer", "yckst", "lyjle", "aywjp", "rlgse"];

const Row = ({ word }: { word: string }) => (
	<div className={styles.row}>
		{word.split("").map((letter, index) => (
			<div key={index} className={styles.letter}>
				{letter}
			</div>
		))}
	</div>
);

export const Board = () => {
	const [words] = useState<string[]>(Dummy_words);

	return (
		<div className={styles.container}>
			<div className={styles.board}>
				{words.map((word, index) => (
					<Row key={index} word={word} />
				))}
			</div>
		</div>
	);
};
