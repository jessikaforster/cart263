// Zombies displayed as red circles in level 2 that will be following mouse
class Zombie {
  // Defining variables for zombies : LEVEL2
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.size = 70;
    this.speed = 3;
  }

  move() {
    // Allowing zombies to move on x and y axis
    this.x += this.vx;
    this.y += this.vy;

    // Zombies will be unable to exit screen
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  /* --> Used '4.7. Movement' video as reference <-- */
  // Zombies will follow mouse movement
  mouseMovement() {
    if (mouseX < this.x) {
      this.vx = -this.speed;
    } else {
      this.vx = this.speed;
    }

    if (mouseY < this.y) {
      this.vy = -this.speed;
    } else {
      this.vy = this.speed;
    }
  }

  // Display zombies as red circles
  display() {
    push();
    fill(255, 0, 0);
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
