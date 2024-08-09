// import { useContext, useEffect, useState } from "react";
// import Grid from "./components/Grid";
// import useKeyboard from "./hooks/useKeyboard";
// import { GameContext } from "./contexts/GameContext";
// import Modal from "./components/Modal";

// function App() {
//   const [handleInput] = useKeyboard();
//   const {
//     isCorrect,
//     attempts,
//     isLoading,
//     setGuesses,
//     setHistory,
//     setInput,
//     setAttempts,
//     setIsCorrect,
//     fetchWord,
//   } = useContext(GameContext);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     if (isCorrect || attempts === 0) {
//       setIsModalOpen(true);
//     }
//   }, [isCorrect, attempts]);

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setGuesses(new Array(6).fill([]));
//     setHistory([]);
//     fetchWord();
//     setInput("");
//     setAttempts(6);
//     setIsCorrect(false);
//   };

//   useEffect(() => {
//     window.addEventListener("keyup", handleInput);
//     return () => window.removeEventListener("keyup", handleInput);
//   }, [handleInput]);

//   return (
//     <div className="h-screen w-screen flex flex-col items-center">
//       <h1 className="text-5xl font-bold mb-10">Wordle</h1>
//       <p>attempts: {attempts}</p>
//       <Grid />
//       <button className=" mt-4 bg-gray-400 text-white py-2 px-4 rounded ">
//         submit
//       </button>
//       <Modal isOpen={isModalOpen} onClose={closeModal}>
//         {isCorrect ? (
//           <div className="text-5xl text-green-600">YOU WON</div>
//         ) : (
//           <div className="text-5xl text-red-600">YOU LOST</div>
//         )}
//       </Modal>
//       {isLoading && (
//         <div className="w-screen h-screen absolute inset-0 flex justify-center items-center bg-white opacity-50">
//           <div className="animate-spin">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="5em"
//               height="5em"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 fill="currentColor"
//                 d="M12 22c5.523 0 10-4.477 10-10h-3a7 7 0 0 1-7 7zM2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7z"
//               ></path>
//             </svg>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

import { useContext, useEffect, useState } from "react";
import Grid from "./components/Grid";
import useKeyboard from "./hooks/useKeyboard";
import { GameContext } from "./contexts/GameContext";
import Modal from "./components/Modal";

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
      {isLoading && (
        <div className="w-screen h-screen absolute inset-0 flex justify-center items-center bg-gray-100 opacity-75">
          <div className="animate-spin text-slate-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5em"
              height="5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 22c5.523 0 10-4.477 10-10h-3a7 7 0 0 1-7 7zM2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7z"
              ></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
