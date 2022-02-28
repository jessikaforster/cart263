class User {
  // Defining variables for zombies : LEVEL2
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.vx = 0;
      this.vy = 0;
      this.size = 70;
  }

move() {
  // Allowing user to move on x and y axis
    this.x += this.vx;
    this.y += this.vy;

    // User will be unable to exit screen
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
}

mouseMovement() {
this.x = mouseX;
this.y = mouseY;
}

  // Display zombies as red circles
  display() {
    push();
    fill(0, 255, 0);
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();
}

checkOverlap(zombie) {
  if (this.x > zombie.x - zombie.size / 2 &&
      this.x < zombie.x + zombie.size / 2 &&
      this.y > zombie.y - zombie.size / 2 &&
      this.y < zombie.y + zombie.size / 2) {
      state = `level3Fail`;
    }
}

checkOverlap2(zombie2) {
  if (this.x > zombie2.x - zombie2.size / 2 &&
      this.x < zombie2.x + zombie2.size / 2 &&
      this.y > zombie2.y - zombie2.size / 2 &&
      this.y < zombie2.y + zombie2.size / 2) {
      state = `level3Fail`;
    }
}

}
