/**
Train to Busan
Jessika Forster

Project 1, mid-term CART 263 project. View README.md for artist's statement.
*/

"use strict";

let state = `level3`;
/* Could be start, level1, level2intro, level2, level2Fail, level3, level3Fail, level3Success */

/* Declaring all images that will be used : START */
let startImage;

/* Declaring all images that will be used : LEVEL1 */
let level1Image;

// Variables that will be filled in when game loads
let userProfile = {
  firstName: `unknown`,
  lastName: `unknown`,
  pronouns: `unknown`,
  age: `unknown`,
  occupation: `unknown`,
  weapon: `unknown`,
  trait: `unknown`
};

// Defining data to be used
let firstNameData = undefined;
let lastNameData = undefined;
let jobData = undefined;
let weaponData = undefined;
let traitData = undefined;

/* Declaring all images that will be used : LEVEL2INTRO */
let level2IntroImage;

/* Declaring all images that will be used : LEVEL2 */
let level2Image;
let zombies = [];
let numZombies = 10;

let zombies2 = [];
let numZombies2 = 10;

let user;

// Timer
let simulationTimer = 1500;

/* Declaring all images that will be used : LEVEL2FAIL */
let level2FailImage;

/* Declaring all images that will be used : LEVEL3 */
let level3Image;

let video;
let modelName = `CocoSsd`;
let cocossd;
let predictions = [];

/* Declaring all images that will be used : LEVEL3FAIL */
let level3FailImage;

/* Declaring all images that will be used : LEVEL3SUCCESS */
let level3SuccessImage;

/**
Description of preload
*/
function preload() {
  // Loading images to be used into code : START
  startImage = loadImage("assets/images/start.jpg");
  // Loading images to be used into code : LEVEL1
  level1Image = loadImage("assets/images/profilebg.jpg");

  // Loading JSON files
  firstNameData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/firstNames.json`);
  lastNameData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/lastNames.json`);
  jobData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/occupations.json`);
  weaponData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);
  traitData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/psychology/personality_test.json`);

  // Loading images to be used into code : LEVEL2INTRO
  level2IntroImage = loadImage("assets/images/moving.gif");

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

  // Level 1
  generateUserProfile();

  // Level 2
  user = new User;

  for (let i = 0; i < numZombies; i++) {
    let x = random(width / 2, width);
    let y = random(0, height);
    let zombie = new Zombie(x, y);
    zombies.push(zombie);
  }

  for (let i = 0; i < numZombies2; i++) {
    let x = random(width / 2, width);
    let y = random(0, height);
    let zombie2 = new Zombie2(x, y);
    zombies2.push(zombie2);
  }

// Level 3
  // Start webcam and hide the resulting HTML element
  video = createCapture(VIDEO);
  video.hide();

  // Start the CocoSsd model and when it's ready start detection
  // and switch to the running state
  cocossd = ml5.objectDetector('cocossd', {}, function() {
    // Ask CocoSsd to start detecting objects, calls gotResults
    // if it finds something
    cocossd.detect(video, gotResults);
  });
}

/**
Called when CocoSsd has detected at least one object in the video feed
*/
function gotResults(err, results) {
  // If there's an error, report it
  if (err) {
    console.error(err);
  }
  // Otherwise, save the results into our predictions array
  else {
    predictions = results;
  }
  // Ask CocoSsd to detect objects again so it's continuous
  cocossd.detect(video, gotResults);
}


