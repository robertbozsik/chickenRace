console.log("hello from the player");

class Player {
  constructor() {
    this.img = loadImage("./assets/chicken/chicken_01 copy.png");
    this.gravity = 0.2;
    this.speed = 0;
  }

  setup() {
    this.height = this.img.height;
    this.width = this.img.width;
    this.x = 300;
    this.y = 20;
    console.log("player setup is done");
  }

  jump() {
    this.speed = -5;
  }

  display() {
    this.speed += this.gravity;
    this.y += this.speed;
    if (this.y > height - this.height) {
      this.y = height - this.height;
    }
    image(this.img, this.x, this.y);
  }
}
