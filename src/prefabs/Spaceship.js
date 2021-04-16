class Spaceship extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene
        this.points = pointValue;   // store pointValue
        this.moveSpeed = game.settings.spaceshipSpeed;
        this.direction = Phaser.Math.Between(0, 1);
    }

    update(){
        if(this.direction == 1){
        // move spaceship left
        this.x -= this.moveSpeed;
        // wrap around from left edge to right edge
        if(this.x <= 0 - this. width){
            this.x = game.config.width;
        }
        
    }
    else{
        // move spaceship left
        this.x += this.moveSpeed;
        // wrap around from left edge to right edge
        if(this.x >= game.config.width + this. width){
            this.x = 0;
        }
    }
    }

    //position reset
    reset(){
        if(this.direction == 1){
        this.x = 0;
        }
        else{
            this.x = game.config.width;
        }
    }

    speedup(){
        this.moveSpeed += 2;
    }
}