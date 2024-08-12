# Word Guessing Game

## Description

A word guessing game built with React, providing visual feedback for correct guesses to create an engaging and interactive experience.

## Features

- **Interactive UI:** Clean and responsive interface for an enjoyable user experience.
- **Visual Feedback:** Real-time feedback for each guess.
- **Customizable Word List:** Easily modify the word list.

## Approach and Decisions

### Approach

1. **React for Frontend:** 
   - Leveraged React’s component-based architecture for a modular and maintainable codebase. Used React’s built-in state management to handle dynamic interactions required for the game.

2. **Animation:** 
   - Added CSS animations for letter movements and a flip effect after each key entry to improve visual appeal and user experience.

3. **Visual Feedback Mechanism:** 
   - Focused on implementing real-time visual feedback to enhance user engagement by providing immediate responses to guesses.

4. **Docker and Docker Compose:** 
   - Used Docker to containerize the application, eliminating the need to install Node.js or other dependencies locally. Docker Compose was employed to streamline the configuration and execution of the project.

5. **Makefile for Automation:** 
   - Simplified the development process with a Makefile. The `make` command runs the project, while `make down` stops it. Additional commands are available for cleaning up containers and other tasks.

### Decisions Made

1. **State Management:**
   - Opted for React’s built-in state management for simplicity and ease of integration.

2. **React Principles:**
   - Utilized React hooks like `useState` and `useEffect` for state and lifecycle management.

3. **Game Logic:**
   - Designed the logic to fetch a random word, compare guessed words, and generate an array of objects representing each character's status (correct, wrong place, or incorrect). This logic supports dynamic UI updates and keyboard color coding.

4. **UI/UX Design:**
   - Focused on simplicity and smooth visuals, avoiding excessive colors to maintain a clean look.

### Additional Features Implemented

1. **Customizable Word List:** 
   - Allows for easy modification of the word list, adapting the game to different themes or difficulty levels.

2. **Error Handling and Validation:**
   - Enforced rules such as five-letter words, no duplicate letters, and a limited number of attempts.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository and switch to the branch:**

    ```bash
    git clone git@github.com:W1ESD/OpenDevEd-Wordle.git
    cd OpenDevEd-Wordle
    git checkout wordle-Wissam_Essaiydy
    ```

2. **Build and start the containers:**

    ```bash
    make
    ```

   This will build the Docker containers and start the development server.

3. **Stopping the containers:**

    To stop and remove the containers, run:

    ```bash
    make down
    ```
