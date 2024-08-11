# Wordle Project


## How to Run

This project uses the Node Package Manager (**npm**). Make sure you have that installed, clone the repo, run the command `npm install` to install the required dependencies, start the project by running: `npm run dev`. A local URL will appear on your terminal; use it to access the app and have fun.

## Approach

I've decided to use the Chakra UI library as it will make my job easier by not having to implement things like modals and styled input fields from scratch. I've used React Context to manage the game state. The game consists of four main components:

- WordInput: responsible for adding guesses and checking them
- Keyboard: responsible for assisting the user in the next guesses
- History: meant to display the previous guesses of the player
- GameResult: displays whether the player has won the game or not

## Responsiveness

This game is optimized for a reponsive experience only in destop and tablets
