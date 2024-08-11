import { Box, Heading } from "@chakra-ui/react";
import Word from "./Word";

interface HistoryData {
  words: string[];
}

const History = ({ words }: HistoryData) => {
  if (!words.length)
    return (
      <Heading marginY={4} fontSize="22px" color="#6FA76B">
        You still haven't made any guesses
      </Heading>
    );
  return (
    <Box>
      {words.map((word, index) => (
        <Word
          key={index}
          active={index + 1 === words.length}
          display={word}
          attempt={index}
        />
      ))}
    </Box>
  );
};

export default History;
