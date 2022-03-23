/**
Project 2 Prototype
Jessika Forster

The prototype I created as a representation of the game I wish to make is a
game where you must run your mouse over the text in order for keywords to be
highlighted and used in the following level.
*/

"use strict";


// Mouseover letter in secret word will make it change colour
$(`.answer`).one(`mouseover`, function(event) {
  $(this).addClass(`found`, 500);
  });
