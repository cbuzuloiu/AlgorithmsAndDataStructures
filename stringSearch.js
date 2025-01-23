"use strict";
// wowomgzomg

function stringSearch(string, pattern) {
  let patternCount = 0;

  for (let i = 0; i <= string.length - pattern.length; i++) {
    console.log(`Iteration for i = ${i}`);
    if (string[i] === pattern[0]) {
      let patternToCheck = "";
      for (let j = i; j < i + pattern.length; j++) {
        patternToCheck += string[j];
      }
      console.log(patternToCheck);
      if (patternToCheck === pattern) {
        patternCount++;
      }
    }
  }

  return patternCount;
}

console.log(stringSearch("anaana are ana mere dana", "ana"));
