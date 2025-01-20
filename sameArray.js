"use strict";

/*
Write a function caled same, which accept two arrays. The function should return ture if every value in the array has it's corresponding value squared in the second array. The requency values must be the same

same([1,2,3], [4,1,9]) true
same([1,2,3], [1,9]) false
same([1,2,1], [4,4,1]) false (must be same frequency)
*/

// === O(N**2) solution ===
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// console.log("=========================");
// console.log("=========================");
// console.log(same([1, 2, 3], [4, 1, 9]));
// console.log("=========================");
// console.log(same([1, 2, 3], [1, 9]));
// console.log("=========================");
// console.log(same([1, 2, 1], [4, 4, 1]));
// console.log("=========================");
// console.log(same([2, 2, 1], [4, 4, 1]));

// === O(N) solution ===
function sameFinal(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    /*
    Check if that element already exists in frequencyCounter1. If it does, it increments the count of that element. If the element doesn't exist in the object yet, it initializes the count to 1

    ?? - provides a default value of 0 only when the value is null or undefined

    --- Another way to write the expression is: ---
    if (frequencyCounter1[val] === undefined) {
        frequencyCounter1[val] = 0;
    }
    frequencyCounter1[val] += 1;

    - check if the key exists, and if it doesn’t, initialize it
    - this ensures that if frequencyCounter1[val] is undefined, it’s initialized to 0 before incrementing.
    */
    frequencyCounter1[val] = (frequencyCounter1[val] ?? 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] ?? 0) + 1;
  }

  for (let key in frequencyCounter1) {
    // if the key is not in frequencyCounter2 return false
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    // if the value of frequencyCounter2 is not equal to the value of frequencyCounter1 return false
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  return true;
}

console.log(sameFinal([1, 2, 3, 2], [4, 1, 9, 4]));
