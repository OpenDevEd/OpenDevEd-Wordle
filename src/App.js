import GameArea from "./Components/GameArea";
import { ChakraProvider} from "@chakra-ui/react";
import Winning from "./Components/Winning";
import Losing from "./Components/Losing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

export default function App() {

  return (
    <div style={{backgroundImage : `url(https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}} className={`min-h-screen flex flex-1 justify-center items-center`}>
      <ChakraProvider>
        <BrowserRouter> 
          {/* just to make it easier to navigate between all the pages without playing the Game (for tester) */}
          <Routes>
            <Route index element={<Home />} />
            <Route path="game" element={<GameArea />} />
            <Route path="playing" element={<Winning />} />
            <Route path="winning" element={<Winning />} />
            <Route path="losing" element={<Losing />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}
