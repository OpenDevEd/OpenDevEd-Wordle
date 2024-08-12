import React, { useEffect, useState, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

import WordleContext from './context/WordleContext';

import Header from './components/Header/Header';

function App() {

	const { darkMode, setDarkMode } = useContext(WordleContext);

	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('dark_mode') !== null) {
			const darkMode = JSON.parse(localStorage.getItem('dark_mode'));
			setDarkMode(darkMode);
		} else {
			localStorage.setItem('dark_mode', JSON.stringify(false));
		}

		const timer = setTimeout(() => setIsVisible(true), 100);
		return () => clearTimeout(timer);
	}, []);
	
	return (
		<div className={`fade-in ${darkMode && 'dark_mode'} ${isVisible ? 'visible' : ''} wordle cairo-regular`}>
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
  );
}

export default App;
