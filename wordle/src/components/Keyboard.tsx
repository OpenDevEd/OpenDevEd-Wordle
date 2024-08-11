function Keyboard( {usedKeys}: {usedKeys: {[key: string]: string}} ) {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

	return (
		<div className="keyboard">
			{
				alphabet.map((letter, index) => {
					const color = usedKeys[letter.toLowerCase()];
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