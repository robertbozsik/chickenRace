console.log("hello from the player");

class Player {
  constructor() {
    this.img = loadImage("./assets/chicken/chicken.gif");
    this.gravity = 0.2;
    this.speed = 0;
  }

  setup() {
    this.height = this.img.height;
    this.width = this.img.width;
    this.x = 100;
    this.y = 292;
    console.log("player setup is done");
  }

  jump() {
    this.speed = -5;
  }

  display() {
    this.speed += this.gravity;
    this.y += this.speed;

    // if (this.y > height - this.height) {
    //     this.y = height - this.height;
    // }

    /* new */
    if (this.y >= 292) {
      this.y = 292;
    }
    /* new */

    image(this.img, this.x, this.y);
  }
}
