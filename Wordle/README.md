# Wordle Game

This is a Wordle-inspired game built using React and Tailwind CSS.

## Installation

To run this project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/MT-jlem/OpenDevEd-Wordle &&
   git checkout  wordle-mustapha-jlem &&
   cd wordle-game
   ```

2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Development Approach

I started by implementing the game logic and creating a basic UI to test and iterate on. My first focus was handling user input, which included capturing keyboard events and processing the input to form a guess.

### Input Validation

To validate the input, I needed to ensure that the guessed words were valid. Initially, I considered setting up a backend service for this purpose, but given the scope of the project, I decided to use a third-party API for word validation instead. This allowed me to quickly implement the feature without the overhead of managing a backend.

### State Management

As the project grew, I needed to share state across different components, particularly for managing the game's progress (e.g., guesses, attempts). To keep things simple and avoid unnecessary complexity, I chose the Context API for state management. While there are dedicated state management libraries available, I felt that using one would be overkill for this project given its scale.

### Feedback and UI Enhancements

After setting up the core functionality, I focused on providing feedback to the user when submitting a word. This included visual cues for correct and incorrect guesses, as well as handling edge cases like invalid words or duplicate submissions. To enhance the user experience, I added animations and UI improvements using Tailwind CSS, making the game more engaging and responsive.
