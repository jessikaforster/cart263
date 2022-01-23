/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let state = `start`;
// Could be start, simulation, success, failure

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
  "don't call me",
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
  "romeo+juliet", //actually juliette but system only recognizes juliet
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
const NUM_ALBUMS = 40;

let albumImages = [];
let albums = [];

let introImage;

let successSFX;

let intro = {
  x: undefined,
  y: undefined,
  width: 800,
  height: 560,
};

/**
Description of preload
*/
function preload() {
introImage = loadImage("assets/images/shinee.jpg");

successSFX = loadSound("assets/sounds/superstar.wav");

  // Loading all 20 song images at once
    for (let i = 0; i < NUM_ALBUM_IMAGES; i++) {
      let albumImage = loadImage(`assets/images/album${i}.jpeg`)
      albumImages.push(albumImage);
    }
}

/**
Description of setup
*/
function setup() {
createCanvas(windowWidth, windowHeight);

// Create the albums to be displayed randomly and move
  for (let i = 0; i < NUM_ALBUMS; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let albumImage = random(albumImages);
    let album = new Album(x, y, albumImage);
    albums.push(album);
  }

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

function start() {
  background(73, 18, 207);
  displayIntro();
  keyPressed();
}

// (84, 255, 190)

function simulation() {
  background(0, 135, 255);

  // Displaying all albums
    for (let i = 0; i < albums.length; i++) {
      albums[i].update();
    }

    if (currentAnswer === currentSong) {
      fill(0,255,0);
    }
    else {
      fill(255,0,0);
    }
    text(currentAnswer, width/2, height/2);
}

function failure() {
background(0, 135, 255);
}

function success() {
background(0, 135, 255);
}

// Pressing space triggers `simulation` state
function keyPressed() {
  if (keyCode === 32) {
    // When spacebar is pressed, state changes from `start` to `simulation`
    if (state === `start`) {
      state = `simulation`;
    }
  }
if (keyCode === 66) {
  responsiveVoice.speak("welcome to guess the shinee song! the song will be read backwards and you must reply with i think the song is  blank. click anywhere for a song to be played");
  }
}

function displayIntro() {
  image(introImage, width / 2, height / 2, intro.width, intro.height);
  imageMode(CENTER, CENTER);


}

function mousePressed() {
  currentSong = random(songs);
  let reverseSong = reverseString(currentSong);
  responsiveVoice.speak(reverseSong);
}

function guessSong(song) {
  currentAnswer = song.toLowerCase();
}

function playSong() {
  if (currentAnswer === currentSong) {
  }
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
