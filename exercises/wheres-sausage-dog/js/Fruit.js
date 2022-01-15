class Fruit {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.size = 300;

    this.angle = 0;
  }


  update() {
    this.display();
  }

  display() {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, this.x, this.y, this.size, this.size);
    pop();
  }

}
