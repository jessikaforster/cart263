/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// The user's webcam
let video = undefined;
// The Handpose model
let handpose = undefined;
// The current set of predictions
let predictions = [];
// The BUBBLE
let bubble = undefined;
/**
Description of setup
*/
function setup() {
  createCanvas(640, 480);

// Access to user's webcam
  video = createCapture(VIDEO);
  video.hide();

  // Load the handpose model
  handpose = ml5.handpose(video, {
    flipHorizontal: true
}, function() {
  console.log(`Model loaded.`);
});

// Listen for predictions
handpose.on(`predict`, function(results) {
  console.log(results);
  predictions = results;
});

// Our BUBBLE
bubble = {
  x: random(width),
  y: height,
  size: 100,
  vx: 0,
  vy: -2
  };
}

/**
Description of draw()
*/
function draw() {
  background(0);

  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = base[1];
    let baseX = base[0];
    let baseY = base[1];

    push();
    noFill();
    stroke(255,255,255);
    strokeWeight(2);
    line(baseX,baseY,tipX,tipY);
    pop();

    push();
    noStroke();
    fill(255,0,0);
    ellipse(baseX, baseY, 20);
    pop();

    // Check bubble popping
    let d = dist(tipX, tipY, bubble.x, bubble.y);
    if (d < bubble.size/2) {
      bubble.x = random(width);
      bubble.y = height;
    }
  }

// Move the bubble
  bubble.x += bubble.vx;
  bubble.y += bubble.vy;

  if (bubble.y < 0) {
    bubble.x = random(width);
    bubble.y = height;
  }

  push();
  fill(0, 100, 200);
  noStroke();
  ellipse(bubble.x, bubble.y, bubble.size);
  pop();
}
