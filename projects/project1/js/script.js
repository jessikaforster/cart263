/**
Train to Busan
Jessika Forster

Project 1, mid-term CART 263 project. View README.md for artist's statement.
*/

"use strict";

let state = `start`;
/* Could be start, level1, level2intro, level2, level3Intro, level3, level3Fail, level3Success */

/* Declaring all images that will be used : START */
let startImage;

/* Declaring all images that will be used : LEVEL1 */
let level1Image;

/* --> Used 'Spy profile generator' exercise as reference <-- */
// Variables that will be filled in when level1 loads : LEVEL1
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
// Following zombie array
let zombies = [];
let numZombies = 10;
// Random zombie array
let zombies2 = [];
let numZombies2 = 10;
// Defining user circle
let user;

// Timer for level2
let simulationTimer = 1000;

/* Declaring all images that will be used : LEVEL2FAIL */
let level2FailImage;

/* Declaring all images that will be used : LEVEL3 */
let level3Image;
/* --> Used '5.2. ml5.js: ObjectDetector' video as reference <-- */
// Defining variables for objectDetector
let video;
let modelName = `CocoSsd`;
let cocossd;
let predictions = [];

/* Declaring all images that will be used : LEVEL3FAIL */
let level3FailImage;

/* Declaring all images that will be used : LEVEL3SUCCESS */
let level3SuccessImage;


/**
Loading all images and JSON data into code
*/
function preload() {
  // Loading images to be used into code : START
  startImage = loadImage("assets/images/start.jpg");
  // Loading images to be used into code : LEVEL1
  level1Image = loadImage("assets/images/profilebg.jpg");

/* --> Used 'Spy profile generator' exercise as reference <-- */
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
  // Loading images to be used into code : LEVEL3FAIL
  level3FailImage = loadImage("assets/images/danger.jpg");
  // Loading images to be used into code : LEVEL3SUCCESS
  level3SuccessImage = loadImage("assets/images/safety.jpg");
}


/**
Setup for all levels
*/
function setup() {
  // Creating the canvas to fill the user's window size
  createCanvas(windowWidth, windowHeight);

/* --> Used 'Spy profile generator' exercise as reference <-- */
  // Function to generate random profile
  generateUserProfile();

  /* Setup for level 2*/
  // Displaying user circle
  user = new User;
  /* --> Used traffic example from CART 253 as reference <-- */
  // Displaying zombies that will follow mouse
  for (let i = 0; i < numZombies; i++) {
    let x = random(width / 2, width);
    let y = random(0, height);
    let zombie = new Zombie(x, y);
    zombies.push(zombie);
  }
  // Displaying zombies that will move randomly
  for (let i = 0; i < numZombies2; i++) {
    let x = random(width / 2, width);
    let y = random(0, height);
    let zombie2 = new Zombie2(x, y);
    zombies2.push(zombie2);
  }

  /* Setup for level 3*/
  /* --> Used '5.2. ml5.js: ObjectDetector' video as reference <-- */
  // Start webcam and hide the resulting HTML element
  video = createCapture(VIDEO);
  video.hide();

  // Start the CocoSsd model
  cocossd = ml5.objectDetector('cocossd', {}, function() {
    /* Ask CocoSsd to start detecting objects, calls gotResults
    if something is detected */
    cocossd.detect(video, gotResults);
  });
}

// Called when CocoSsd has detected at least one object in the video feed
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
Defining all states within game
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
  } else if (state === `level3Intro`) {
    level3Intro();
  } else if (state === `level3`) {
    level3();
  } else if (state === `level3Fail`) {
    level3Fail();
  } else if (state === `level3Success`) {
    level3Success();
  }
}


/**
Functions for all states
*/

/* Start state */
function start() {
  // Displaying starting image as background
  background(startImage);
  // Pressing space will trigger `level1` state
  keyPressed();
}

/* Level1 state */
function level1() {
  // Displaying level 1 image as background
  background(level1Image);
  // Function to generate house plan variables
  displayUserProfile();
  // Pressing V will trigger `level2Intro`
  keyPressed();
}

/* Level 2 intro state */
function level2Intro() {
  // Displaying level 2 image as background
  background(level2IntroImage);
  // Text to be displayed at center of screen
  textLevel2Intro();
}

/* Level 2 state */
function level2() {
  // Displaying level 2 image as background
  background(level2Image);
  // For loop to create all zombies that follow mouse
  for (let i = 0; i < zombies.length; i++) {
    let zombie = zombies[i];
    // Allowing zombies to move on x and y axis
    zombie.move();
    // Zombies will follow mouse movement
    zombie.mouseMovement();
    // Display zombies as red circles
    zombie.display();
    // Checking if user overlaps zombie
    user.checkOverlap(zombie);
  }
  // For loop to create all zombies that move randomly
  for (let i = 0; i < zombies2.length; i++) {
    let zombie2 = zombies2[i];
    // Allowing zombies to move on x and y axis
    zombie2.move();
    // Display zombies as red circles
    zombie2.display();
    // Checking if user overlaps zombie
    user.checkOverlap2(zombie2);
  }

  // Allowing user to move on x and y axis
  user.move();
  // User will follow mouse movement
  user.mouseMovement();
  // Displaying user as green circle
  user.display();

  // When timer runs out next level begins
  simulationTimer -= 1;
  if (simulationTimer <= 0) {
    state = `level3Intro`;
  }

  // Displaying timer at top left corner in white
  text(simulationTimer, 100, 100);
  textSize(60);
  textFont(`Rajdhani`);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  fill(255);
}

