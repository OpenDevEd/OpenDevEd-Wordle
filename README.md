# Word Guessing Game

## Overview
This project is a simple word-guessing game built using React. The game allows users to guess a random word within six attempts. The game provides feedback on each guess, indicating whether the letters are correct and in the correct position.

## Features
- Random word generation for each game.
- Six attempts to guess the word.
- Feedback on each guess indicating correct letters and their positions.
- Win/Lose state management.

## Approach

### State Management
The game uses React's `useState` hook to manage the following states:
- `target`: The randomly selected word that the user needs to guess.
- `words`: An array to store the user's guesses.
- `results`: An array to store the results of each guess.
- `index`: The current attempt index.
- `win`: The game state indicating whether the game is in progress, won, or lost.

### Random Word Generation
The `getRandomWord` function is used to select a random word from a predefined list. The word is converted to lowercase to ensure case insensitivity.

### User Interaction
Users can input their guesses, and the game provides immediate feedback on each guess. The feedback includes:
- Correct letters in the correct position.
- Correct letters in the wrong position.
- Incorrect letters.

### Win/Lose Conditions
The game checks if the user's guess matches the target word. If the user guesses the word correctly within six attempts, the game state is set to 'win'. If the user exhausts all attempts without guessing the word, the game state is set to 'lose'.

## Decisions Made

### State Initialization
The initial states for `target`, `words`, and `results` are set using functions to ensure that the random word is generated only once and the arrays are properly initialized.

### Feedback Mechanism
The feedback mechanism is designed to provide clear and immediate feedback to the user. This helps in improving the user experience and makes the game more engaging.

## How to Run the Project

To get the project up and running, follow these steps:

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone git@github.com:oussamakrich/OpenDevEd-Wordle.git
```


### 2. Navigate to the project directory:

```bash
cd OpenDevEd-Wordle
```

### 3. Checkout the Desired Branch

Switch to the branch you want to work on:

```bash
git checkout wordle-oussama
```

### 4. Install Dependencies

Install the project dependencies using npm:

```bash
npm install
```

### 5. Run the Development Server

Start the development server:

```bash
npm run dev
```

### You can access it by navigating to http://localhost:3000 in your web browser.
