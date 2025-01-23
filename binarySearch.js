"use strict";

function binarySearch(arr, key) {
  let low = 0;
  let high = arr.length - 1;
  let mid = Math.trunc((high + low) / 2);

  console.log(`Low is: ${low}`);
  console.log(`High is: ${high}`);
  console.log(`Mid is: ${mid}`);
  console.log("===============================\n");

  // in case that the arrai has 1 element low = high
  while (low <= high) {
    // let mid = Math.trunc((high + low) / 2);
    if (key === arr[mid]) {
      return `The index of key: ${key} is: ${mid} \n`;
    } else if (key > arr[mid]) {
      low = mid + 1;

      console.log(`Low is: ${low}`);
      console.log(`High is: ${high}`);
      console.log(`Mid is: ${mid}`);
      console.log("===============================\n");
    } else {
      high = mid - 1;

      console.log(`Low is: ${low}`);
      console.log(`High is: ${high}`);
      console.log(`Mid is: ${mid}`);
      console.log("===============================\n");
    }
    mid = Math.trunc((high + low) / 2);
  }

  return -1;
}

console.log(binarySearch([10, 11, 12, 13, 16, 23, 38, 56, 72, 91], 23));
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15));

console.log(binarySearch([5], 5));

// JavaScript program to implement recursive Binary Search

// A recursive binary search function. It returns
// location of x in given array arr[low..high] is present,
// otherwise -1
function binarySearchRecursive(arr, low, high, x) {
  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2);

    // If the element is present at the middle
    // itself
    if (arr[mid] == x) return mid;

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (arr[mid] > x) return binarySearch(arr, low, mid - 1, x);

    // Else the element can only be present
    // in right subarray
    return binarySearch(arr, mid + 1, high, x);
  }

  // We reach here when element is not
  // present in array
  return -1;
}
