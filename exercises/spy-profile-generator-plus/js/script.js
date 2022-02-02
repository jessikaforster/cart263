/**
Spy Profile Generator+
Jessika Forster

The game I have created in order to get used to using JSON data files is a home design game.
Everytime you refresh, a new design plan appears for your new 'dream home'.
*/

"use strict";

let housePlan = {
  dreamItem: `**REDACTED**`,
  location: `**REDACTED**`,
  artwork: `**REDACTED**`,
  plant: `**REDACTED**`,
  centerPiece: `**REDACTED**`,
  doorCode: `**REDACTED**`
};

let locationData = undefined;
let artworkData = undefined;
let plantData = undefined;
let objectData = undefined;
let numberData = undefined;

let wallImage;

/**
Description of preload
*/
function preload() {
locationData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/geography/countries.json`);
artworkData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/art/isms.json`);
plantData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/plants/flowers.json`);
objectData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);
numberData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/mathematics/primes.json`);

wallImage = loadImage("assets/images/wall.png");
}


/**
Description of setup
*/
function setup() {
createCanvas(windowWidth, windowHeight);

generateHousePlan();
}

function generateHousePlan() {
  housePlan.dreamItem = prompt(`What is one dream item you'd want in your home?`);
  housePlan.location = random(locationData.countries);
  housePlan.artwork = random(artworkData.isms);
  housePlan.plant = random(plantData.flowers);
  housePlan.centerPiece = random(objectData.objects);
  housePlan.doorCode = random(numberData.primes);

}


/**
Description of draw()
*/
function draw() {
  background(wallImage);

  let houseSetup = `CREATE YOUR VERY OWN DREAM HOME!

Must-Have: ${housePlan.dreamItem}
Location: ${housePlan.location}
Art style: ${housePlan.artwork}
Plant: ${housePlan.plant}
Center Piece: ${housePlan.centerPiece}
Door Code: ${housePlan.doorCode}`;

push();
textFont(`'Josefin Sans`);
textSize(30);
textAlign(LEFT, TOP);
fill(0);
text(houseSetup, 100, 100);
pop();

}
