"use strict";

/*
4! = 4 factorial
4! = 4 * 3 * 2 * 1
*/

// === ITERATIVE SOLUTION ===

function factorialIterative(n) {
  let factorial = 1;

  for (let i = n; i >= 1; i--) {
    factorial *= i;
  }

  return factorial;
}

console.log(factorialIterative(4));

// === RECURSIVE SOLUTION ===

function factorialRecursive(n) {
  if (n === 1) return 1;
  return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(4));
