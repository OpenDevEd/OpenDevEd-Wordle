import React, {useContext, useEffect} from 'react'
import classes from './Keyboard.module.css'
import words from '../../assets/data/words.json'
import WordleContext from '../../context/WordleContext'

const Keyboard = () => {

	const {gameLocal, setGameLocal, setIsWrongGuess, setIsWindowOpen, setStartNewGame, darkMode} = useContext(WordleContext);

	const keys = [
		['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
		['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
		['z', 'x', 'c', 'v', 'b', 'n', 'm']
	]

	const getStatus = (word, col_index) => {
		if (word === gameLocal.target_word[col_index]) return 'correct';
		if (gameLocal.target_word.includes(word)) return 'included';
		return 'wrong';
	}

	const handleClearKey = () => {
		const col_index = gameLocal.col_index;
		const attemptIndex = gameLocal.attempt_index;

		if (col_index === 0) return ;

		setGameLocal(prevState => {
			const newState = {...prevState}
			newState.board[attemptIndex].letters[col_index - 1].letter = '';
			newState.board[attemptIndex].letters[col_index - 1].current = false;
			newState.board[attemptIndex].status[col_index - 1] = '';

			newState.col_index = col_index - 1;

			localStorage.setItem('game', JSON.stringify(newState));
			return newState
		});
	}

	const handleLetterKey = key => {
		const col_index = gameLocal.col_index;
		const attemptIndex = gameLocal.attempt_index;

		setGameLocal(prevState => {
			const newState = {...prevState}
			newState.board[attemptIndex].letters[col_index].letter = key;
			newState.board[attemptIndex].letters[col_index].current = true;
			newState.board[attemptIndex].status[col_index] = getStatus(key, col_index);

			newState.col_index = col_index + 1;

			localStorage.setItem('game', JSON.stringify(newState));
			return newState
		});
	}

	const handleEnterKey = () => {
		const col_index = gameLocal.col_index;
		const attemptIndex = gameLocal.attempt_index;

		if (col_index !== 5) return ;

		const letters = gameLocal.board[attemptIndex].letters.map(l => l.letter);
		const joinGuessedWord = letters.join('');
		const guessedWord = words.find(word => word === joinGuessedWord);

		if (guessedWord === undefined) {
			setIsWrongGuess(1);
			return ;
		}

		setGameLocal(prevState => {
			const newState = {...prevState}
			newState.board[attemptIndex].tried = true;
			newState.board[attemptIndex].current = false;
			if (attemptIndex !== 5) newState.board[attemptIndex + 1].current = true;

			localStorage.setItem('game', JSON.stringify(newState));
			return newState
		});

		if (guessedWord === gameLocal.target_word || attemptIndex === 5) {

			setIsWindowOpen(true);
			
			setGameLocal(prevState => {
				const newState = {...prevState}
				newState.is_won = guessedWord === gameLocal.target_word;
				newState.is_game_finished = true;

				localStorage.setItem('game', JSON.stringify(newState));
				return newState;
			});

			return ;
		}

		setGameLocal(prevState => {
			const newState = {...prevState}
			newState.attempt_index = attemptIndex + 1;
			newState.col_index = 0;

			localStorage.setItem('game', JSON.stringify(newState));
			return newState;
		}
		)
	}

	const handleKeyClick = key => {
		if ((gameLocal.col_index === 5 && key !== 'Enter' && key !== 'Backspace') || gameLocal.is_game_finished) return ;

		if (key === 'Enter') handleEnterKey();
		else if (key === 'Backspace') handleClearKey();
		else handleLetterKey(key);
	}

	useEffect(() => {
		
		const handleKeyPress = (event) => {
			if ((gameLocal.col_index === 5 && event.key !== 'Enter' && event.key !== 'Backspace') || gameLocal.is_game_finished || event.metaKey || event.ctrlKey) return ;
			
			if (event.key === 'Enter') handleEnterKey();
			else if (event.key === 'Backspace') handleClearKey();
			else if (keys[0].includes(event.key) || keys[1].includes(event.key) || keys[2].includes(event.key)) handleLetterKey(event.key);
		};

		window.addEventListener('keydown', handleKeyPress);

		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		};
	}, [gameLocal]);

	return (
		<>
			{
				gameLocal.is_game_finished ?
				<p className={classes.game_finished}>Refresh the page after 1 minute to play again.</p>
				:
				<div className={`${classes.keyboard} ${darkMode && classes.dark_mode}`}>
					<div className={classes.keyboard_row}>
						{
							keys[0].map(key => <button key={key} className={classes.key} onClick={() => handleKeyClick(key)}>{key.toUpperCase()}</button>)
						}
					</div>
					<div className={classes.keyboard_row}>
						{
							keys[1].map(key => <button key={key} className={classes.key} onClick={() => handleKeyClick(key)}>{key.toUpperCase()}</button>)
						}
					</div>
					<div className={classes.keyboard_row}>
						<button className={`${classes.key} ${classes.enter}`} onClick={() => handleKeyClick("Enter")}>
							{ darkMode ? <img src="assets/icons/ic_arrow_top_gray.svg" alt="enter" /> : <img src="assets/icons/ic_arrow_top.svg" alt="enter" /> }
						</button>
						{
							keys[2].map(key => <button key={key} className={classes.key} onClick={() => handleKeyClick(key)}>{key.toUpperCase()}</button>)
						}
						<button className={`${classes.key} ${classes.clear}`} onClick={() => handleKeyClick("Backspace")}>
							{ darkMode ? <img src="assets/icons/ic_clear_gray.svg" alt="clear" /> : <img src="assets/icons/ic_clear.svg" alt="clear" /> }
						</button>
					</div>
				</div>
			}
		</>
	)
}

export default Keyboard
