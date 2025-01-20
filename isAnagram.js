"use strict";
/*
Given two string, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema and iceman

isAnagram('', '') - true
isAnagram('aaz', 'zza') - false
isAnagram('anagram', 'nagaram') - true
isAnagram('rat', 'car') - false
isAnagram('awesome', 'awesom') - false
isAnagram('qwerty', 'qeywrt') - true
isAnagram('texttwisttime', 'timetwisttext') - true
isAnagram("Zaz aap ppa", "zza ppa paa") - true
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let counterStr1 = {};
  let counterStr2 = {};

  for (let key of str1) {
    counterStr1[key] = (counterStr1[key] ?? 0) + 1;
  }

  for (let key of str2) {
    counterStr2[key] = (counterStr2[key] ?? 0) + 1;
  }

  for (let key of str1) {
    if (!(key in counterStr2)) {
      return false;
    }

    if (counterStr1[key] !== counterStr2[key]) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("", ""));
console.log(isAnagram("aaz", "zza"));
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("awesome", "awesom"));
console.log(isAnagram("qwerty", "qeywrt"));
console.log(isAnagram("texttwisttime", "timetwisttext"));
console.log(isAnagram("Zaz aap ppa", "zza ppa paa"));
