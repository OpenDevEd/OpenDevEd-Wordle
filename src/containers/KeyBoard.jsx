
const KeyBoardRow = ({keys, handleKeyPress, isSecondRow}) => {
  return (
    <div className={`w-full mb-2 flex items-center justify-around ${isSecondRow ? 'px-8' : ''}`}>
        {keys.map((key) => (
              <button 
                key={key} 
                onClick={() => handleKeyPress(key)}
                className="bg-[#818384] text-white h-12 rounded-lg flex flex-1 justify-center 
                items-center mr-1 last:mr-0 font-bold uppercase cursor-pointer select-none"
              >
                {key}
              </button>
        ))}
      </div>
  )
}

const KeyBoard = ({handleKeyPress}) => {

  return (
    <div className=" w-2/3 flex flex-col">
      <KeyBoardRow keys={["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]} handleKeyPress={handleKeyPress} />

      <KeyBoardRow keys={["a", "s", "d", "f", "g", "h", "j", "k", "l"]} 
      handleKeyPress={handleKeyPress} isSecondRow/>
      
      <KeyBoardRow keys={["enter", "z", "x", "c", "v", "b", "n", "m", "⌫"]} handleKeyPress={handleKeyPress} />
      
    </div>
  )
}

export default KeyBoard