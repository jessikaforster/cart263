/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

const songs = [
  "one minute back",
  "alarm clock",
  "amigo",
  "an encore",
  "atlantis",
  "beautiful",
  "best place",
  "chocolate",
  "colorful",
  "dont call me",
  "dream girl",
  "dynamite",
  "everybody",
  "evil",
  "excuse me miss",
  "get the treasure",
  "girls girls girls",
  "good evening",
  "heart attack",
  "hello",
  "hitchhiking",
  "hold you",
  "I want you",
  "jojo",
  "juliette",
  "like a fire",
  "love like oxygen",
  "love should go on",
  "love sick",
  "love still goes on",
  "lucifer",
  "married to the music",
  "one for me",
  "prism",
  "queen of new york",
  "ready or not",
  "replay",
  "ring ding dong",
  "romantic",
  "romeo+juliette",
  "runaway",
  "sherlock",
  "the shinee world",
  "shine",
  "stand by me",
  "stranger",
  "superstar",
  "tell me what to do",
  "view",
  "why so serious"
];

let currentSong = ``;
let currentAnswer = ``;

const NUM_ALBUM_IMAGES = 20;

let albumImages = [];
let albums = [];

/**
Description of preload
*/
function preload() {
  // Loading all 20 song images at once
    for (let i = 0; i < NUM_ALBUM_IMAGES; i++) {
      let albumImage = loadImage(`assets/images/album${i}.jpg`)
      albumImages.push(albumImage);
    }

}


/**
Description of setup
*/
function setup() {
createCanvas(windowWidth, windowHeight);

if (annyang) {
  let commands = {
    'I think it is *song': guessSong
  };
  annyang.addCommands(commands);
  annyang.start();

  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  }
}


/**
Description of draw()
*/
function draw() {
background(84, 255, 190);

if (currentAnswer === currentSong) {
  fill(0,255,0);
}
else {
  fill(255,0,0);
}
text(currentAnswer, width/2, height/2);
}

function mousePressed() {
  currentSong = random(songs);
  let reverseSong = reverseString(currentSong);
  responsiveVoice.speak(reverseSong);
}

function guessSong(song) {
  currentAnswer = song.toLowerCase();
}

/**
Reverses the provided string
*/
function reverseString(string) {
  // Split the string into an array of characters
  let characters = string.split('');
  // Reverse the array of characters
  let reverseCharacters = characters.reverse();
  // Join the array of characters back into a string
  let result = reverseCharacters.join('');
  // Return the result
  return result;
}
