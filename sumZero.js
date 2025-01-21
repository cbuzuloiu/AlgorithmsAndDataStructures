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

function sumZeroFinal(arr) {
  let left = 0;
  let right = arr.length - 1;
  console.log(`Initial value or left is ${arr[left]}`);
  console.log(`Initial value or right is ${arr[right]}`);

  while (left < right) {
    let sum = arr[left] + arr[right];
    console.log(`The sum is: ${sum}`);
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
      console.log(`Value of right was changed to ${arr[right]}`);
    } else {
      left++;
      console.log(`Value of left was changed to ${arr[left]}`);
    }
  }
}

console.log(sumZeroFinal([-7, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6]));
// console.log(sumZero([-2, 0, 1, 3]));
// console.log(sumZero([1, 2, 3]));
