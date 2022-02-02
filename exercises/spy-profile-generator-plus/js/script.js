/**
Spy Profile Generator+
Jessika Forster

The game I have created in order to get used to using JSON data files is a home design game.
Everytime you refresh, a new design plan appears for your new 'dream home'.
*/

"use strict";

let housePlan = {
  location: `**REDACTED**`,
  doorCode: `**REDACTED**`,
  wallColour: `**REDACTED**`,
  art: `**REDACTED**`,
  plant: `**REDACTED**`,
  centerPiece: `**REDACTED**`
};

let countryData = undefined;
let numberData = undefined;
let colourData = undefined;
let artData = undefined;
let plantData = undefined;

/**
Description of preload
*/
function preload() {
countryData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/geography/countries.json`);
numberData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/mathematics/primes.json`);
colourData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/web_colors.json`);
artData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/art/isms.json`);
plantData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/plants/plants.json`);
objectData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);
}


/**
Description of setup
*/
function setup() {
createCanvas(windowWidth, windowHeight);

}


/**
Description of draw()
*/
function draw() {

}
