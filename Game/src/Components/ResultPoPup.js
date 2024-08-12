import React from "react";

export default function ResultPoPup({ correctGuess, duplicate, countGuess, word }) {
  return (
    <div className="modal">
      {correctGuess && (
        <div>
          <h1>You Win!</h1>
          <p className="word">{word}</p>
          <p>You found the solution in {countGuess} guesses :)</p>
          <h1>Refresh And play Again Let's Go</h1>
        </div>
      )}
      {!correctGuess && (
        <div>
          <h1>Nevermind</h1>
          <p>the word was : </p>
          <p className="word">{word}</p>
          <p>Better luck next time :)</p>
          <h1>Refresh And play Again Let's Go</h1>
        </div>
      )}
    </div>
  );
}
