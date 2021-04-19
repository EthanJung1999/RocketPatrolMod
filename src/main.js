/*
Ethan Jung
Rocket Patrol Mod
4/19/2021
8 hours

Points breakdown:
Implement the 'FIRE' UI text from the original game (5)
Allow the player to control the Rocket after it's fired (5)
Implement the speed increase that happens after 30 seconds in the original game (5)
Randomize each spaceship's movement direction at the start of each play (5)

Add your own (copyright-free) background music to the Play scene (5)
credit: https://opengameart.org/content/music-2

Display the time remaining (in seconds) on the screen (10)

Track a high score that persists across scenes and display it in the UI (5)
Displays when the game is over
Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)
Specialship: 48x32, speed is 5, and worth 50

Implement a new timing/scoring mechanism that adds time to the clock for successful hits (20)

Implement a simultaneous two-player mode (30)
player1 control:
A to left and D to right, F to fire
player2 control:
left arrow to left and right arrow to right, space to fire
player1 score is at top left and player2 score is at top right


*/
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
let game = new Phaser.Game(config);
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT, keyA, keyD, keySPACE;
let highScore = 0;
// set UI sizes
let borderUISize = game.config.height /15;
let borderPadding = borderUISize / 3;