/* Level 3 intro state */
function level3Intro() {
  background(0);

  // Instructions to be displayed on screen
  push();
  textSize(50);
  fill(0, 255, 0);
  textFont(`Rajdhani`);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`We will now test if you have been infected, please look at the camera`, windowWidth / 2, windowHeight / 2.1);
  text(`Click anywhere when you're ready`, windowWidth / 2, windowHeight / 1.9);
  pop();
}

/* Level 3 state */
function level3() {
  background(0);

/* --> Used '5.2. ml5.js: ObjectDetector' video as reference <-- */
  // Display the webcam
  image(video, 0, 0, width / 2, height / 2);

  // Check if there currently predictions to display
  if (predictions) {
    // If so run through the array of predictions
    for (let i = 0; i < predictions.length; i++) {
      // Get the object predicted
      let object = predictions[i];
      // Highlight it on the canvas
      highlightObject(object);

      // If detection of object is above 80% certainty, green instruction text will appear
      if (object.confidence > 0.8) {
        text(`You have not been infected, press G to continue`, windowWidth / 2, windowHeight / 1.5);
        textSize(60);
        textAlign(CENTER, CENTER);
        textFont(`Rajdhani`);
        textStyle(BOLD);
        fill(0, 255, 0);
      }
      // If detection of object is below 70% certainty, red instruction text will appear
      if (object.confidence < 0.7) {
        text(`You have been infected, press H to continue`, windowWidth / 2, windowHeight / 1.5);
        textSize(60);
        textAlign(CENTER, CENTER);
        textFont(`Rajdhani`);
        textStyle(BOLD);
        fill(255, 0, 0);
      }
    }
  }
}

/* Level 3 fail state */
function level3Fail() {
  // Displaying level 3 fail image as background
  background(level3FailImage);
}

/* Level 3 success state */
function level3Success() {
  // Displaying level 3 success image as background
  background(level3SuccessImage);
}


/**
Functions to be called in state functions above
*/

/* Pressing a specific key triggers new state */
function keyPressed() {
  if (keyCode === 32) {
    // When spacebar is pressed, state changes from `start` to `level1` : START
    if (state === `start`) {
      state = `level1`;
    }
  }
  // When V is pressed, state changes from `level1` to `level2Intro` : LEVEL1
  if (keyCode === 86) {
    if (state === `level1`) {
      state = `level2Intro`;
    }
  }
  // // When S is pressed, state changes from `level2Intro` to `level2` : LEVEL2INTRO
  if (keyCode === 83) {
    if (state === `level2Intro`) {
      state = `level2`;
    }
  }
  // When H is pressed, state changes from `level3` to `level3Success` : LEVEL3
  if (keyCode === 71) {
    if (state === `level3`) {
      state = `level3Success`;
    }
  }
  // When G is pressed, state changes from `level3` to `level3Fail` : LEVEL3
  if (keyCode === 72) {
    if (state === `level3`) {
      state = `level3Fail`;
    }
  }
  // Pressing 'B' will trigger ResponsiveVoice to say instructions : LEVEL1
  if (keyCode === 66) {
    responsiveVoice.speak("An announcement for all passengers: there are flesh eating monsters that have infiltrated the train, do your best to escape by using your mouse to move and dodge incoming zombies. Be sure to have your mouse on the left side of the screen. Press S to start");
  }
}

/* Pressing the mouse triggers new state */
function mousePressed() {
  // Pressing mouse changes state from `level3Intro` to `level3`
  if (state === `level3Intro`) {
    state = `level3`;
  }
}

/* --> Used 'Spy profile generator' exercise as reference <-- */
/* Function to generate user profile variables */
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

/* --> Used 'Spy profile generator' exercise as reference <-- */
/* Function that will allow for user profile to be displayed : LEVEL1 */
function displayUserProfile() {
  // Text/profile to be displayed
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

/* Text to be displayed in level2Intro state */
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

/* --> Used '5.2. ml5.js: ObjectDetector' video as reference <-- */
/* Function that will highlight object that are being detected by ml5 */
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
  fill(0, 255, 0);
  textAlign(CENTER, CENTER);
  text(`${object.label}, ${object.confidence.toFixed(2)}`, object.x + object.width / 2, object.y + object.height / 2);
  pop();
}
