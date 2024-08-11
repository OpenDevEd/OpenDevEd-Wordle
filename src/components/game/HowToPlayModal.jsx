
const HowToPlayModal = ({closeHowToPlayModal}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-[#121213] w-1/2 p-6 rounded-md mx-4">
          <h2 className="text-xl font-bold mb-4">How to Play</h2>
          <p className="text-white/60">
            Guess the Wordle in 6 tries. Each guess must be a valid 5-letter word.
            The color of the tiles will change to show how close your guess was to the word.
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-correct mr-2 rounded-full"></div>
              <span>Correct: Correct letter and correct position</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-nearly mr-2 rounded-full"></div>
              <span>Nearly: Correct letter but in the wrong place</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-inCorrect mr-2 rounded-full"></div>
              <span>Incorrect: Letter not in the word</span>
            </div>
          </div>
          <button
            className="mt-4 px-4 py-2 bg-white text-black rounded-md"
            onClick={closeHowToPlayModal}
          >
            Close
          </button>
        </div>
      </div>
  )
}

export default HowToPlayModal