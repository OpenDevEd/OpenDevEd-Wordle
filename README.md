## seiWordle

seiWordle is a word-guessing game inspired by Wordle built with TypeScript and Next.js.

## Thought Process

State management was handled using React's built-in `useState`, `useEffect`, and `useMemo` hooks spread across `useGameState` and `useGridState` hooks, and the most important state variables are:

* `randomWord` is a state that is initialized to a random word with a `useEffect`,
* `attempts` is an array of strings that contains the user's previous attempts at guessing the random word, the length of which directly translates to the number of remaining attempts,
* `currentString` is a string that contains the user's current input, appended to the `attempts` array when the user presses the enter key,
* `attemptColors` is 2D array of strings that contains the color of each letter in each attempt, set by a `useMemo` hook that calculates the colors at the same time as the `attempts` array is updated.
* `useAudio` is a hook that provides a function to play sound effects, and is used to play sound effects on user interaction. The `useAudio` hook returns an object with the following type:
```typescript
type AudioContextReturn = {
	playSound: (
		sound: keyof typeof SFX,
		volume?: number,
		skipAhead?: number,
	) => void;
};
```
* `resetGame` is a function stored in a state variable set by a `useMemo` hook that resets the game state to its initial state. Since resetting the game requires state from `useGridState`, and the grid is a child of a component that also needs to reset the game, the `setResetGame` function is passed down to to `<Grid />` as a prop, allowing the app to reset the game's state on the end game state UI.

The latter could've been improved upon by using `useContext` or a state management library like Redux, but this was deemed unnecessary especially given the small size of the app.

Many decisions were made with the goal of creating a smooth and intuitive user experience, such as capturing user input and storing it in state rather than using a traditional `input` field, and opting for a single page application to achieve a more seamless experience. The initial word matching logic did not account for duplicate same correct letter guesses in words with only one instance of that letter and was later updated to account for this edge case. There were also some issues with playing multiple audio instances at the same time due the initial implementation of the audio system as well as audio files not being preloaded, which was later resolved by using the Audio API to create a new audio instance for each sound effect and using the `preload` attribute to ensure the audio files are loaded before they are played.

Much like the original Wordle, seiWordle uses two dictionaries:
* a large set of only valid words that will never be used as the target word, and
* a smaller set of common words.

The valid words dictionary is used to check the validity of the user's guess, while the common words dictionary is used to generate the target random word.

## Features

### User Interface

* Intuitive user interface with pixel perfect spacing.
* Smooth animations to elevate interactivity and feedback.

### User Experience

* A clear display of correctly positioned letters making it easier to focus on the task at hand.
* Color coding for right letters in their correct positions, correct letters in wrong positions and incorrect letters.
* The ability to start a new round without taking your hands off the keyboard.

### Gameplay

* A variety of sound effects for enhanced immersion.
* The ability to request hints on a letter by letter basis.

### Theming

* Automatic light & dark theme switching based on system preferences.
* Harmonious color palette with a focus on contrast and readability.

## Technologies

* TypeScript
* Next.js 14
* React 18
* Framer Motion
* Tailwind CSS

## Installation

1. Clone the repository

```bash
git clone https://github.com/sickerine/wordle-sickerine.git
```

2. Navigate to the project directory

```bash
cd wordle-sickerine
```

3. Switch to the wordle-sickerine branch

```bash
git checkout wordle-sickerine
```

4. Install dependencies

```bash
npm install
```

5. Build the app

```bash
npm run build
```

6. Start a production server

```bash
npm run start
```