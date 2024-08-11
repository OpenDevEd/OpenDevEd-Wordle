# Wordle Game

This is a Wordle-inspired game built using React and Tailwind CSS.

## Features

- **Word Fetching:** The game fetches a random word from an external API on load.
- **Input Validation:** The game checks if the guessed word exists using an external API.
- **Feedback Mechanism:** Feedback is provided to the user based on their guesses:
  - Correct characters in the correct position are highlighted in green.
  - Correct characters in the wrong position are highlighted in yellow.
  - Incorrect characters are highlighted in gray.
- **Animations:** Visual feedback with animations is provided when the user:
  - Inputs a word that is shorter than the target word.
  - Inputs a word that has already been guessed.
  - Inputs an invalid word.
- **End Game Modal:** A modal appears when the user either wins the game by guessing the word correctly or loses by using all attempts.
- **Reset Game:** The game can be reset after a win or loss, allowing the user to play again with a new word.

## Approach

### Code Structure

The project is structured as follows:

- **`App.tsx`**: The main component that sets up the game, handles keyboard input, and manages the modal for game over.
- **`Grid.tsx`**: A component that displays the grid of guesses.
- **`Row.tsx`**: A component that displays a single row of guessed letters or the current input.
- **`Modal.tsx`**: A component that displays a modal when the game is over, indicating whether the user has won or lost.
- **`useKeyboard.tsx`**: A custom hook that handles keyboard input and manages the logic for submitting words.
- **`GameContext.tsx`**: A context provider that manages the state of the game, including guesses, input, attempts, and more.

### Key Decisions

1. **State Management with Context API**:

   - The Context API was chosen to manage game state because it simplifies passing data across the component tree, especially when multiple components need access to the same state (e.g., guesses, input, attempts).

2. **Custom Hook for Keyboard Input**:

   - The keyboard input is handled using a custom hook (`useKeyboard`) to keep the logic modular and reusable. This hook manages input validation, word submission, and provides feedback to the user.

3. **Tailwind CSS for Styling**:

   - Tailwind CSS was used for styling due to its utility-first approach, which makes it easy to apply styles directly in JSX. Custom animations were added by extending Tailwind's configuration.

4. **Visual Feedback and Animations**:
   - Feedback for invalid input (e.g., word too short, word already guessed) is provided through animations. This enhances the user experience by making the game more interactive and engaging.

### Additional Features Implemented

- **Shake Animation for Invalid Input**:

  - A custom shake animation is triggered when the user submits an invalid word (e.g., too short, already guessed). This is implemented using a combination of Tailwind CSS and custom keyframes.

- **Game Reset Mechanism**:
  - After a game is won or lost, the modal provides a button to reset the game. This resets the game state and fetches a new word for the user to guess.

## Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/wordle-game.git
   cd wordle-game
   ```
