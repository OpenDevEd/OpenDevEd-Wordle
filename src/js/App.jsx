
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css'
import { Game } from './Game';
import { GameEnd } from './endgame';
import { useContext, useState } from 'react';
import { GameContext, GameProvider } from './GameContext';
import { GameMenu } from './GameMenu';

function App() {

	

	return (
		<GameProvider>
			<BrowserRouter>
				<Routes>
					<Route path= '/' Component={GameMenu}/>
					<Route path= '/game' Component={Game}/>
					<Route path= '/endgame' Component={GameEnd}/>
				</Routes>
			</BrowserRouter>
		</GameProvider>
	)
}

export default App;
