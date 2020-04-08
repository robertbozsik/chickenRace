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
    this.startPicture = loadImage("./assets/start/startpage_2.png");
    this.finishPicture = loadImage("./assets/gameover/game_over_1.png");
  }

  // WILL BE CALLED IN function setup(){} IN main.js
  setup() {
    // this.player.setup();
    this.chicken.setup();
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

    // if (worm.checkCollision(this.chicken) === true) {
    //   this.score += 1;
    // }

    console.log(this.score);

    // adding foxes to the foxes array after a certain time
    if (frameCount % 80 === 0) {
      // the higher the numer the less worms we have
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
        return false;
      }
      return true;
    });
    console.log(this.life);

    // game over logic
    if (this.life <= 0) {
      this.finished = true;
    }
  }
}
