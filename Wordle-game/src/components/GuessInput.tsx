
interface Props {
  inputKey: string;
  word: string;
  guess: string;
  isGuessed: Boolean;
}

const GuessInput = ({inputKey, word, guess, isGuessed} : Props) => {
  return (
    <div className="grid grid-cols-5 gap-1 mb-2" data-key={inputKey}>
      {new Array(5).fill(0).map((_, i) => {
        const bgColor = !isGuessed 
        ? 'bg-black' 
        : guess[i] === word[i] 
        ? 'bg-green-400' 
        : word.includes(guess[i]) 
        ? 'bg-yellow-400' 
        : 'bg-black'
        return (
        <div key={i} className={`word-guess-input ${bgColor}`}>
          {guess[i]}
        </div>)
      })}
    </div>
  )
}

export default GuessInput