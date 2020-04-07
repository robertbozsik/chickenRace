console.log("hello from the obstacles");

class Obstacles {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.x = width;
    this.y = random(0, height - this.height);
  }

  // display() {
  //   // the obstackle is for now just a red rectangle
  //   rect(this.x, this.y, this.width, this.height);
  //   fill("red");
  //   this.x--;
  // }

  checkCollision(player) {
    let left = this.x;
    let right = this.x + this.width;

    let playerLeft = player.x;
    let playerRight = player.x + player.width;

    let xCollision =
      (left > playerLeft && left < playerRight) ||
      (right > playerLeft && right < playerRight);

    let top = this.y;
    let bottom = this.y + this.height;

    let playerTop = player.y;
    let playerBottom = player.y + player.height;

    let yCollision =
      (top > playerTop && top < playerBottom) ||
      (bottom > playerTop && bottom < playerBottom);

    let collision = xCollision && yCollision;
    return collision;
  }
}

class Worm extends Obstacles {
  constructor() {
    super();
    //this.image = game.wormImage;
    this.image = loadImage("./assets/worm/worm.png");
  }

  display() {
    image(this.image, this.x, this.y, this.width, this.height);
    this.x -= 2; // the higher the number the faster the worm
  }
}

class Fox extends Obstacles {
  constructor() {
    super();
    // this.image = game.foxImage;
    this.image = loadImage("./assets/fox/fox.png");
  }

  display() {
    image(this.image, this.x, this.y, this.width, this.height);
    this.x -= 6; // the higher the number the faster the fox
  }
}
