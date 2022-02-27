/**
Train to Busan
Jessika Forster

Project 1, mid-term CART 263 project. View README.md for artist's statement.
*/

"use strict";

let state = `start`;
/* Could be start, level1, level2, level2Fail, level3, level3Fail, level3Success */

// Declaring all images that will be used : START
let startImage;

// Declaring all images that will be used : LEVEL1
let level1Image;

// Declaring all images that will be used : LEVEL2
let level2Image;

// Declaring all images that will be used : LEVEL2FAIL
let level2FailImage;

// Declaring all images that will be used : LEVEL3
let level3Image;

// Declaring all images that will be used : LEVEL3FAIL
let level3FailImage;

// Declaring all images that will be used : LEVEL3SUCCESS
let level3SuccessImage;

/**
Description of preload
*/
function preload() {
// Loading images to be used into code : START
  startImage = loadImage("assets/images/start.jpg");
// Loading images to be used into code : LEVEL1
  level1Image = loadImage("assets/images/profilebg.jpg");
// Loading images to be used into code : LEVEL2
  level2Image = loadImage("assets/images/train2.gif");
// Loading images to be used into code : LEVEL2FAIL
  level2FailImage = loadImage("assets/images/train1.jpg");
// Loading images to be used into code : LEVEL3

// Loading images to be used into code : LEVEL3FAIL
  level3FailImage = loadImage("assets/images/danger.jpg");
// Loading images to be used into code : LEVEL3SUCCESS
  level3SuccessImage = loadImage("assets/images/safety.jpg");
}


/**
Description of setup
*/
function setup() {
  // Creating the canvas to fill the user's window size
    createCanvas(windowWidth, windowHeight);
}


/**
Description of draw()
*/
function draw() {
  if (state === `start`) {
    start();
  } else if (state === `level1`) {
    level1();
  } else if (state === `level2`) {
    level2();
  } else if (state === `level2Fail`) {
    level2Fail();
  } else if (state === `level3`) {
    level3();
  } else if (state === `level3Fail`) {
    level3Fail();
  } else if (state === `level3Success`) {
    level3Success();
  }
}

function start() {
  // Displaying starting image as background
    background(startImage);
    keyPressed();
}

function level1() {
  // Displaying level 1 image as background
    background(level1Image);
}

function level2() {
  // Displaying level 2 image as background
    background(level2Image);
}

function level2Fail() {
  // Displaying level 2 fail image as background
    background(level2FailImage);
}

function level3() {

}

function level3Fail() {
  // Displaying level 3 fail image as background
    background(level3FailImage);
}

function level3Success() {
  // Displaying level 3 success image as background
    background(level3SuccessImage);
}

// Pressing a specific key triggers new state
function keyPressed() {
  if (keyCode === 32) {
    // When spacebar is pressed, state changes from `start` to `level1` : START
    if (state === `start`) {
      state = `level1`;
    }
  }
}
