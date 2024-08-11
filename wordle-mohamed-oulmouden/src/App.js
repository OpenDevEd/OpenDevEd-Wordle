import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WordleGame from "./components/WordleGame/WordleGame.js";
import GameGuide from "./components/GameGuide/GameGuide.js";
import Daily from "./components/WordleGame/Daily/Daily.js";
import Unlimited from "./components/WordleGame/Unlimited/Unlimited.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/games" element={<WordleGame />} />
          <Route path="/" element={<WordleGame />} />
          <Route path="/games/daily" element={<Daily />} />
          <Route path="/games/unlimited" element={<Unlimited />} />
          <Route path="/guide" element={<GameGuide />} />
          <Route path="/404" element={<h1>Not Found</h1>} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        style={{ top: "70px" }}
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
}

export default App;
