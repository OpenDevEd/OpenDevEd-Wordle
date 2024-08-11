import { useContext, useEffect, useState } from "react";
import Grid from "./components/Grid";
import useKeyboard from "./hooks/useKeyboard";
import { GameContext } from "./contexts/GameContext";
import Modal from "./components/Modal";
import Loading from "./components/Loading";

function App() {
  const [handleInput, submitWord] = useKeyboard();
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
    <div className="h-screen w-screen flex flex-col items-center bg-slate-100 text-slate-900">
      <h1 className="text-5xl font-bold mb-10">Wordle</h1>
      <p className="text-xl mb-4">Attempts: {attempts}</p>
      <Grid />
      <button
        className="mt-4 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out"
        onClick={submitWord}
      >
        Submit
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {isCorrect ? (
          <div className="text-5xl text-green-400">YOU WON</div>
        ) : (
          <div className="text-5xl text-red-400">YOU LOST</div>
        )}
      </Modal>
      {isLoading && <Loading />}
    </div>
  );
}

export default App;
