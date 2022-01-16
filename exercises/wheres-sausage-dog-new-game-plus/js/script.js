/**
Where's Sausage Dog?
Jessika Forster

Exercise to remember JavaScript, p5.js and to enjoy programming! The goal of the
game is to find the one image that is different from the others.
*/

"use strict";

let state = `start`;
// Could be start, simulation, success, failure

// Number of fruit images
const NUM_FRUIT_IMAGES = 10;
// Number of fruits to be displayed
const NUM_FRUITS = 100;

// Fruit arrays
let fruitImages = [];
let fruits = [];

// Declaring pizza image
let pizzaImage = undefined;
let pizza = undefined;

// Declaring images for start, failure and success states
let startImage;
let failureImage;
let successImage;

// Timer displayed during simulation
let simulationTimer = 250;

/**
Loading images to be used
*/
function preload() {
  // Loading all state images
  startImage = loadImage("assets/images/start.png");
  failureImage = loadImage("assets/images/failure.png");
  successImage = loadImage("assets/images/success.png");

  // Loading all 10 fruit images at once
  for (let i = 0; i < NUM_FRUIT_IMAGES; i++) {
    let fruitImage = loadImage(`assets/images/fruit${i}.png`)
    fruitImages.push(fruitImage);
  }
  // Loading pizza image
  pizzaImage = loadImage(`assets/images/pizza.png`);
}


/**
Creating canvas and displaying fruits and pizza
*/
function setup() {
  // Game will fill entire window
  createCanvas(windowWidth, windowHeight);

  // Create the fruits to be displayed randomly
  for (let i = 0; i < NUM_FRUITS; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let fruitImage = random(fruitImages);
    let fruit = new Fruit(x, y, fruitImage);
    fruits.push(fruit);
  }
  // Pizza will be displayed randomly
  let x = random(0, width);
  let y = random(0, height);
  pizza = new Pizza(x, y, pizzaImage)
}


/**
All states within code and their functions
*/
function draw() {
  if (state === `start`) {
    start();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `failure`) {
    failure();
  } else if (state === `success`) {
    success();
  }
}

// Start state
function start() {
  // Image to be displayed as background
  background(startImage);
  // Pressing space triggers `simulation` state
  keyPressed();
}

// Gameplay state
function simulation() {
  // Light blue background
  background(52, 225, 235);
  // Displaying all fruits
  for (let i = 0; i < fruits.length; i++) {
    fruits[i].update();
  }
  // Adding movement to pizza
  pizza.move();
  // When pizza is clicked it exits screen
  pizza.clicked();
  // When pizza exits `success` state is triggered
  pizza.checkExit();
  // Displaying pizza
  pizza.update();

  // When timer runs out `failure` state appears
  simulationTimer -= 1;
  if (simulationTimer <= 0) {
    state = `failure`;
  }

  // Displaying timer at top left corner in white
  text(simulationTimer, width / 24, height / 16);
  textSize(60);
  fill(255);
}

// Failure state
function failure() {
  // Image to be displayed as background
  background(failureImage);
}

// Success state
function success() {
  // Image to be displayed as background
  background(successImage);
}

// Pressing space triggers `simulation` state
function keyPressed() {
  if (keyCode === 32) {
    // When spacebar is pressed, state changes from `start` to `simulation`
    if (state === `start`) {
      state = `simulation`;
    }
  }
}

// Clicking pizza triggers movement
function mousePressed() {
  pizza.mousePressed();
}
