class Album {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.speed = 1;
    this.image = image;
    this.angle = 0;
    this.size = 150;
    this.rotationSpeed = 0.25;
    this.correct = false;
  }


// Displaying fruit images
update() {
  this.display();
  this.move();
  }

display() {
  push();
  imageMode(CENTER);
  translate(this.x, this.y);
  rotate(this.angle);
  image(this.image, 0, 0, this.size, this.size);
  pop();
}

// Adding movement for album covers
move() {
this.x += this.vx;
this.y += this.vy;

// Adds random movement
  let change = random(0, 1);
  if (change < 0.01) {
    this.vx = random(-this.speed, this.speed);
    this.vy = random(-this.speed, this.speed);
  }
  // Constrains animals to inside the frame
  this.x = constrain(this.x, 0, width);
  this.y = constrain(this.y, 0, height);
}
}
