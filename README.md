# OpenDevEd-Wordle

This project is a Wordle clone built using React and TypeScript. It implements the core gameplay mechanics of the popular word-guessing game, featuring a responsive design and keyboard input support.

## Approach

The game is built using React hooks for state management and side effects. Here's an overview of the main components and logic:

1. **State Management**:
   - `TargetWord`: The word to be guessed, randomly selected at the start of the game.
   - `Tries`: Tracks the number of attempts made by the player.
   - `words`: A 2D array storing the player's guesses.
   - `results`: A 2D array storing the feedback for each guess.

2. **Game Logic**:
   - `addLetter`: Adds a letter to the current guess.
   - `deleteLetter`: Removes the last letter from the current guess.
   - `handleKeyPress`: Manages keyboard input for letter entry, deletion, and guess submission.
   - `checkWord`: Compares the guessed word with the target word and provides feedback.

3. **User Interface**:
   - `Board`: Displays the guessed words and their feedback.
   - `Keyboard`: On-screen keyboard for input on touch devices.

4. **Input Handling**:
   - The game supports both physical keyboard input and on-screen keyboard interactions.

5. **Responsive Design**:
   - The UI is designed to be responsive and work well on both desktop and mobile devices.

## How to Run the App

To run this app locally, follow these steps:

1. Clone the repository to your local machine.

```bash
git clone https://github.com/RED-MEGA/OpenDevEd-Wordle.git
```

2. Navigate to the project directory in your terminal.

```bash
cd OpenDevEd-Wordle
```
3. checkout to branch

```bash
git checkout wordle-radouane
```

4. Install the dependencies:

```bash
npm install
```

5. run the project:

```bash
npm run dev
```
