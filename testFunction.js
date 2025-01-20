"use strict";

/*
Write a function caled same, which accept two arrays. The function should return ture if every value in the array has it's corresponding value squared in the second array. The requency values must be the same

same([1,2,3], [4,1,9]) true
same([1,2,3], [1,9]) false
same([1,2,1], [4,4,1]) false (must be same frequency)
*/

function same(firstArr, secondArr) {
  let coresValueIsSquared = false;

  for (let i = 0; i < firstArr.length; i++) {
    console.log(`=== We are comparing ${firstArr[i]} ===`);
    for (let j = 0; j < secondArr.length; j++) {
      console.log(`Is ${firstArr[i] ** 2} = ${secondArr[j]}?`);
    }
  }
  //sadsa
  return 0;
}

console.log(same([1, 2, 3], [4, 1, 9]));
