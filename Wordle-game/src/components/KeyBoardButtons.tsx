import useGameStore from "../store/store";

const KeyBoardButtons = () => {
  const {
    getAllGuesses,
    getTrueGuesses,
    getWrongGuesses
  } = useGameStore();
  const letters = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

  return (
    <div className="py-3">
      {letters.map((rows) => (
        <div className="flex flex-row justify-center">
          {rows.split('').map((letter) => {
            const bgColor = getTrueGuesses().includes(letter) 
              ? 'bg-green-400'
              : getWrongGuesses().includes(letter)
              ? 'bg-yellow-400'
              : getAllGuesses().includes(letter)
              ? 'bg-gray-400'
              : 'bg-gray-200'
            return (
            <div className={`letter-class ${bgColor}`}>
              {letter}
            </div>)
          })}
        </div>
      ))}
    </div>
  );
};

export default KeyBoardButtons;
