import "./App.css";
import { Board } from "./components/Board";
import { Keyboard } from "./components/Keyboard";

function App() {
	return (
		<div className="app_container">
			<div className="game_container">
				<Board />
				<Keyboard />
			</div>
		</div>
	);
}

export default App;
