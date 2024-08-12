# SSWordle

**SSWordle** is a word-guessing game inspired by the original **Wordle**, built using TypeScript.

## Features:

### User Experience:

- Visual Cues to guide the new players through the game.
- Rewarding visuals for wining the game.
- Support for mobile devices.

### User Interface:

- Simple and convenient user interface allowing the user to interact with the game without any disturbance
- Virtual Keyboard that displays incorrect letters also prevents the user from tapping them again.
- Dark background with the legendary wordle logos spread throughout.
- Easy on the eyes and provides clear distinction between game elements and the background elements.
- Ability to restart the game without the need to refresh the page.

### Game:

- Sound effects for any event that happens in the game, from tapping the keyboard to either winning or losing the game.
- Hints button providing single letter hints for users who require a bit of assistance in achieving a win.
- Clear definition of incorrect, correct and misplaced characters inside the grid.

## Game Approach

Since this is my first time working with react and using typescript i had a bit of a difficulty with it's features since i was accustomed to using **Vanilla js** to preform operations inside the components. Please be wary that this attempt may include some bugs with the correct guesses since i've implemented two different apis to handle dictionary checks and word generation, Thank you!

- I've implemented a simple grid box consisting of 6 rows and 5 columns, alongside it i've created two states, one for the attempt string ``string``  that the user is currently typing on and one for the previous attempts ``strings``, this made it so i would access any box from within reach and change it's value also preventing the user from going back to the previous attempts.
- To generate the correct guess ``word`` i has to use a free api that provides common words which i concluded that it would be enough for this project, i had a slight issue with ``useEffect`` first as it was generating the word each time string updated which i then fixed using a simple state change that sets it self after the component updates (Thanks to Charrad).
- Checking for the correct match was done inside the function ``checkValidWord`` this made it so any attempt will be thoroughly inspected for correct guesses, word match or incorrect letters which will then be colored accordingly. If the words match then a ``winState`` event will trigger immediately else the player will try to submit the attempts until there's no more attempts which will then trigger a ``lostState`` event.
- For the correct guesses ``correctLetters`` i've created a simple **array of strings** that would hold each **correct letter** for it to be displayed later, whenever the attempt string ``string`` letters were in the correct order. The array of correct letter guesses **will hold that letter causing it to be displayed to the user**. I am aware that you can do it using one string but i went with this method as i was simply in the learning phase and did not want to cause further confusion during development.
- Sound implementation was made using the **Audio API** that the browser provides, i made a class that loads the audio when the user first visits the site, within it there's a function that plays sounds whenever an event triggers . In the game there's 3 main events:
  - When the user triggers ``onKeyDown`` event, which plays a keystroke sound.
  - **``WinState``** which plays a sound related to winning the game.
  - **``LostState``** which plays a sound related to losing the game.

## Technologies

### Libraries:

- React 18

### Packages:

- React Confetti Explotion 2.1.2
- React Icons 5.2.1
- React Intersetion Observer 9.13.0
- React Toastify: 10.0.5
- Framer Motion 11.3.24

### Development Environment:

- Vite 5.4.0

## Installation

1. Clone this repository

   ```bash
   git clone -b wordle-sarah https://github.com/SilentSarah/OpenDevEd-Wordle.git
   ```
2. Enter the project directory

   ```bash
   cd OpenDevEd-Wordle
   ```
3. Install the dependencies/packages

   ```bash
   npm install
   ```
4. Build the app

   ```bash
   npm run build
   ```
5. Start the production server:

   ```bash
   npm run start
   ```
