import { useContext, useEffect, useState } from "react";
import Grid from "./components/Grid";
import useKeyboard from "./hooks/useKeyboard";
import { GameContext } from "./contexts/GameContext";
import Modal from "./components/Modal";

function App() {
  const [handleInput] = useKeyboard();
  const {
    isCorrect,
    attempts,
    isLoading,
    setGuesses,
    setHistory,
    setInput,
    setAttempts,
    setIsCorrect,
    fetchWord,
  } = useContext(GameContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isCorrect || attempts === 0) {
      setIsModalOpen(true);
    }
  }, [isCorrect, attempts]);

  const closeModal = () => {
    setIsModalOpen(false);
    setGuesses(new Array(6).fill([]));
    setHistory([]);
    fetchWord();
    setInput("");
    setAttempts(6);
    setIsCorrect(false);
  };

  useEffect(() => {
    window.addEventListener("keyup", handleInput);
    return () => window.removeEventListener("keyup", handleInput);
  }, [handleInput]);

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-10">Wordle</h1>
      <Grid />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {isCorrect ? (
          <div className="text-5xl text-green-600">YOU WON</div>
        ) : (
          <div className="text-5xl text-red-600">YOU LOST</div>
        )}
      </Modal>
      {isLoading && (
        <div className="w-screen h-screen absolute inset-0 flex justify-center items-center bg-white opacity-50">
          <p className="text-6xl ">Loading...</p>
        </div>
      )}
    </div>
  );
}

export default App;
