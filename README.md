# OpenDevEd-Wordle

A simple clone of the popular Wordle game built with React.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/lahbibsemlali/OpenDevEd-Wordle.git
   ```
1. Navigate to project directory
   ```sh
   cd OpenDevEd-Wordle
   ```
2. run with docker compose
   ```sh
   docker compose up --build -d
   ```
3. go to browser on http://localhost:3000

## Aproach

I began by coding the GameBoard, which displays the grid of letter tiles, handling both row and column structure.

I downloaded a JSON file containing a list of 5-letter words from the internet.

The game logic involves choosing a random word from this file and using React's useState for state management. This tracks the current guess, guess history, game status, and other relevant data.

I focused on making the UI simple and readable for a straightforward and enjoyable user experience.

For additional functionality, I used react-modal to display popups when the game ends and react-hot-toast to show error messages.
Features

## Features

- [x] Added Night Mode
- [x] Implemented a button to display instructions for playing the game
- [x] Displayed an error when the word is not in the list
- [x] Informed the user if the word has already been entered
