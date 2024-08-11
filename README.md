# OpenDevEd-Wordle

## How to run the app:

Clone the repository locally.</br>
Switch branch to wordle-youness-abtaouri.</br>
Change the directory to wordle.</br>
Run the command npm install.</br>
Run the command npm run build.</br>
Run the command npm run preview.</br>
Copy the URL displayed in the terminal and open it in your browser.</br>

## Components:

Grid and Row Components: Used for displaying the input fields and the previous guesses.</br>
Keyboard Component: Keeps track of the used keys.</br>
Wordle Component: Contains the entire game UI.</br>

## Game logic:

The user is shown a grid to input letters.</br>
When the user presses Enter, the typed word is evaluated letter by letter and colored depending on the correctness of the letters.</br>
The user wins the game by correctly guessing all the letters in the word in the right positions.</br>
The user loses if they fail to guess the word in 6 attempts.</br>

## States:

turns: Keeps track of the number of guesses evaluated.</br>
guesses: Stores the user's guesses to display them.</br>
currentGuess: Tracks the user's current input.</br>
isCorrect: Changes to true when the user guesses the correct word, and is used to show the end-game modal.</br>
usedKeys: Stores the state of the keyboard letters and their corresponding colors.</br>

## Implementation:

The Wordle component has a keyup event listener that triggers the handleKeyUp function. This function decides whether to delete the last character or start evaluating the guess. As long as the user hasn't pressed Enter, we keep storing the pressed letters in currentGuess.</br></br>
When the user hits Enter, we evaluate the currentGuess. If it matches the correct word, we set isCorrect to true. We then create an array of objects containing each letter and its color, add it to the guess history, and use the same formatted guess array to update the usedKeys accordingly.</br></br>
All of this logic is handled in the useWordle hook, which returns these states, making them accessible in the Wordle component.</br></br>
The Wordle component is responsible for the display, utilizing the Grid and Keyboard components.</br></br>
The Grid component loops over the guesses and uses the Row component to create rows for displaying the guesses.</br></br>
The Keyboard component loops over the usedKeys and displays them.
