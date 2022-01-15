class Pizza extends Fruit {
  constructor(x, y, image) {
    super(x, y, image);
    this.speed = 10;
    this.found = false;
  }

  // Displaying pizza
  update() {
    super.update();

  }

  // `Success` state is triggered when pizza exits frame
  checkExit() {
    if (this.x > width) {
      state = `success`
    } else {
      state = `simulation`;
    }
  }

  // Clicking the pizza makes it move to the right
  clicked() {
    if (this.found) {
      this.vx += this.speed;
    } else {
      this.vx = 0;
    }
  }

  // Detecting when pizza has been clicked/found
  mousePressed() {
    if (mouseX > this.x - this.width / 2 &&
      mouseX < this.x + this.width / 2 &&
      mouseY > this.y - this.height / 2 &&
      mouseY < this.y + this.height / 2) {
      this.found = true;
    }
  }
}
