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

$(`.top-secret`).on(`click`, redact);
setInterval(revelation, 500);

function redact(event) {
  $(this).removeClass(`revealed`);
  $(this).addClass(`redacted`);
}

function revelation() {
  $(`.redacted`).each(attemptReveal);
}

function attemptReveal() {
  let r = Math.random();
  if (r < 0.1) {
    $(this).removeClass(`redacted`);
    $(this).addClass(`revealed`);
  }
}
