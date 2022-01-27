/**
Slamina New Game+
Jessika Forster

The goal of this exercise is to learn how to use both annyang! and ResponsiveVoice.
We must add a minimum of 3 new elements that were not in the original Slamina activity.
*/

"use strict";

let state = `start`;
// Could be start, simulation

// List of possible songs that could be said by ResponsiveVoice
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
  "juliet", //actually juliette but system only recognizes juliet
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

// Variables that will refer to the constant above
let currentSong = ``;
let currentAnswer = ``;

// Number of album images to be used
const NUM_ALBUM_IMAGES = 20;
// Number of album images to be displayed in total
const NUM_ALBUMS = 40;

// Defining album image arrays
let albumImages = [];
let albums = [];

// Defining image used in `start` state
let introImage;

// Defining variables for image displayed in `start` state
let intro = {
  x: undefined,
  y: undefined,
  width: 800,
  height: 560,
};

/**
Loading images to be used into code
*/
function preload() {
  // Image used in `start` state
  introImage = loadImage("assets/images/shinee.jpg");

  // Loading all 20 album cover images at once
  for (let i = 0; i < NUM_ALBUM_IMAGES; i++) {
    let albumImage = loadImage(`assets/images/album${i}.jpeg`)
    albumImages.push(albumImage);
  }
}

/**
Creating canvas, album cover images will appear randomly, implementing annyang!
Defining text variables.
*/
function setup() {
  // Creating canvas to fill full screen
  createCanvas(windowWidth, windowHeight);

  // Create the albums to be displayed randomly and move
  for (let i = 0; i < NUM_ALBUMS; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let albumImage = random(albumImages);
    let album = new Album(x, y, albumImage);
    albums.push(album);
  }

  // Annyang will listen when this sentence is said
  if (annyang) {
    let commands = {
      'I think the song is *song': guessSong
    };
    annyang.addCommands(commands);
    annyang.start();

    // Defining text variables
    textSize(50);
    textFont(`Roboto Mono`);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
  }
}


/**
Defining all states
*/
function draw() {
  if (state === `start`) {
    start();
  } else if (state === `simulation`) {
    simulation();
  }
}

// `Start` state
function start() {
  // Background is dark purple
  background(73, 18, 207);
  // Displaying intro image
  displayIntro();
  // Pressing space will trigger `simulation` state
  keyPressed();
  // Defining all text variables
  push();
  textSize(50);
  textFont(`Roboto Mono`);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`Guess the eeNIHS song`, windowWidth / 2, windowHeight / 5);
  text(`Press space to start!`, windowWidth / 2, windowHeight / 1.25);
  pop();
}

// `Simulation` state
function simulation() {
  // Blue background
  background(0, 135, 255);

  // Displaying all albums
  for (let i = 0; i < albums.length; i++) {
    albums[i].update();
  }

  // If answer from user is correct, text turns green
  if (currentAnswer === currentSong) {
    fill(0, 255, 0);
  }
  // If answer is incorrect, text turns red
  else {
    fill(255, 0, 0);
  }
  // Answer from user will appear at the center of the screen
  text(currentAnswer, width / 2, height / 2);

  // Displaying instructions along with text variables
  push();
  textSize(50);
  fill(0);
  textFont(`Roboto Mono`);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`Press 'B' to hear the instructions`, windowWidth / 2, windowHeight / 5);
  pop();
}

// Pressing space triggers `simulation` state
function keyPressed() {
  if (keyCode === 32) {
    // When spacebar is pressed, state changes from `start` to `simulation`
    if (state === `start`) {
      state = `simulation`;
    }
  }
  // Pressing 'B' will trigger ResponsiveVoice to say instructions
  if (keyCode === 66) {
    responsiveVoice.speak("The song title will be read backwards and you must reply with i think the song is  blank. click anywhere for a song title to be said", "US English Female");
  }
}

// Displaying image used in `start` state at center
function displayIntro() {
  image(introImage, width / 2, height / 2, intro.width, intro.height);
  imageMode(CENTER, CENTER);
}

// Clicking anywhere on the screen will trigger a song to be said backwards
function mousePressed() {
  currentSong = random(songs);
  let reverseSong = reverseString(currentSong);
  responsiveVoice.speak(reverseSong, "US English Female");
}

// Function to avoid confusion regarding capitalization
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
