import Board from "./components/Board";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import useRandomWord from "./hooks/useRandomWord";
import ShowHint from "./components/ShowHint";


function App() {
  // Use the custom hook to get a random word
  const { word } = useRandomWord();

  return (
    <>
      {/* ToastContainer for displaying notifications */}
      <ToastContainer />
      
      {/* Main container with full viewport width and height, using dark background */}
      <div className="w-[100vw] h-[100vh] bg-darkBg flex flex-col">
        {/* Header component */}
        <Header />
        
      {/* Board component handles game logic and displays the cells. It receives the random word as a prop to manage game state and rendering. */}
        <Board word={word} />
        
        {/* ShowHint component that also receives the random word as a prop and show hint to the user */}
        <ShowHint word={word} />
      </div>
    </>
  );
}

export default App;
