class Pizza extends Fruit {
  constructor(x, y, image) {
    super(x, y, image);
    this.speed = 10;
    this.found = false;
  }

  update() {
    super.update();

}

clicked() {
  if (this.found) {
    this.vx += this.speed;
  } else {
    this.vx = 0;
  }
}

  mousePressed() {
    if (mouseX > this.x - this.image.width / 2 &&
      mouseX < this.x + this.image.width / 2 &&
      mouseY > this.y - this.image.height / 2 &&
      mouseY < this.y + this.image.height / 2) {
      this.found = true;
    }
  }
}
