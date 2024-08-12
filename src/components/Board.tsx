import { cn } from "../tools/cn";
import styles from "./styles/Board.module.css";

const Letter = ({
	letter,
	result,
}: {
	letter: string | undefined;
	result: string | undefined;
}) => (
	<div
		className={cn(
			styles.letter,
			result === "Correct"
				? "bg-green-400"
				: result == "Included"
				? "bg-[#dcd639]"
				: result == "Incorrect"
				? "bg-gray-400"
				: "bg-gradient-to-tr from-[#351637] to-[#D23B32]",
			letter?.length != 1 && "bg-none border"
		)}
	>
		{letter}
	</div>
);

const Row = ({ word, Result }: { word: string[]; Result: string[] }) => (
	<div className={styles.row}>
		<Letter letter={word[0]} result={Result[0]} />
		<Letter letter={word[1]} result={Result[1]} />
		<Letter letter={word[2]} result={Result[2]} />
		<Letter letter={word[3]} result={Result[3]} />
		<Letter letter={word[4]} result={Result[4]} />
	</div>
);

export const Board = ({
	Words,
	Results,
}: {
	Words: string[][];
	Results: string[][];
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.board}>
				{Words.map((word, index) => (
					<Row key={index} word={word} Result={Results[index]} />
				))}
			</div>
		</div>
	);
};
