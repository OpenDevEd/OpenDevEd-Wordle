import { Divider, HStack, VStack, Button } from "@chakra-ui/react";
import { useState } from "react";
import "./index.css";

import Logo from "./components/Logo";
import History from "./components/History";
import WordInput from "./components/WordInput";
import { Board, BoardContext } from "./contexts/boardContext";
import { getRandomWord } from "./utils/getRandomWord";
import Keyboard from "./components/Keyboard";
import { RiRestartLine } from "react-icons/ri";
import GameResult from "./components/GameResult";
import { InputContext, InputField } from "./contexts/inputContext";
import RestartGameAlert from "./components/RestartGame";

function App() {
  const [input, setInputField] = useState<InputField>({ value: "", error: "" });
  const [board, setBoard] = useState<Board>({
    word: getRandomWord(),
    guesses: [],
    ongoing: true,
    gameResult: [],
  });
  const [restartModalOpen, setModalStatus] = useState(false);

  const restartGame = () => {
    setInputField({
      error: "",
      value: "",
    });
    setBoard({
      word: getRandomWord(),
      guesses: [],
      ongoing: true,
      gameResult: [],
    });
  };

  return (
    <>
      <Logo />
      <HStack justifyContent="center" bg="#eee" paddingY={8}>
        <BoardContext.Provider value={{ board, setBoard }}>
          <InputContext.Provider value={{ input, setInputField }}>
            <RestartGameAlert
              isOpen={restartModalOpen}
              onRestart={restartGame}
              onClose={() => setModalStatus(false)}
            />
            <GameResult onRestartGame={restartGame} />
            <VStack marginTop={2}>
              <History words={board.guesses} />
              <Divider />
              <WordInput
                guesses={board.guesses}
                onWordInsert={(value) =>
                  setBoard({ ...board, guesses: [...board.guesses, value] })
                }
              />
              {board.guesses.length < 5 && <Keyboard />}
              <Button
                leftIcon={<RiRestartLine />}
                position="absolute"
                top="0"
                right="5"
                fontSize={{sm: 13, md: 16}}
                bg="#6FA76B"
                color="#fff"
                _hover={{ backgroundColor: "#C9B363" }}
                onClick={() =>
                  (board.guesses.length === 5)
                    ? restartGame()
                    : setModalStatus(true)
                }
              >
                Restart game
              </Button>
            </VStack>
          </InputContext.Provider>
        </BoardContext.Provider>
      </HStack>
    </>
  );
}

export default App;
