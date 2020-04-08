console.log("hello from the main");

let game = new Game();

function preload() {
  game.initialize();
}

function setup() {
  game.setup();
  createCanvas(800, 450);
}

// game.js -> constructor this.started and this.finished = false/true
function draw() {
  clear(); // the clear() should be here
  if (game.started === false) {
    image(game.startPicture, 0, 0); // the image/picture has to be in the game.js within the initialize function!
    document.querySelector(
      ".text"
    ).innerHTML = `<h1>chickenRace</h1> <p>Catch the <span>worms</span> and try to avoid the <span>foxes</span> with your chicken.</p> <p>Hit <span id="space">SPACE</span> once to jump, or hit it twice to jump even higher.</p> <p>Hit <span id="enter">ENTER</span> to start the game and have fun! =)</p>`;
  } else if (game.started === true && game.finished === false) {
    game.display();
    frameRate(100);
    document.querySelector(
      ".text"
    ).innerHTML = `<h1>chickenRace</h1> <h2>score: <span id="score">${game.score}</span></h2> <h2>life: <span id="life">${game.life}</span></h2>`;
  } else {
    image(game.finishPicture, 0, 0); // the image/picture has to be in the game.js within the initialize function!
    document.querySelector(
      ".text"
    ).innerHTML = `<h2>chickenRace</h2> <h1>GAME OVER!</h1> <p>Your score is: <span id="score">${game.score}</span> point(s)</p> <p>Hit <span id="enter">ENTER</span> to play again</p>`;
    noLoop(); // DO I NEED THIS noLoop() HERE?
  }
}

function keyPressed() {
  let space = 32;
  let enter = 13;

  if (keyCode === space) {
    if (game.chicken.jumpCount <= 1) {
      game.chicken.jump();
      game.chicken.jumpCount++;
    }
    console.log("jumpCount:", game.chicken.jumpCount);
  }

  if (keyCode === enter) {
    game.started = true;
    console.log("the game has just started");
  }

  if (keyCode === enter && game.finished === true) {
    window.location.reload();
  }
}
