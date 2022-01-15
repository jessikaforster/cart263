/**
Where's Sausage Dog?
Jessika Forster

Exercise to remember JavaScript, p5.js and to enjoy programming! The goal of my
game is to find the one image that is different from the others.
*/

"use strict";

const NUM_FRUIT_IMAGES = 10;
const NUM_FRUITS = 100;

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

  // Create the animals
  for (let i = 0; i < NUM_FRUITS; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let fruitImage = random(fruitImages);
    let fruit = new Fruit(x, y, fruitImage);
    fruits.push(fruit);
  }

  let x = random(0, width);
  let y = random(0, height);
  pizza = new Pizza(x, y, pizzaImage)
}


/**
Description of draw()
*/
function draw() {
  // Light blue background
  background(52, 225, 235);

  for (let i = 0; i < fruits.length; i++) {
    fruits[i].update();
  }

  pizza.update();
}
