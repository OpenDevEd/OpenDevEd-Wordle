# Wordle
## About the game
Wordle is a word puzzle game where users have six chances to guess a five-letter word of the day.

The game is composed of two pages:
- The home page which contain information about the game and how to play the game.
- The game page where you can play wordle. You have 6 rows of 5 columns where you have to guess the word by using the keyboard provided in the game page. You can use the mouse or the keyboard to write letters into the boxes, after you have entered 5 letters you have to click enter.

If the word is correct, the game will end and you will have to wait 1 minute to play again.
If the word is inccorrect, you have 5 attempts to guess the right one.
If the word does not exist, you can't submit your answer. The word should be valid.

### How to play

When you start the game you have to guess a word that is 5 letters long which is generated when the game starts, and you have 6 attempts to guess the word. To make the game easy, I have reduced the time to wait for a word to change to 1 minute.

In each attempt and after you hit submit, you'll get a feedback about the correctness of the letter position using the GREEN, YELLOW, and GRAY colors.

### How to run the application

1- clone the project
```bash
git clone git@github.com:AbdellahBahsine/OpenDevEd-Wordle.git
```

2- change branch
```bash
git checkout wordle-abdellah-Bahsine
```

3- run app using docker
```bash
docker-compose up --build
```
