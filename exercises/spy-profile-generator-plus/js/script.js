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
  wallColour: `**REDACTED**`,
  art: `**REDACTED**`,
  plant: `**REDACTED**`,
  centerPiece: `**REDACTED**`,
  doorCode: `**REDACTED**`
};

let countryData = undefined;
let colourData = undefined;
let artworkData = undefined;
let plantData = undefined;
let objectData = undefined;
let numberData = undefined;

let wallImage;

/**
Description of preload
*/
function preload() {
countryData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/geography/countries.json`);
colourData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/web_colors.json`);
artworkData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/art/isms.json`);
plantData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/plants/plants.json`);
objectData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);
numberData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/mathematics/primes.json`);

wallImage = loadImage("assets/images/wall.png");
}


/**
Description of setup
*/
function setup() {
createCanvas(windowWidth, windowHeight);

let data = JSON.parse(localStorage.getItem(`house-plan-data`));

if (data !== null) {
let doorCode = prompt(`Please enter the door passcode`)
if (doorCode === data.doorCode) {
  housePlan.dreamItem = housePlan.dreamItem
  housePlan.location = data.location;
  housePlan.wallColour = data.wallColour;
  housePlan.art = data.art;
  housePlan.plant = data.plant;
  housePlan.centerPiece = data.centerPiece;
  housePlan.doorCode = data.doorCode;
}
  }
else {
  generateHousePlan();
  }
}

function generateHousePlan() {
  housePlan.dreamItem = prompt(`What is one dream item you'd want in your home?`);
  let location = random(locationData.locations);
  let colour = random(colourData.colours);
  let artwork = random(artworkData.artworks);
  let plant = random(plantData.plants);
  let centerPiece = random(objectData.objects);
  let doorCode = random(numberData.numbers);

  localStorage.setItem(`house-plan-data`,JSON.stringify(housePlan));
}


/**
Description of draw()
*/
function draw() {
  background(wallImage);

}
