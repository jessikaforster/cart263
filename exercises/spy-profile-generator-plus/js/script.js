/**
Spy Profile Generator+
Jessika Forster

The game I have created in order to get used to using JSON data files is a home design game.
Everytime you refresh, a new design plan appears for your new 'dream home'.
*/

"use strict";

// Variables that will be filled in
let housePlan = {
  dreamItem: `**REDACTED**`,
  location: `**REDACTED**`,
  artwork: `**REDACTED**`,
  plant: `**REDACTED**`,
  centerPiece: `**REDACTED**`,
  doorCode: `**REDACTED**`
};

// Defining data to be used
let locationData = undefined;
let artworkData = undefined;
let plantData = undefined;
let objectData = undefined;
let numberData = undefined;
// Defining background image
let wallImage;

/**
Loading all JSON files and background image into code
*/
function preload() {
  // Loading JSON files
  locationData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/geography/countries.json`);
  artworkData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/art/isms.json`);
  plantData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/plants/flowers.json`);
  objectData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);
  numberData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/mathematics/primes.json`);
  // Loading background image
  wallImage = loadImage("assets/images/wall.png");
}


/**
Creating canvas to fill entire
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  // Function to generate house plan variables
  generateHousePlan();
}

/**
Function to generate house plan variables
*/
function generateHousePlan() {
  // Prompt will insert your answer into game
  housePlan.dreamItem = prompt(`What is one dream item you'd want in your home?`);
  // All of the following variables will be generated randomly
  housePlan.location = random(locationData.countries);
  housePlan.artwork = random(artworkData.isms);
  housePlan.plant = random(plantData.flowers);
  housePlan.centerPiece = random(objectData.objects);
  housePlan.doorCode = random(numberData.primes);

}

/**
Displaying background image and displaying text
*/
function draw() {
  // Displaying wall image as background
  background(wallImage);

  // Text to be displayed
  let houseSetup = `CREATE YOUR VERY OWN DREAM HOME!

Must-Have: ${housePlan.dreamItem}
Location: ${housePlan.location}
Art style: ${housePlan.artwork}
Plant: ${housePlan.plant}
Center Piece: ${housePlan.centerPiece}
Door Code: ${housePlan.doorCode}

REFRESH TO RESTART`;

  // Defining all text variables
  push();
  textFont(`'Josefin Sans`);
  textSize(30);
  textAlign(LEFT, TOP);
  fill(0);
  text(houseSetup, 100, 100);
  pop();

}
