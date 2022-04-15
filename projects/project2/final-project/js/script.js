/**
Project 2 Prototype
Jessika Forster

The prototype I created as a representation of the game I wish to make is a
game where you must run your mouse over the text in order for keywords to be
highlighted and used in the following level. There is 1 highlighted word per
paragraph.
*/

"use strict";

function preload() {

}

function setup() {

}

function draw() {
  
}

// When mouse hovers over specific words they will be highlighted
$(`.answer`).one(`mouseover`, function(event) {
  $(this).addClass(`found`, 500);
});
