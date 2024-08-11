function Modal({isCorrect, word}: {isCorrect: boolean, word: string}) {
	return (
		<div className="modal">
			<div>
				<h1 className={isCorrect ? "won" : "lost"}>{isCorrect ? 'YOU WON!' : 'YOU LOST!'}</h1>
				<h2>{`The word is "${word}"`}</h2>
			</div>
		</div>
	);
}

export default Modal;