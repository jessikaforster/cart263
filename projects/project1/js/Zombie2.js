class Zombie2 {
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

    let change = random(0, 1);
    if (change < 0.05) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }

    // Zombies will be unable to exit screen
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
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