/**
Description of draw()
*/
function draw() {
  if (state === `start`) {
    start();
  } else if (state === `level1`) {
    level1();
  } else if (state === `level2Intro`) {
    level2Intro();
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

  // Function to generate house plan variables
  displayUserProfile();
  keyPressed();
}

function level2Intro() {
  // Displaying level 2 image as background
  background(level2IntroImage);
  textLevel2Intro();
}

function level2() {
  // Displaying level 2 image as background
  background(level2Image);


  for (let i = 0; i < zombies.length; i++) {
    let zombie = zombies[i];
    zombie.move();
    zombie.mouseMovement();
    zombie.display();
    user.checkOverlap(zombie);
  }

  for (let i = 0; i < zombies2.length; i++) {
    let zombie2 = zombies2[i];
    zombie2.move();
    zombie2.display();
    user.checkOverlap2(zombie2);
  }

  user.move();
  user.mouseMovement();
  user.display();

  // When timer runs out next level begins
  simulationTimer -= 1;
  if (simulationTimer <= 0) {
    state = `level3`;
  }

  // Displaying timer at top left corner in white
  text(simulationTimer, 100, 100);
  textSize(60);
  textFont(`Rajdhani`);
  textStyle(BOLD);
  textAlign(LEFT, TOP);

  fill(255);

}

function level2Fail() {
  // Displaying level 2 fail image as background
  background(level2FailImage);
}

function level3() {
  background(0);

  // Display the webcam
image(video, 0, 0, width/2, height/2);

// Check if there currently predictions to display
if (predictions) {
  // If so run through the array of predictions
  for (let i = 0; i < predictions.length; i++) {
    // Get the object predicted
    let object = predictions[i];
    // Highlight it on the canvas
    highlightObject(object);
  }
}
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
  if (keyCode === 86) {
    if (state === `level1`) {
      state = `level2Intro`;
    }
  }
  if (keyCode === 83) {
    if (state === `level2Intro`) {
      state = `level2`;
    }
  }
  // Pressing 'B' will trigger ResponsiveVoice to say instructions
  if (keyCode === 66) {
    responsiveVoice.speak("An announcement for all passengers: there are flesh eating monsters that have infiltrated the train, do your best to escape by using your mouse to move and dodge incoming zombies. Be sure to have your mouse on the left side of the screen. Press S to start");
  }
}

// Function to generate house plan variables
function generateUserProfile() {

  // Prompt will insert your answer into game
  userProfile.pronouns = prompt(`What are your pronouns?`);
  // Prompt will insert your answer into game
  userProfile.age = prompt(`How old are you?`);
  // All of the following variables will be generated randomly
  userProfile.firstName = random(firstNameData.firstNames);
  userProfile.lastName = random(lastNameData.lastNames);
  userProfile.occupation = random(jobData.occupations);
  userProfile.weapon = random(weaponData.objects);
  userProfile.trait = random(traitData.personality_test);
}

function displayUserProfile() {
  // Text to be displayed
  let passengerProfile = `Passenger 25 on KTX 101 bound for Busan

First Name: ${userProfile.firstName}
Last Name: ${userProfile.lastName}
Pronouns: ${userProfile.pronouns}
Age: ${userProfile.age}
Occupation: ${userProfile.occupation}
Weapon: ${userProfile.weapon}
People say: ${userProfile.trait}

PRESS B and V TO CONTINUE`;

  // Defining all text variables
  push();
  textFont(`Rajdhani`);
  textSize(50);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(0);
  text(passengerProfile, 100, 100);
  pop();
}

function textLevel2Intro() {
  push();
  textSize(50);
  fill(0);
  textFont(`Rajdhani`);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`Listen to the announcement`, windowWidth / 2, windowHeight / 2);
  pop();
}

// Level 3
/**
Provided with a detected object it draws a box around it and includes its
label and confidence value
*/
function highlightObject(object) {
  // Display a box around it
  push();
  noFill();
  stroke(0, 255, 0);
  rect(object.x, object.y, object.width, object.height);
  pop();
  // Display the label and confidence in the center of the box
  push();
  textSize(18);
  fill(255, 255, 0);
  textAlign(CENTER, CENTER);
  text(`${object.label}, ${object.confidence.toFixed(2)}`, object.x + object.width / 2, object.y + object.height / 2);
  pop();
}
