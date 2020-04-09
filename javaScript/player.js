console.log("hello from the player");

class Player {
  constructor() {
    this.gravity = 0.2; // if this is 0 the chicken does not fall down after the jump
    this.speed = 0;
    this.jumpCount = 0;
    this.jumpSound = loadSound("assets/sounds/jumpSound.mp3");
  }

  setup() {
    this.height = this.img.height;
    this.width = this.img.width;
    this.x = 100;
    this.y = 300;
    console.log("player setup is done");
  }

  jump() {
    this.speed = -7; // the smaller the number is the bigger the jump is
  }

  display() {
    this.speed += this.gravity;
    this.y += this.speed;

    // if (this.y > height - this.height) {
    //     this.y = height - this.height;
    // }

    if (this.y >= 300) {
      this.y = 300;
      this.jumpCount = 0;
    }

    image(this.img, this.x, this.y);
  }
}

class Chicken extends Player {
  constructor() {
    super();
    this.img = loadImage("assets/player/chicken-vektor2.gif");
  }
}

class Hen extends Player {
  constructor() {
    super();
    this.img = loadImage(""); // here should have come the gif of the hen
  }
}
