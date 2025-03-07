"use strict";

/*
Implement a function called countUniqueValues, which accepts a sorted array, and 
counts the unique values in the array. There can be negative numbers in the 
array, but it will always be sorted.

countUniqueValues([1,1,1,1,1,2]) - 2
countUniqueValues(1,2,3,4,4,4,7,7,12,12,13) - 7
countUniqueValues([]) - 0
countUniqueValues([-2,-1,-1,0,1]) - 4
*/

function countUniqueValues(arr) {
  let countUnique = 0;
  let a = 0;
  let b = 1;

  while (b <= arr.length - 1) {
    if (arr[a] - arr[b] != 0) {
      countUnique++;
      a++;
      b++;
    } else {
      a++;
      b++;
    }
  }

  if (arr.length !== 0) {
    countUnique++;
  }

  return countUnique;
}

// Solution 2

function countUniqueValues2(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let i = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(countUniqueValues2([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues2([]));
console.log(countUniqueValues2([-2, -1, -1, 0, 1]));
