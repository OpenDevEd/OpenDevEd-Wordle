# OpenDevEd-Wordle
## How to run the app:
1 -> clone the repo locally
2 -> chnage directoy to wordle
3 -> run command "npm install"
4 -> run command "npm run build"
5 -> run command "npm run preview"
6 -> copy the url in the browser

### Components:
 -> Grid and Row components for the input fields and the previous guesses
 -> Keyboard component to keep track of the used keys
 -> Worlde component containing the whole game UI

### Game logic:

-> the user is shown a grid to input letters
-> when the user hits enter, the typed word gets evaluated letter by letter
	 and it gets colored dependiong on the correctness of the letters
-> the user win the game when he gets all the word letters in the right positions
-> the user loses when he doesn't guess the word in 6 attempts

### States:

-> turns state keeps track of the number of guesses evaluated
-> guesses stores the user guesses to show them to the user
-> currentGuess is used to keep track of the user input
-> isCorrect changes when the user guesses the right word and it's used to show the end 	 game modal
-> usedKeys is responsible to store the state of the keyboard letters and their colors

### Implementation:

-> the Worlde component has a keyup event listener that triggers the handleKeyUp function that decides weither we should delete the last character or start evaluating the guess, as long as the user hasn't pressed Enter yet we keep storing the pressed letters the currentGuess.
	
-> when the user hits Enter we evaluate the currentGuess (if it's equal to the word we flag the isCorrect to true) and we create an array of objects that has a key which is the letter and the color, we add it to the guesses history, and then we use that same formatedGuess array to update the usedKeys accordinally
	
-> all of this happens in the useWordle hook that returns these states which makes them accessible in the Wordle component

-> the wordle component is responsible for the display, it uses the Grid and keyboard components.

-> the Grid component loops over the guesses and uses the Row component to create rows to display the guesses

-> the keyboard Component loops over the usedKeys and display them