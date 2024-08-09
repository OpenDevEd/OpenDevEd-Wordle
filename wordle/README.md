# OpenDevEd Wordle

# How to start the app
use those commands : 
                    npm install
                    npm run start

# How to play

Tap words using the keyboard.

## Approach

We start with defining our object which is make a wordle game

Understand Wordle rules like :
                                -All words should have the length of 5 letters.
                                -Players can make only 6 attempts.
                                =After each guess the player should receive a feedback, which letters are in the correct place, misplace place, and which words are wrong.
        

Preparing the list of words and code the game functionality

After testing the logic now it's time for the game interface

Design a grid layout where for the player's guesses

Display a keyboard which will help the user see the letters he already used and their state

The project was coded using React with typeScript to improves type safety and enhances code maintainability.

The two important features of React that I used in this project are UseState, and UseEffect.

UseEffect was used first to manage the 'keyup' event listner for both initialization and cleanUp, and second to conditionally showing a popUp depending on whether the player win the game or not.

UseState was used to track variables that will change and that change will make the component change depends on the state.