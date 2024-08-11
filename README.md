# Wordle game

## About
 - A game made in react where the user should guess the words given in every field
 - After the user inputs a word there will be indication if the word is correct by displaying the inputed word.
       - Letter in green means the letter is in the correct position.
       - Letter in gray means the letter is not in the correct position.
       - Letter in red means the letter doesn't exist.
 - There is a total of 6 attempts to guess if the user is out of attempts he loses.

## How to run
  Clone the repo:
  ```
    git clone git@github.com:Leonidasabiri/OpenDevEd-Wordle.git
  ```
  Navigate to OpenDevEd-Wordle directory
  ```
    cd /OpenDevEd-Wordle
  ```
  Checkout to wordle-smounir branch
  ```
    git checkout wordle-smounir
  ```
  Run npm install
  ```
    npm install
  ```
  Run npm start
  ```
    npm start
  ```
  And you should be good to go.

  ## How the assignement was made
   I divided the project to multiple components:
   - One for the InputKey that allows the user to input letters
   - One for the InputField where the letter is displayed
   - One to show the word the user entered and check the validity
   - One for the game itself that contains all the needed components
      
   I made a list of generated words using state and pass in the game component and pass it down to the childs to check if the entered words are correct or not, it is 2D array so that the user enters only for each row at a time, if the guess is correct it moves down to the next row using a state variable called guessedWord that indicates how many words were guessed and i use that to index the array, if the guess is incorrect the number of attempts is decreased until it is 0 which would result in a game end.

   The whole game state is managed using a simple react context that i wrap around all the components that needs to have access to that value.

  ## Screen shots:

  ### Game Menu

  ![menu](https://github.com/user-attachments/assets/b8a85356-a57e-4b26-9890-ac908ecef08e)


  ### Game page
![screen shot](https://github.com/user-attachments/assets/a667ed5f-20c4-4b08-adbf-844def61b657)

  ### End Game page
  ![Game end](https://github.com/user-attachments/assets/ca314a93-98a9-4739-9d6a-5a7a2b020de6)

