export default function Row({ guess, input }) {
  if (guess.length > 0) {
    return (
      <div className="flex text-center items-center justify-center">
        {guess.map((item, i) => {
          return (
            <div
              key={i}
              className={`border - 2 h-16 w-16 m-1 text-6xl font-bold text-center uppercase text-white ${item.color}`}
            >
              {item.char}
            </div>
          );
        })}
      </div>
    );
  }
  if (input.length > 0) {
    const inputArray = [...input];
    return (
      <div className="flex text-center items-center justify-center">
        {inputArray.map((item, i) => {
          return (
            <div
              key={i}
              className="border-2 h-16 w-16 m-1 text-6xl font-bold text-center uppercase"
            >
              {item}
            </div>
          );
        })}
        {[...Array(5 - inputArray.length)].map((_, i) => {
          return (
            <div
              key={i}
              className="border-2 h-16 w-16 m-1 text-6xl font-bold text-center uppercase"
            ></div>
          );
        })}
      </div>
    );
  }
  return (
    <div className="flex text-center items-center justify-center">
      <div className="border-2 h-16 w-16 m-1 text-6xl font-bold text-center uppercase"></div>
      <div className="border-2 h-16 w-16 m-1 text-6xl font-bold text-center uppercase"></div>
      <div className="border-2 h-16 w-16 m-1 text-6xl font-bold text-center uppercase"></div>
      <div className="border-2 h-16 w-16 m-1 text-6xl font-bold text-center uppercase"></div>
      <div className="border-2 h-16 w-16 m-1 text-6xl font-bold text-center uppercase"></div>
    </div>
  );
}
