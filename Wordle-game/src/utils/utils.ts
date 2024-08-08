export function handleKey(e) {
  if (e.key === "Enter")
	addGuess(currentGuesses, event.key.toUpperCase());
}