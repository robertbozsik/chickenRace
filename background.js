console.log("hello from the background");

class Background {
  constructor() {
    // this.random = 0; // what is this? Do I need this line?
    // loadImage is a p5.js method
    this.imgs = [
      {
        src: loadImage("./assets/background2/layer_01_1920 x 1080.png"),
        x: 0,
        speed: 0,
      },
      {
        src: loadImage("./assets/background2/layer_02_1920 x 1080.png"),
        x: 0,
        speed: 1,
      },
      {
        src: loadImage("./assets/background2/layer_03_1920 x 1080.png"),
        x: 0,
        speed: 2,
      },
      {
        src: loadImage("./assets/background2/layer_04_1920 x 1080.png"),
        x: 0,
        speed: 3,
      },
      {
        src: loadImage("./assets/background2/layer_05_1920 x 1080.png"),
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
