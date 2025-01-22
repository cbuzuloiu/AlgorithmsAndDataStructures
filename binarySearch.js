"use strict";

function binarySearch(arr, key) {
  let low = 0;
  let high = arr.length - 1;
  let mid = Math.trunc((high + low) / 2);

  console.log(`Low is: ${low}`);
  console.log(`High is: ${high}`);
  //   console.log(`Mid is: ${mid}`);
  console.log("===============================");

  while (low <= high) {
    // let mid = Math.trunc((high + low) / 2);
    if (key === arr[mid]) {
      return mid;
    } else if (key > arr[mid]) {
      low = mid + 1;
      mid = Math.trunc((high + low) / 2);
      console.log(`Low is: ${low}`);
      console.log(`High is: ${high}`);
      console.log(`Mid is: ${mid}`);
      console.log("===============================");
    } else {
      high = mid - 1;
      mid = Math.trunc((high + low) / 2);
      console.log(`Low is: ${low}`);
      console.log(`High is: ${high}`);
      console.log(`Mid is: ${mid}`);
      console.log("===============================");
    }
  }

  return -1;
}

console.log(binarySearch([10, 11, 12, 13, 16, 23, 38, 56, 72, 91], 23));
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15));
