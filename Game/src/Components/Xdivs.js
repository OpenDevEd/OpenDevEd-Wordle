import React from "react";



// this is to Draw Rows of Each Word



export default function Xdivs({ guess, currentGuess, countGuess, index }) {
  if (guess) {
    return (
      <div className="row past">
        {guess.map((letter, index) => {
          return (
            <div key={index} className={letter.value}>
              {letter.key}
            </div>
          );
        })}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split("");
    return (
      <div className="row current">
        {letters.map((letter, i) => (
          <div key={i} className="filled">
            {" "}
            {letter}{" "}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    );
  }

  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
