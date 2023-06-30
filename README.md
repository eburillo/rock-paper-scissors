# Rock Paper Scissors

[Play it here](https://rock-paper-scissors-a0yr6uuvt-eburillo.vercel.app/)

RPS is a game with 2 players (you and the computer), where each player chooses one of rock, paper or scissors and a winner is decided based on the rules:

- If both choose the same weapon, then it’s a DRAW
- Rock wins against Scissors
- Scissors win against Paper
- Paper win against Rock

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.

## How to play

- When the game is running, first thing to do is add your player's name
- Upon starting, player has 3 seconds to choose a weapon
- After the 3 seconds, the game decides the winner. If you didn't select any weapon, it will ask you to do start again and do it.
- Player can play again after each round
- Current score is displayed in a side panel (wins, draws, loses, total plays)
- Player score is kept in between sessions by **player name**, so if you login again with the same player's name, you will continue with your previous record.
- The leaderboard will always show an updated list of the best players 10 players (only wins count)
- Enjoy!
