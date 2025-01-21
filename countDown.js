"use strict";

// === RECURSIVE FUNCTION ===

function countDown(num) {
  // base case - end point
  if (num <= 0) {
    console.log(num);
    console.log(`All done!`);
    return;
  }

  console.log(num);
  // different input
  num--;
  countDown(num);
}

countDown(5);
