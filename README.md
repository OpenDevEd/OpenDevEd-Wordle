# Wordle Clone

This project is a clone of the popular word-guessing game Wordle, built using React, TypeScript, and Vite. The application allows users to guess a five-letter word within six attempts.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Approach and Decisions](#approach-and-decisions)

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/wordle-clone.git
    cd wordle-clone
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm run dev
    ```

## Usage

Open your browser and navigate to `http://localhost:5173` to start playing the game.

## Features

- **Word Guessing**: Users can guess a five-letter word within six attempts.
- **Keyboard Input**: Users can type their guesses using the keyboard.
- **Win/Lose Modal**: Displays a modal when the user wins or loses the game.
- **Remaining Attempts**: Shows the number of remaining attempts.
- **Animating Wrong Row**: include Animtion when user type a non existing word


## Approach and Decisions

### State Management

The application uses React's `useState` and `useEffect` hooks for state management. Key states include:

- `focusedRow`: Tracks the current row being edited.
- `letters`: Stores the current letters typed by the user.
- `words`: An array of words guessed by the user.
- `submitted`: A boolean indicating if the current guess has been submitted.
- `remainingAttempts`: Tracks the number of remaining attempts.
- `win` and `lose`: Booleans indicating the game status.

### Event Handling

- **Keyboard Events**: The `handleKeyDown` function handles keyboard events for typing letters, submitting guesses, and deleting letters.
- **Submit Button**: The `SubmitButton` component triggers the `submit` function to validate and submit the user's guess.

### Random Word Selection

The solution word is randomly selected from a predefined list of words in [`src/data/words.ts`](src/data/words.ts)

### Component Structure

- **Header**: Displays the game logo.
- **GameInfo**: Shows the number of remaining attempts.
- **Row**: Represents each row of the game where the user types their guess.
- **SubmitButton**: A button to submit the current guess.
- **EndGameModal**: Displays a modal when the game ends, indicating whether the user won or lost.
- **LetterBox**: Displays a single letter box. 

### Styling

The project uses Tailwind CSS for styling
