## seiWordle

seiWordle is a word-guessing game inspired by Wordle built with TypeScript and Next.js.

## Thought Process

Many decisions were made with the goal of creating a smooth and intuitive user experience, such as capturing user input and storing it in state rather than using a traditional `input` field, and opting for a single page application to achieve a more seamless experience. The initial word matching logic did not account for duplicate same correct letter guesses in words with only one instance of that letter and was later updated to account for this edge case. There were also some issues with playing multiple audio instances at the same time due the initial implementation of the audio system as well as audio files not being preloaded, which was later resolved by using the Audio API to create a new audio instance for each sound effect and using the `preload` attribute to ensure the audio files are loaded before they are played.

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

5. Start the development server

```bash
npm run dev
```
