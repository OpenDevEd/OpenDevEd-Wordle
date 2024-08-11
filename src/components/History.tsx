import { Box, Heading } from "@chakra-ui/react";
import Word from "./Word";

interface HistoryData {
  words: string[];
}

const History = ({ words }: HistoryData) => {
  if (!words.length)
    return (
      <Heading marginY={4} fontSize={{sm: 16, md: 22}} color="#6FA76B">
        Begin by making your first guess!
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
