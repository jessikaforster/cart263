class Pizza extends Fruit {
  constructor(x, y, image) {
    super(x, y, image);
    this.speed = 10;
    this.found = false;
  }

  update() {
    super.update();

}

checkExit() {
  if (this.x > width) {
    state = `success`
  } else {
    state = `simulation`;
  }
}

clicked() {
  if (this.found) {
    this.vx += this.speed;
  } else {
    this.vx = 0;
  }
}

  mousePressed() {
    if (mouseX > this.x - this.width / 2 &&
      mouseX < this.x + this.width / 2 &&
      mouseY > this.y - this.height / 2 &&
      mouseY < this.y + this.height / 2) {
      this.found = true;
    }
  }
}
