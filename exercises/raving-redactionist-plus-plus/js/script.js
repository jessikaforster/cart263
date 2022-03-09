/**
Raving Redactionist++
Jessika Forster

In this game, the romanized lyrics of a Korean song are displayed and you
must click on the covered letters in order to reveal the secret message. You can
press the play button to listen to the song as you work to reveal the message.
*/

"use strict";

// Playing the song
function play() {
  var audio = new Audio('assets/sounds/music.wav');
  audio.play();
}

// Clicking will reveal the covered letters
$(`.top-secret`).on(`click`, reveal);
setInterval(revelation, 500);

// Function that will switch letters from being covered to revealed
function reveal(event) {
  $(this).removeClass(`redacted`);
  $(this).addClass(`revealed`);
}

// Triggering function that will cover letters
function revelation() {
  $(`.revealed`).each(attemptRedact);
}

// Randomly putting white back over letters
function attemptRedact() {
  let r = Math.random();
  if (r < 0.1) {
    $(this).removeClass(`revealed`);
    $(this).addClass(`redacted`);
  }
}
