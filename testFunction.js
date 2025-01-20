"use strict";

/*
Write a function caled same, which accept two arrays. The function should return ture if every value in the array has it's corresponding value squared in the second array. The requency values must be the same

same([1,2,3], [4,1,9]) true
same([1,2,3], [1,9]) false
same([1,2,1], [4,4,1]) false (must be same frequency)
*/

function same(firstArr, secondArr) {
  let coresValueIsSquared = false;
  let trueValues = 0;

  for (let i = 0; i < firstArr.length; i++) {
    console.log();
    console.log(`=== We are comparing ${firstArr[i]} ===`);
    for (let j = 0; j < secondArr.length; j++) {
      console.log(`Is ${firstArr[i] ** 2} = ${secondArr[j]}?`);
      if (firstArr[i] ** 2 === secondArr[j]) {
        console.log("--> YES");
        trueValues++;
        console.log(`-- The trueValue count is increased by 1;`);
        console.log(`-- trueValue is ${trueValues}`);
      } else {
        console.log("--> NO");
      }
    }
  }

  if (trueValues === secondArr.length) {
    return true;
  } else {
    return false;
  }
}

console.log(same([1, 2, 3], [4, 1, 9]));
