# OpenDevEd-Wordle
## How to run the app:
Clone the repository locally.
Change the directory to wordle.
Run the command npm install.
Run the command npm run build.
Run the command npm run preview.
Copy the URL displayed in the terminal and open it in your browser.

### Components:

Grid and Row Components: Used for displaying the input fields and the previous guesses.
Keyboard Component: Keeps track of the used keys.
Wordle Component: Contains the entire game UI.

### Game logic:

The user is shown a grid to input letters.
When the user presses Enter, the typed word is evaluated letter by letter and colored depending on the correctness of the letters.
The user wins the game by correctly guessing all the letters in the word in the right positions.
The user loses if they fail to guess the word in 6 attempts.

### States:

turns: Keeps track of the number of guesses evaluated.
guesses: Stores the user's guesses to display them.
currentGuess: Tracks the user's current input.
isCorrect: Changes to true when the user guesses the correct word, and is used to show the end-game modal.
usedKeys: Stores the state of the keyboard letters and their corresponding colors.

### Implementation:

The Wordle component has a keyup event listener that triggers the handleKeyUp function. This function decides whether to delete the last character or start evaluating the guess. As long as the user hasn't pressed Enter, we keep storing the pressed letters in currentGuess.

When the user hits Enter, we evaluate the currentGuess. If it matches the correct word, we set isCorrect to true. We then create an array of objects containing each letter and its color, add it to the guess history, and use the same formatted guess array to update the usedKeys accordingly.

All of this logic is handled in the useWordle hook, which returns these states, making them accessible in the Wordle component.

The Wordle component is responsible for the display, utilizing the Grid and Keyboard components.

The Grid component loops over the guesses and uses the Row component to create rows for displaying the guesses.

The Keyboard component loops over the usedKeys and displays them.