/**

JavaScript for LEVEL 3 

*/

"use strict";

// When mouse hovers over specific words they will be highlighted
$(`.answer`).one(`mouseover`, function(event) {
  $(this).addClass(`found`, 500);
});
