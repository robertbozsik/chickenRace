console.log("hello from the game");

class Game {
  constructor() {
    // LATER WE CREATE AN ARRAY SO WE CAN PUSH THE OBSTACLES RANDOMLY
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
  }
}
