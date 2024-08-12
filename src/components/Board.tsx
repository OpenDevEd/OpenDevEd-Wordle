import { cn } from "../tools/cn";
import styles from "./styles/Board.module.css";

const Letter = ({ letter }: { letter: string | undefined }) => (
	<div className={cn(styles.letter, letter?.length != 1 && "bg-none border")}>
		{letter}
	</div>
);

const Row = ({ word }: { word: string[] }) => (
	<div className={styles.row}>
		<Letter letter={word[0]} />
		<Letter letter={word[1]} />
		<Letter letter={word[2]} />
		<Letter letter={word[3]} />
		<Letter letter={word[4]} />
	</div>
);

export const Board = ({ Words }: { Words: string[][] }) => {
	return (
		<div className={styles.container}>
			<div className={styles.board}>
				{Words.map((word, index) => (
					<Row key={index} word={word} />
				))}
			</div>
		</div>
	);
};
