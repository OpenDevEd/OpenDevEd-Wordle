import Row from "./Row";

function Grid({currentGuess, guesses, turns}: {currentGuess: any, guesses: any, turns: number}) {

	console.log("Grid : ", guesses, turns);
	return (
		<div>
			{
				guesses.map((guess: any, index: number) => {
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