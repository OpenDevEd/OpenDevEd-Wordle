import React from "react";
import LettersList from "./LettersList";

const PastGuesses = React.memo(({ pastGuesses }) => {
    return (
      <div>
        <ul className="space-y-2">
          {pastGuesses.map((word, index) => (
            <li key={index} className=" bg-gray-900">
              <LettersList word={word} />
            </li>
          ))}
        </ul>
      </div>
    );
  });
  

export default PastGuesses;
