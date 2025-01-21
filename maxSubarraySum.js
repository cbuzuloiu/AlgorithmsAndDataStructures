"use strict";

/*
Write a function called maxSubarraySum which accepts an array of integers and a 
number called n. The function should calculate the maximum sum of 
n consecutive elements in the array.

maxSubarraySum([1,2,5,2,8,1,5],2) - 10
maxSubarraySum([1,2,5,2,8,1,5],4) - 17
maxSubarraySum([4,2,1,6],1) - 6
maxSubarraySum([4,2,1,6,2],4) - 13
maxSubarraySum([],4) - null

*/

// === Naive aproach ===
// Time Complexity O(N**2)
function maxSubarraySum(arr, n) {
  if (n > arr.length) {
    return null;
  }

  let maxSum = -Infinity; // if the array is of negative numbers
  for (let i = 0; i < arr.length - n + 1; i++) {
    let sum = 0;
    for (let j = i; j < i + n; j++) {
      sum += arr[j];
    }

    if (maxSum < sum) {
      maxSum = sum;
    }
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([], 4));
