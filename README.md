## Running the Project Locally

To get the project up and running on your local machine, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/iqabbal/wordle-IlyasQabbal.git
```

### 2. Navigate to the Project Directory

Change into the project directory:

```bash
cd wordle-IlyasQabbal
```

### 3. Switch to The Branch

```bash
git checkout wordle-IlyasQabbal
```

### 4. Install Dependencies

Install the necessary dependencies for the project:

```bash
npm install
```

### 5. Start the Development Server

Run the development server to start the project:

```bash
npm start
```

The application should now be running on [http://localhost:3000](http://localhost:3000). Open this URL in your web browser to view the app.

### Note:
In the `context.jsx` file, the constant `URL = 'http://localhost:3000/';` is used to define the base URL of the application. If your development server runs on a different port or if you deploy the application to a live server, you will need to update this URL accordingly to match your server's address.

## Wordle Game

**Wordle** is a popular word guessing game where players have six attempts to guess a hidden five-letter word. With each guess, players receive feedback on their guesses in the form of color-coded tiles. Green indicates the correct letter in the correct position, yellow shows the correct letter in the wrong position, and gray means the letter is not in the word. The goal is to guess the word within the allotted attempts.

## Features Implemented

In this clone of Wordle, several features have been implemented to enhance the gameplay experience:

- **Random Word Selection:** The game selects a random five-letter word from a JSON file, ensuring each playthrough offers a new challenge.
- **Color-Coded Feedback:** After each guess, tiles change color to provide feedback on the guessed letters, helping players adjust their strategy.
- **Responsive Design:** The game is designed to work seamlessly across different devices and screen sizes, offering a consistent experience whether on desktop or mobile.
- **End-Game Popup:** At the end of the game, a popup displays the result and provides an option to play again, allowing players to quickly start a new game.
- **Keyboard Support:** Players can use their physical keyboard to make guesses, enhancing the ease of play.
- **Valid Word Guessing:** Only valid five-letter words are accepted as guesses, ensuring the game remains challenging and fair.

### Bonus Features

- **Settings Menu:** Players can change the theme of the game through a settings menu, customizing their gameplay environment.
- **Game Statistics:** A state feature displays key statistics, including win/loss totals, total games played, and win rate, giving players insight into their performance.
- **Hints:** Offers clues that help players get closer to the correct answer, guiding them with targeted suggestions to refine their guesses.
- **Share Feature:** When a game ends, players can generate a shareable link to challenge their friends.