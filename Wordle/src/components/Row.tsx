const WORD_LENGTH = 5;
export default function Row({ guess, input, isInvalid }) {
  if (guess.length > 0) {
    return (
      <div className="flex text-center items-center justify-center">
        {guess.map((item, i) => {
          return (
            <div
              key={i}
              className={`border  rounded shadow selection:h-16 w-16 m-1 text-6xl font-bold text-center uppercase text-white ${item.color}`}
            >
              {item.char}
            </div>
          );
        })}
      </div>
    );
  }
  if (input.length > 0) {
    const items = [...input, ...Array(WORD_LENGTH - input.length)];

    return (
      <div className="flex text-center items-center justify-center">
        {items.map((item, i) => (
          <div
            key={i}
            className={`shadow border rounded h-16 w-16 m-1 text-6xl font-bold text-center uppercase ${
              isInvalid ? "animate-shake border-red-500" : ""
            } ${item ? "border-black" : ""}`}
          >
            {item || ""}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="flex text-center items-center justify-center">
      {[...Array(WORD_LENGTH)].map((_, i) => (
        <div
          key={i}
          className="shadow border rounded  h-16 w-16 m-1 text-6xl font-bold text-center uppercase"
        ></div>
      ))}
    </div>
  );
}
