import React, {useContext} from 'react'
import classes from './Header.module.css'

import { Link } from 'react-router-dom'
import WordleContext from '../../context/WordleContext'

const Header = () => {

	const {darkMode, setDarkMode} = useContext(WordleContext);

	const handleDarkMode = () => {
		setDarkMode(!darkMode);
		localStorage.setItem('dark_mode', JSON.stringify(!darkMode));
	}

	return (
		<header className={darkMode ? classes.dark_mode : undefined}>
			<div className={`${classes.header_content}`}>
				<Link to="/">{ darkMode ? <img src="assets/images/dark_logo.png" alt="logo" /> : <img src="assets/images/logo.png" alt="logo" /> }</Link>
				<button className={classes.btn} onClick={handleDarkMode}>{ darkMode ? <img src="assets/icons/ic_sun.svg" alt="sun" /> : <img src="assets/icons/ic_moon.svg" alt="moon" /> }</button>
			</div>
		</header>
	)
}

export default Header
