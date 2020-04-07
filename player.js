console.log("hello from the player");

class Player {
  constructor() {
    this.img = loadImage("./assets/chicken/chicken-vektor2.gif");
    this.gravity = 0.2;
    this.speed = 0;
  }

  setup() {
    this.height = this.img.height;
    this.width = this.img.width;
    this.x = 100;
    this.y = 300;
    console.log("player setup is done");
  }

  jump() {
    this.speed = -7;
  }

  display() {
    this.speed += this.gravity;
    this.y += this.speed;

    // if (this.y > height - this.height) {
    //     this.y = height - this.height;
    // }

    /* new */
    if (this.y >= 300) {
      this.y = 300;
    }
    /* new */

    image(this.img, this.x, this.y);
  }
}

class Chicken extends Player {
  constructor() {
    super();
    this.img = loadImage("./assets/chicken/chicken-vektor2.gif");
  }
}

class Hen extends Player {
  constructor() {
    super();
    this.img = loadImage(""); // here comes the gif of the hen
  }
}
