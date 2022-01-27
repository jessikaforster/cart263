// Displaying album cover images
// Adding random movement to album cover images

class Album {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.speed = 1;
    this.image = image;
    this.size = 150;
  }


  // Displaying album cover images and adding movement
  update() {
    this.display();
    this.move();
  }

  // Displaying album cover images
  display() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.size, this.size);
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
    // Constrains albums to inside the frame
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }
}
