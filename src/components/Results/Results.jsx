import React, {useContext} from 'react'
import classes from './Results.module.css'

import Lottie from "lottie-react";
import congratsAnimation from "../../assets/animations/congrats.json";
import sadAnimation from "../../assets/animations/sad.json";

import WordleContext from '../../context/WordleContext';

const Results = () => {

	const {isWindowOpen, setIsWindowOpen, gameLocal, darkMode} = useContext(WordleContext);

	const handleCloseWindow = () => {
		setIsWindowOpen(false);
	}

	return (
		<div className={`${classes.results} ${isWindowOpen && classes.window_opened} ${darkMode && classes.dark_mode}`}>
			<div className={classes.results_content}>
				<div className={classes.animation_container}>
					{gameLocal.is_won ? <Lottie animationData={congratsAnimation} loop={false} /> : <Lottie animationData={sadAnimation} loop={false} />}
				</div>
				<div className={classes.results_text}>
					{gameLocal.is_won ?
							<>
								<h1>Congratulations!</h1>
								<p>You have successfully guessed the word!</p>
							</>
						:
							<>
								<h1>Game Over!</h1>
								<p>You have reached the maximum number of attempts!</p>
							</>
					}
					<button onClick={handleCloseWindow}>Continue</button>
				</div>
			</div>
		</div>
	)
}

export default Results
