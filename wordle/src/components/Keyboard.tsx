function Keyboard( {usedKeys}: {usedKeys: any} ) {
	let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

	return (
		<div className="keyboard">
			{
				alphabet.map((letter, index) => {
					const color = usedKeys[letter.toLowerCase()];
					console.log("color : ", color);
					return (
						<div key={index} className={color}>
							{letter}
						</div>
					)
				})
			}
		</div>
	)
}

export default Keyboard;