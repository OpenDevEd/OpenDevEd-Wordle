import React, {useContext} from 'react'
import classes from './Home.module.css'

import { Link } from 'react-router-dom'
import WordleContext from '../../context/WordleContext'

const Home = () => {

	const {darkMode} = useContext(WordleContext);

	return (
		<section className={`${classes.home} ${darkMode && classes.dark_mode}`}>
			<h1>Wordle</h1>
			<p className={classes.description}>Wordle is a word puzzle game where users have six chances to guess a five-letter word of the day.</p>
			<Link to="/game" className={classes.btn}><button className='cairo-bold'>Play Now</button></Link>
			<div className={classes.instructions}>
				<h2 className={classes.instructions_title}>How to Play</h2>
				<p>When you start the game you have to guess a word that is 5 letters long which is generated when the game starts, and you have 6 attempts to guess the word. To make the game easy, I have reduced the time to wait for world to change to 1 minute.
				<br /><br />
				In each attempt and after you hit submit, you'll get a feedback about the correctness of the letter position using the GREEN, YELLOW, and GRAY colors:</p>
				<div className={classes.colors}>
					<div className={classes.color}>
						<p className={classes.green_title}><span>Green</span> indicates that the letter is in the correct position:</p>
						<div className={`${classes.green} cairo-bold`}>
							<div className={classes.green_letter}>A</div>
							<div className={classes.letter}>A</div>
							<div className={classes.letter}>A</div>
							<div className={classes.letter}>A</div>
							<div className={classes.letter}>A</div>
						</div>
					</div>
					<div className={classes.color}>
						<p className={classes.yellow_title}><span>Yellow</span> indicates that the letter is in the word but in the wrong position:</p>
						<div className={`${classes.yellow} cairo-bold`}>
							<div className={classes.yellow_letter}>A</div>
							<div className={classes.letter}>A</div>
							<div className={classes.letter}>A</div>
							<div className={classes.letter}>A</div>
							<div className={classes.letter}>A</div>
						</div>
					</div>
					<div className={classes.color}>
						<p className={classes.gray_title}><span>Yellow</span> indicates that the letter is not in the word at all:</p>
						<div className={`${classes.gray} cairo-bold`}>
							<div className={classes.gray_letter}>A</div>
							<div className={classes.letter}>A</div>
							<div className={classes.letter}>A</div>
							<div className={classes.letter}>A</div>
							<div className={classes.letter}>A</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	) 
}

export default Home
