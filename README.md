# Wordle Clone

A React-based clone of the popular word guessing game, Wordle. This implementation features a clean UI, keyboard support, and an end-game popup.

## Features

- Random word selection from a JSON file
- Interactive on-screen keyboard
- Color-coded feedback for guesses
- Responsive design
- End-game popup with play again option
- Keyboard support for mobile users
- Can guess only valid words
- screen mode feature

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```
git clone https://github.com/megrisse/OpenDevEd-Wordle.git
```
2. Navigate to the project directory:
```
cd OpenDevEd-Wordle
```
3. swith to my branch
```
git checkout wordle-megrisse
```
4. Install dependencies:
```
npm install
```
5. Start the development server:
```
npm run start
```
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to Play

1. The game selects a random five-letter word.
2. Type your guess using the on-screen keyboard or your physical keyboard.
3. Press 'Enter' to submit your guess.
4. The tiles will change color to show how close your guess was:
- Green: The letter is correct and in the right position.
- Yellow: The letter is in the word but in the wrong position.
- Gray: The letter is not in the word.
5. Keep guessing until you solve the word or run out of attempts.
6. After the game ends, you can click 'Play Again' to start a new game.

## Project Structure

The main game logic is contained in the `App` component, with additional components for:
- `Line`: Renders a single guess line
- `Keyboard`: Renders the on-screen keyboard
- `EndGamePopup`: Displays the end-game message and play again option
- `DarkModeToggle`: Switch the screen colors

## Implementation Details

### State Management
- Uses React's `useState` and `useEffect` hooks for state management.
- Tracks the solution, guesses, current guess, game over state, and used letters.

### Game Logic
- Fetches random words from a JSON file (`/words.json`).
- Validates guesses and updates the game state accordingly.
- Provides feedback on correct letters and positions.
- Validates only the valid guesses.

### User Interface
- Renders a game board with guess lines.
- Provides an on-screen keyboard that updates based on guessed letters.
- Displays an animated popup at the end of the game.
- Shake the board and the keyboard in invalid guess.
- Provides an screen-mode button.

## Customization

- To change the word list, modify the `words.json` file (ensure it's in the `public` directory).
- Adjust the `WORD_LENGTH` and `MAX_GUESSES` constants in `App.js` to change game parameters.
- Modify the CSS (assumed to be in `App.css`) to change the game's appearance.