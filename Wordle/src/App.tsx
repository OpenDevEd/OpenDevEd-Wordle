import { useContext, useEffect } from "react";
import Grid from "./components/Grid";
import useKeyboard from "./hooks/useKeyboard";
import { GameContext } from "./contexts/GameContext";

function App() {
  const [handleInput] = useKeyboard();
  const { isCorrect, attempts } = useContext(GameContext);

  useEffect(() => {
    window.addEventListener("keyup", handleInput);
    return () => window.removeEventListener("keyup", handleInput);
  }, [handleInput]);

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-10">Wordle</h1>
      <Grid />
      {isCorrect && <div className="text-5xl text-green-600"> YOU WON </div>}
      {!attempts && !isCorrect && (
        <div className="text-5xl text-red-600"> YOU LOST</div>
      )}
      {/* <Modal /> */}
    </div>
  );
}

export default App;
