console.log("hello from the obstacles");

class Obstacles {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.x = width;
    // this.y = random(0, height - this.height);
    this.y = random(70, 330); // the obstacles come only this range of the y coordinate
  }

  // display() {
  //   // the obstackle is for now just a red rectangle
  //   rect(this.x, this.y, this.width, this.height);
  //   fill("red");
  //   this.x--;
  // }

  checkCollision(player) {
    let obstacleLeft = this.x;
    let obstacleRight = this.x + this.width;

    let playerLeft = player.x;
    let playerRight = player.x + player.width;

    let xCollision =
      (obstacleLeft > playerLeft && obstacleLeft < playerRight) ||
      (obstacleRight > playerLeft && obstacleRight < playerRight);

    let obstacleTop = this.y;
    let obstacleBottom = this.y + this.height;

    let playerTop = player.y;
    let playerBottom = player.y + player.height;

    let yCollision =
      (obstacleTop > playerTop && obstacleTop < playerBottom) ||
      (obstacleBottom > playerTop && obstacleBottom < playerBottom);

    let collision = xCollision && yCollision;
    return collision;
  }
}

class Worm extends Obstacles {
  constructor() {
    super();
    this.image = loadImage("assets/obstacles/worm.png");
  }

  display() {
    image(this.image, this.x, this.y, this.width, this.height);
    this.x -= 4; // the higher the number the faster the worm
  }
}

class Fox extends Obstacles {
  constructor() {
    super();
    this.image = loadImage("assets/obstacles/fox.png");
  }

  display() {
    image(this.image, this.x, this.y, this.width, this.height);
    this.x -= 6; // the higher the number the faster the fox
  }
}
