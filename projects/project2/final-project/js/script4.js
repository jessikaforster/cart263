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

// Mouseover letter in secret word will make it change colour
$(`.secret`).one(`mouseover`, function(event) {
  $(this).addClass(`found`, 500);
  $(this).draggable({
    helper: `clone`
  });
});

// Letters in secret word are drag and droppable
$(`#answer`).droppable({
  drop: function(event, ui) {
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`disable`);
    ui.draggable.removeClass(`found`);
    // Check if they got it
    if ($(this).text() === `memorable`) {
      $(`#solved-dialog`).dialog(`open`);
    }
  }
});
