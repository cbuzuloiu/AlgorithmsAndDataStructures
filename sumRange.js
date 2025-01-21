"use strict";

// === RECURSIVE FUNCTION ===

function sumRange(num) {
  if (num === 1) {
    return 1;
  } else {
    return num + sumRange(num - 1);
  }
}

console.log(sumRange(3));

/*
num = 3 -- return 3 + sumRange(3-1)
num = 2 --            return 2 + sumRange(2-1)
num = 1 --                       return 1 
*/
