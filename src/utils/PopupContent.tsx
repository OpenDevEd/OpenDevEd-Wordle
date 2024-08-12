


// Component that renders the content of the popup
const PopupContent = ({ onClose }: { onClose: () => void }) => (
    <div className="flex flex-col items-center">
      {/* Message indicating the user has guessed the correct word */}
      <p>You guessed the correct word!</p>
      {/* Button to close the popup and reset the game */}
      <button
        onClick={onClose} // Function to be called when the button is clicked
        className="mt-2 bg-correct w-[10em] h-[40px] rounded-xl"
      >
        Play Again
      </button>
    </div>
  );
  
  export default PopupContent;
  