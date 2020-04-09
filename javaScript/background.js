console.log("hello from the background");

class Background {
  constructor() {
    // this.random = 0; // what is this? Do I need this line?
    // loadImage is a p5.js method
    this.imgs = [
      {
        src: loadImage("assets/background/layer_01_800x450.png"),
        x: 0,
        speed: 0,
      },
      {
        src: loadImage("assets/background/layer_02_800x450.png"),
        x: 0,
        speed: 1,
      },
      {
        src: loadImage("assets/background/layer_03_800x450.png"),
        x: 0,
        speed: 2,
      },
      {
        src: loadImage("assets/background/layer_04_800x450.png"),
        x: 0,
        speed: 3,
      },
      {
        src: loadImage("assets/background/layer_05_800x450.png"),
        x: 0,
        speed: 4,
      },
    ];
  }

  move(img) {
    img.x -= img.speed;

    image(img.src, img.x, 0);
    image(img.src, img.x + width, 0);
    if (img.x <= -width) {
      img.x = 0;
    }
  }

  display() {
    this.imgs.forEach((image) => {
      this.move(image);
    });
  }
}
