console.log("hello from the game");

class Game {
  constructor() {
    // LATER WE CREATE AN ARRAY SO WE CAN PUSH THE OBSTACLES RANDOMLY
    this.obstacles = [];
    /* new */
    this.worms = [];
    this.foxes = [];
    /* new */
  }

  initialize() {
    this.background = new Background();
    this.player = new Player();
    /* new */
    this.wormImage = loadImage("./assets/worm/worm.png");
    this.foxImage = loadImage("./assets/fox/fox.png");
    /* new */
  }

  setup() {
    this.player.setup();
  }

  display() {
    clear();
    this.background.display();
    this.player.display();

    // // displaying the obstackles
    // if (frameCount % 80 === 0) {
    //   this.obstacles.push(new Obstacles());
    // }

    // this.obstacles.forEach((obstacle) => {
    //   obstacle.display();
    // });

    // this.obstacles = this.obstacles.filter((obstacle) => {
    //   return !obstacle.checkCollision(this.player);
    // });

    /* new displaying new worms*/
    if (frameCount % 80 === 0) {
      this.worms.push(new Worm());
    }

    this.worms.forEach((worm) => {
      worm.display();
    });

    this.worms = this.worms.filter((worm) => {
      return !worm.checkCollision(this.player);
    });
    /* new */

    /* new displaying new foxes*/
    if (frameCount % 80 === 0) {
      this.foxes.push(new Fox());
    }

    this.foxes.forEach((fox) => {
      fox.display();
    });

    this.foxes = this.foxes.filter((fox) => {
      return !fox.checkCollision(this.player);
    });
    /* new */
  }
}
