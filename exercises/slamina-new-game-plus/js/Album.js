class Album {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.image = image;
    this.width = 300;
    this.height = 300;
  }

  // Adding movement for album covers
move() {
  this.x += this.vx;
  this.y += this.vy;
}

// Displaying fruit images
update() {
  this.display();
}

display() {
  push();
  imageMode(CENTER);
  image(this.image, this.x, this.y, this.width, this.height);
  pop();
}
}
