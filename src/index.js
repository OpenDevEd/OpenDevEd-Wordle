import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import { WordleProvider } from './context/WordleContext';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/game",
				element: <Game />,
			}
		]
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<WordleProvider>
		<RouterProvider router={router} />
	</WordleProvider>
);

