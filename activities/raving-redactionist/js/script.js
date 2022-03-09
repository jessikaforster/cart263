/**
Raving Redactionist
Jessika Forster

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

setInterval(revelation, 500);

function relevation() {
  $(`.redacted`).each(attemptReveal);
}

function attemptReveal() {
  let r = Math.random();
  if (r < 0.1) {
    $(this).removeClass(`redacted`);
    $(this).addClass(`revealed`);
  }
}
