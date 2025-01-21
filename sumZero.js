"use strict";

/*
Write a function called sumZero which accepts a sorted array of integers. The
function should find the first pair where the sum is 0. Return an arrar that includes both values that sum to zero or undefined if a pair foes not exist.

sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
*/

// === Naive aproach O(N ** 2) space complexity O(1) ===
function sumZero(arr) {
  const pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      //   console.log(`${arr[i]} + ${arr[j]} = ${arr[i] + arr[j]}`);
      if (arr[i] + arr[j] === 0) {
        pairs.push(arr[i]);
        pairs.push(arr[j]);
        return pairs;
      }
    }
    return undefined;
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
