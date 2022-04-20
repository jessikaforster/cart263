/**

JavaScript for LEVEL 1

*/

"use strict";

/*  Used 'Code Taker' activity as reference */

// Mouseover numbers will make them appear
$(`.secret`).one(`mouseover`, function(event) {
  $(this).addClass(`found`, 500);
});
