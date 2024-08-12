import React, {useEffect, useContext} from 'react'
import classes from './Game.module.css'

import words from '../../assets/data/words.json'

import Keyboard from '../../components/Keyboard/Keyboard'
import WordleContext from '../../context/WordleContext'
import Results from '../../components/Results/Results'

const Game = () => {

	const {gameLocal, setGameLocal, isWrongGuess, setIsWrongGuess, darkMode} = useContext(WordleContext);

	const getRandomWord = () => {
		const randomIndex = Math.floor(Math.random() * words.length);
		return words[randomIndex];
	};

	const generateExpirationTime = () => {
		const expirationInMilliseconds = 1 * 60 * 1000;
		return new Date().getTime() + expirationInMilliseconds;
	  };

	const createNewGame = () => {
		const expirationTime = generateExpirationTime();
		gameLocal.target_word = getRandomWord();
		const game = {...gameLocal, expiration_time: expirationTime};
		setGameLocal(game);
		localStorage.setItem('game', JSON.stringify(game));
	}

	useEffect(() => {

		if (localStorage.getItem('game') !== null) {
			const game = JSON.parse(localStorage.getItem('game'));
			const currentTime = new Date().getTime();

			if (currentTime > game.expiration_time) {
				localStorage.removeItem(game);
				createNewGame();
				return ;
			}
			setGameLocal(game);
			return ;
		}

		createNewGame();
	}, []);

	return (
		<section className={`${classes.game} ${darkMode && classes.dark_mode}`}>
			<div className={classes.game_content}>
				{
					gameLocal.board.map(row => {
						return (
							<div key={row.index} className={`${classes.game_row} ${row.current && classes.wrong_guess}`} onAnimationEnd={() => setIsWrongGuess(0)} iswrongguess={isWrongGuess ? '1' : undefined}>
								{
									row.letters.map((l, index) => {
										return (
											<div key={index} className={`${classes.col_container} ${l.current && classes.flip_letter}`}>
												<button className={classes.game_col}>
													<div className={`${classes.flip_front} ${row.tried ? classes[row.status[index]] : classes.empty} cairo-bold`}></div>
													<div className={`${classes.flip_back} ${row.tried ? classes[row.status[index]] : classes.empty} cairo-bold`}>{l.letter.toUpperCase()}</div>
												</button>
											</div>
										)
									})
								}
							</div>
						)
					})
				}
			</div>
			<Keyboard />
			<Results />
		</section>
	)
}

export default Game
