/**
Train to Busan
Jessika Forster

Project 1, mid-term CART 263 project. View README.md for artist's statement.
*/

"use strict";

let state = `start`;
/* Could be start, level1, level2, level2Fail, level3, level3Fail, level3Success */

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {

}


/**
Description of draw()
*/
function draw() {
  if (state === `start`) {
    start();
  } else if (state === `level1`) {
    level1();
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

}

function level1() {

}

function level2() {

}

function level2Fail() {

}

function level3() {

}

function level3Fail() {

}

function level3Success() {

}
