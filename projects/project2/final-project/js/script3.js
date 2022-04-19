/**

JavaScript for LEVEL 2

*/

"use strict";

// Closing popup
$(`#solved-dialog`).dialog({
  autoOpen: false,
  button: {
    "I know.": function() {
      $(this).dialog(`close`);
    }
  }
});

// Numbers can be clicked on and moved
$(`.secret`).one(`mouseover`, function(event) {
  $(this).draggable({
    helper: `clone`
  });
});

// Numbers in lock code are drag and droppable
$(`#answer`).droppable({
  drop: function(event, ui) {
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`disable`);
    ui.draggable.removeClass(`found`);
    // Check if user got the correct answer
    if ($(this).text() === `1245`) {
      $(`#solved-dialog`).dialog(`open`);
    }
  }
});
