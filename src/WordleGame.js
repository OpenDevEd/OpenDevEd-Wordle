import { useState, useEffect } from "react";
import GameArea from "./Components/GameArea";
import { ChakraProvider, DarkMode, extendTheme } from "@chakra-ui/react";
import Winning from "./Components/Winning";
import Losing from "./Components/Losing";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function WordleGame() {

  return (
    <div style={{backgroundImage : `url(https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}} className={`min-h-screen flex flex-1 justify-center items-center`}>
      <ChakraProvider>
        <BrowserRouter> 
          {/* just to make it easier to navigate between all the pages without playing the Game (for tester) */}
          <Routes>
            <Route index element={<GameArea />} />
            <Route path="winning" element={<Winning />} />
            <Route path="losing" element={<Losing />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}
