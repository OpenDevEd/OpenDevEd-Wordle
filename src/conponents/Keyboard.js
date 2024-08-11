const KEYBOARD_ROWS = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"],
];

export default function Keyboard({ onKeyPress, usedLetters }) {
  return (
    <div className="keyboard">
      {KEYBOARD_ROWS.map((row, i) => (
        <div key={i} className="keyboard-row">
          {row.map((key) => {
            let className = "key";
            if (usedLetters[key]) {
              className += ` ${usedLetters[key]}`;
            }
            return (
              <button
                key={key}
                className={className}
                onClick={() => onKeyPress(key)}
              >
                {key === "Backspace" ? "←" : key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
