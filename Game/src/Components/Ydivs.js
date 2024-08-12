import React from "react";
import Xdivs from "./Xdivs";

// 

export default function Ydivs({ currentGuess, GuessesArray, countGuess }) {
  return (
    <div>
      {GuessesArray.map((guess, index) => {
        if (index === countGuess)
          return <Xdivs key={index} currentGuess={currentGuess} />;
        return <Xdivs key={index} guess={guess} />;
      })}
    </div>
  );
}
