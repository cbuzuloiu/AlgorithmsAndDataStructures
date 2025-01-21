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

// === TIME COMPLEXITY O(N) ===
function maxSubarraySumFinal(arr, n) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < n) {
    return null;
  }

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  console.log(`First sum is = ${tempSum}`);

  for (let i = n; i < arr.length; i++) {
    console.log(
      `Sum previous step: ${tempSum} - element at position ${i - n}: ${
        arr[i - n]
      } + element at slided position: ${arr[i]}`
    );
    tempSum = tempSum - arr[i - n] + arr[i];
    console.log(`Current sum is ${tempSum}`);
    maxSum = Math.max(maxSum, tempSum);
    console.log(`Max sum is ${maxSum}`);
    console.log(
      `=================================================================================`
    );
  }

  return maxSum;
}

// === EXAMPLE ===

// [2,6,9,3,1,8,5,6,3],3 (N=3) maxSum = 19

// STEP 1 - [[2 6 9] 3 1 8 5 6 3]
// 	        sum of [2 6 9] = 17

//          [a]    [b]
//           |      |
// STEP 2 - [2 [6 9 3] 1 8 5 6 3]
// 	        sum of [6 9 3] = sumStep1 - [a] + [b] = 18

//            [a]    [b]
//             |      |
// STEP 3 - [2 6 [9 3 1] 8 5 6 3]
//          sum of [9 3 1] = sumStep2 - [a] + [b] = 13

console.log(maxSubarraySumFinal([2, 6, 9, 3, 1, 8, 5, 6, 3], 3));
// console.log(maxSubarraySumFinal([1, 2, 5, 2, 8, 1, 5], 2));
// console.log(maxSubarraySumFinal([1, 2, 5, 2, 8, 1, 5], 4));
// console.log(maxSubarraySumFinal([4, 2, 1, 6], 1));
// console.log(maxSubarraySumFinal([4, 2, 1, 6], 1));
// console.log(maxSubarraySumFinal([], 4));
