console.log("hello from the obstacles");

class Obstacles {
  constructor() {
    this.height = 25;
    this.width = 25;
    this.x = width;
    this.y = random(0, height - this.height);
  }

  display() {
    // the obstackle is for now just a red rectangle
    rect(this.x, this.y, 25, 25);
    fill("red");
    this.x--;
  }

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
