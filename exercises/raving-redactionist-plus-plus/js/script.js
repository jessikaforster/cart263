/**
Raving Redactionist++
Jessika Forster

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

function play() {
  var audio = new Audio('assets/sounds/music.wav');
  audio.play();
}

$(`.top-secret`).on(`click`, reveal);
setInterval(revelation, 500);

function reveal(event) {
  $(this).removeClass(`redacted`);
  $(this).addClass(`revealed`);
}

function revelation() {
  $(`.revealed`).each(attemptReveal);
}

function attemptReveal() {
  let r = Math.random();
  if (r < 0.1) {
    $(this).removeClass(`revealed`);
    $(this).addClass(`redacted`);
  }
}
