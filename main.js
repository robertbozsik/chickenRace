console.log("hello from the main");

let game = new Game();

function preload() {
  game.initialize();
}

function setup() {
  game.setup();
  createCanvas(800, 450);
}

function draw() {
  game.display();
  frameRate(100);
}

// function keyPressed() {
//   let spaceBarCode = 32;
//   if (keyCode === spaceBarCode) {
//     game.player.jump();
//     console.log("jump for joy!");
//   }
// }

function keyPressed() {
  let spaceBarCode = 32;
  if (keyCode === spaceBarCode) {
    game.chicken.jump();
    console.log("jump chicken, jump!");
  }
}
