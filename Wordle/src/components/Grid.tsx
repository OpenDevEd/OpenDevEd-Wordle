import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import Row from "./Row";

const MAX_ATTEMPTS = 6;
export default function Grid() {
  const { input, guesses, attempts } = useContext(GameContext);

  return (
    <div className="flex flex-col">
      {guesses.map((guess, i) => {
        if (i === MAX_ATTEMPTS - attempts)
          return <Row key={i} input={input} guess={[]} />;
        return <Row key={i} guess={guess} input={[]} />;
      })}
    </div>
  );
}
