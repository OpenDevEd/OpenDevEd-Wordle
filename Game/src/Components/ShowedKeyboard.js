import React from "react";

export default function ShowedKeyboard({ UsedKeys }) {
  let letters = Array.from({ length: 26 }, (_, i) => {
    return { key: String.fromCharCode(65 + i) };
  });

  // keyboard colored component

  console.log(UsedKeys);
  return (
    <div style={{ marginTop: "40px" }} className="showedKeyboard">
      {letters &&
        letters.map((l) => {
          const color = UsedKeys[l.key];
          return (
            <div key={l.key} className={color}>
              {l.key}
            </div>
          );
        })}
    </div>
  );
}
