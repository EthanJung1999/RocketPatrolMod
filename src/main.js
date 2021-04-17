/*Points breakdown:
Implement the 'FIRE' UI text from the original game (5)
Allow the player to control the Rocket after it's fired (5)
Implement the speed increase that happens after 30 seconds in the original game (5)
Randomize each spaceship's movement direction at the start of each play (5)
Add your own (copyright-free) background music to the Play scene (5)
credit: https://opengameart.org/content/music-2
Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)
Specialship: 48x32, speed is 5, and worth 50

*/
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
let game = new Phaser.Game(config);
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT
// set UI sizes
let borderUISize = game.config.height /15;
let borderPadding = borderUISize / 3;
