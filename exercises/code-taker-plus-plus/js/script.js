/**
Code Taker
Jessika Forster

Game to figure out the secret word
*/

"use strict";

$(`#solved-dialog`).dialog({
  autoOpen: false,
  button: {
    "I know.": function() {
      $(this).dialog(`close`);
    }
  }
});

$(`.secret`).one(`mouseover`, function(event) {
  $(this).addClass(`found`, 500);
  $(this).draggable({
    helper: `clone`
  });
});

$(`#answer`).droppable({
  drop: function(event, ui) {
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`disable`);
    ui.draggable.removeClass(`found`);
    // Check if they got it
    if ($(this).text() === `euntak`) {
      $(`#solved-dialog`).dialog(`open`);
    }
  }
});
