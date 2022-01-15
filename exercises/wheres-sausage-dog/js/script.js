/**
Where's Sausage Dog?
Jessika Forster

Exercise to remember JavaScript, p5.js and to enjoy programming! The goal of my
game is to find the one image that is different from the others.
*/

"use strict";

const NUM_FRUIT_IMAGES = 10;
const NUM_FRUITS = 80;

let fruitImages = [];
let fruits = [];

let pizzaImage = undefined;
let pizza = undefined;


/**
Description of preload
*/
function preload() {
  for (let i = 0; i < NUM_FRUIT_IMAGES; i++) {
      let fruitImage = loadImage(`assets/images/fruit${i}.png`)
      fruitImages.push(fruitImage);
    }

    pizzaImage = loadImage(`assets/images/pizza.png`);
}


/**
Description of setup
*/
function setup() {
  // Game will fill entire window
  createCanvas(windowWidth, windowHeight);
}


/**
Description of draw()
*/
function draw() {
  // Light blue background
  background(52, 225, 235);
}
