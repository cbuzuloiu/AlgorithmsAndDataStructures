"use strict";

// Count the number ot time that the given pattern repeats

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

// console.log(stringSearch("anaana are ana mere dana", "ana"));

function stringSearch2(string, pattern) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    console.log(`Step ${i}`);
    for (let j = 0; j < pattern.length; j++) {
      console.log(pattern[j], string[i + j]);
      if (pattern[j] !== string[i + j]) {
        break;
      }

      if (j === pattern.length - 1) {
        count++;
      }
    }
  }

  return count;
}

console.log(stringSearch2("lorie loled", "lol"));
