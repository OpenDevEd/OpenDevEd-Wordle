import React from "react";
import LettersList from "./LettersList";


// by default this component rendred when any state changes in the GameArea componenet Example : 'when the user enter some chacter in the input field ,
// with memo() we avoid it and this componenent will rerendred just if Prop(pastGuesses) is changed 
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
