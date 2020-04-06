console.log("hello from the main");

let game = new Game();

function preload() {
  game.initialize();
}

function setup() {
  createCanvas(800, 450);
  game.setup();
}

function draw() {
  frameRate(60);
  game.display();
}

function keyPressed() {
  let spaceBarCode = 32;
  if (keyCode === spaceBarCode) {
    game.player.jump();
    console.log("jump for joy");
  }
}
