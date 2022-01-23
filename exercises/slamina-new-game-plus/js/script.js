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
  "hitchhiking"
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

/**
Description of preload
*/
function preload() {

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


/**
Description of draw()
*/
function draw() {

}
