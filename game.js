console.log("hello from the game");

class Game {
  constructor() {
    // LATER WE CREATE AN ARRAY SO WE CAN PUSH THE OBSTACLES RANDOMLY
    this.obstacles = [];
  }

  initialize() {
    this.background = new Background();
    this.player = new Player();
  }

  setup() {
    this.player.setup();
  }

  display() {
    clear();
    this.background.display();
    this.player.display();

    // displaying the obstackles comes later...
    if (frameCount % 60 === 0) {
      this.obstacles.push(new Obstacles());
    }
    this.obstacles.forEach((obstacle) => {
      obstacle.display();
    });

    this.obstacles = this.obstacles.filter((obstacle) => {
      return !obstacle.checkCollision(this.player);
    });
  }
}
