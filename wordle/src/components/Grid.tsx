import Row from "./Row";
import { GridProps } from "../interfaces/interface";

function Grid({currentGuess, guesses, turns}: GridProps) {

	console.log("Grid : ", currentGuess, guesses, turns);
	return (
		<div>
			{
				guesses.map((guess: {key: string, color: string}[], index: number) => {
					if (index == turns) {
						return <Row key={index} guess={guess} currentGuess={currentGuess}/>;
					}
					return <Row key={index} guess={guess}/>; 
				})
			}
			</div>
	)
}

export default Grid;