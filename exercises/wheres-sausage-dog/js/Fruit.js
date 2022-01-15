class Fruit {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.image = image;
    this.size = 300;
  }

  move() {
    this.x += this.vx;
  }

  update() {
    this.display();
  }

  display() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.size, this.size);
    pop();
  }

}
