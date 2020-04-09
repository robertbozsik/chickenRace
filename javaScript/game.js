console.log("hello from the game");

class Game {
  constructor() {
    // LATER WE CREATE AN ARRAY SO WE CAN PUSH THE OBSTACLES RANDOMLY
    // this.obstacles = [];
    this.worms = [];
    this.foxes = [];
    this.started = false;
    this.finished = false;
    this.score = 0;
    this.life = 3;
    // this.score = document.querySelector("#score");
    // this.life = document.querySelector("#life");
  }

  // WILL BE CALLED IN function preload(){} IN main.js
  initialize() {
    this.background = new Background();
    // this.player = new Player();
    this.chicken = new Chicken();
    // worms and foxes will be initialized some seconds later!
    this.startPicture = loadImage("assets/start/startpage_2.png");
    this.finishPicture = loadImage("assets/gameover/game_over_1.png");
    this.startingPageSound = loadSound("assets/sounds/startingPageSound.mp3"); // ../ <- this is the way to start the path
    this.gameStartSound = loadSound("assets/sounds/gameStartSound.mp3");
    this.wormSound = loadSound("assets/sounds/collisionWithWormSound.mp3");
    this.foxSound = loadSound("assets/sounds/collisionWithFoxSound3.mp3");
    this.nextLevelSound = loadSound("assets/sounds/nextLevelSound.mp3"); // DOES NOT WORK! PLAYING IS LOOPED INFINITELY --> lines 125 and 129
    this.gameOverSound = loadSound("assets/sounds/gameOver.mp3");
  }

  // WILL BE CALLED IN function setup(){} IN main.js
  setup() {
    // this.player.setup();
    this.chicken.setup();
    this.startingPageSound.play();
    this.startingPageSound.setVolume(0.2);
  }

  // WILL BE CALLED IN function draw(){} IN main.js
  display() {
    clear();

    this.background.display();
    // this.player.display();
    this.chicken.display();

    // adding worms to the worms array after a certain time
    if (frameCount % 160 === 0) {
      // the higher the numer the less worms we have
      this.worms.push(new Worm());
    }

    // displaying worms
    this.worms.forEach((worm) => {
      worm.display();
    });

    // score increases in case of collision with a worm and the worm disappears
    // within a filter function true means keep it, false means delet it
    this.worms = this.worms.filter((worm) => {
      if (worm.checkCollision(this.chicken)) {
        this.score += 1;
        this.wormSound.play();
        return false;
      }
      return true;
    });

    // WHY DOES THIS NOT WORK???
    // this.worms = this.worms.filter((worm) => {
    //   if (worm.checkCollision(this.chicken)) {
    //     return false;
    //   }
    //   return true;
    // });

    // if (worm.checkCollision(this.chicken) === true) { // there is no worm but only worms
    //   this.score += 1;
    // }

    console.log(this.score);

    // adding foxes to the foxes array after a certain time
    if (frameCount % 80 === 0) {
      // the higher the numer the less foxes we have (default: 80)
      this.foxes.push(new Fox());
    }

    // displaying foxes
    this.foxes.forEach((fox) => {
      fox.display();
    });

    // life decreases in case of collision with a fox and the fox disappers
    // within a filter function true means keep it, false means delet it
    this.foxes = this.foxes.filter((fox) => {
      if (fox.checkCollision(this.chicken)) {
        this.life -= 1;
        this.foxSound.play();
        return false;
      }
      return true;
    });
    console.log(this.life);

    // game over logic
    if (this.life <= 0) {
      this.finished = true;
    }

    // SPEED UP LOGIC 1 // DOESN'T PROVIDE BETTER USER EXPERIENCE
    // if (this.score >= 3) {
    //   this.foxes.forEach((fox) => {
    //     fox.x -= 7;
    //   });
    //   this.worms.forEach((worm) => {
    //     worm.x -= 5;
    //   });
    // }

    // MORE FOXES LOGIC // I THINK IT WORKS BETTER THAN THE SPEED UP
    if (this.score >= 6) {
      //this.nextLevelSound.play(); // PLAYING IS LOOPED INFINITELY
      if (frameCount % 120 === 0) {
        this.foxes.push(new Fox());
      }
      //this.nextLevelSound.stop();
    }
  }
}
