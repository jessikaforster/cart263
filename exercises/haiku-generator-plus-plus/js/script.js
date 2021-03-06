/**
Haiku Generator++
Jessika Forster

The game I have created generates a random fortune that might
just come true within the next 18 years! Each random element
can be clicked in order to be changed.
*/

"use strict";

// List of months to be generated randomly
let months = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`
];
// List of days to be generated randomly
let days = [
  `1st`,
  `2nd`,
  `3rd`,
  `4th`,
  `5th`,
  `6th`,
  `7th`,
  `8th`,
  `9th`,
  `10th`,
  `11th`,
  `12th`,
  `13th`,
  `14th`,
  `15th`,
  `16th`,
  `17th`,
  `18th`,
  `19th`,
  `20th`,
  `21st`,
  `22nd`,
  `23rd`,
  `24th`,
  `25th`,
  `26th`,
  `27th`,
  `28th`
];
// List of years to be generated randomly
let years = [
  `2023`,
  `2024`,
  `2025`,
  `2026`,
  `2027`,
  `2028`,
  `2029`,
  `2030`,
  `2031`,
  `2032`,
  `2033`,
  `2034`,
  `2035`,
  `2036`,
  `2037`,
  `2038`,
  `2039`,
  `2040`
];
// List of predictions to be generated randomly
let action = [
  `Get married`,
  `Fall in love`,
  `Meet your idol`,
  `Take a risk`,
  `Face your fear`,
  `Get a pet`,
  `Try something new`,
  `Reconnect with an old friend`,
  `Visit a new country`
];

// Defining all lines within the prediction
let line1 = random(months);
let line2 = random(days);
let line3 = random(years);
let line4;
let line5 = random(action);

// Defining all lines from html
let line1P = document.getElementById(`line-1`);
let line2P = document.getElementById(`line-2`);
let line3P = document.getElementById(`line-3`);
let line4P = document.getElementById(`line-4`);
let line5P = document.getElementById(`line-5`);

// Setting each element with appropriate line
line1P.innerText = line1;
line2P.innerText = line2;
line3P.innerText = line3;
line5P.innerText = line5;

// lineClicked function will be triggered when a line is clicked
line1P.addEventListener(`click`, lineClicked);
line2P.addEventListener(`click`, lineClicked);
line3P.addEventListener(`click`, lineClicked);
line5P.addEventListener(`click`, lineClicked);

// Clicking a line will make it fade out
function lineClicked(event) {
  fadeOut(event.target, 1);
}

// Function to make line fade out when clicked
function fadeOut(element, opacity) {
  opacity -= 0.01;
  element.style[`opacity`] = opacity;
  if (opacity > 0) {
    requestAnimationFrame(function() {
      fadeOut(element, opacity);
    });
  } else {
    setNewLine(element);
    fadeIn(element, 0);
  }
}

// When line is not being clicked, a new line will fade in
function fadeIn(element, opacity) {
  opacity += 0.01;
  element.style[`opacity`] = opacity;
  if (opacity < 1) {
    requestAnimationFrame(function() {
      fadeIn(element, opacity);
    });
  }
}

// When clicked a new line will randomly appear
function setNewLine(element) {
  if (element === line1P) {
    element.innerText = random(months);
  } else if (element === line2P) {
    element.innerText = random(days);
  } else if (element === line3P) {
    element.innerText = random(years);
  } else if (element === line5P) {
    element.innerText = random(action);
  }
}

// Function for random elements to be chosen from each array
function random(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}
