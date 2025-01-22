"use strict";

let countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
];

const arr1 = [10, 50, 30, 70, 80, 60, 20, 90, 40];

function linearSearch(arr, searchFor) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchFor) return i;
  }

  return -1;
}

console.log(linearSearch(arr1, 30));

function linearSearch2(arr, searchFor) {
  let i = 0;
  for (let element of arr) {
    if (element === searchFor) {
      return i;
    } else {
      i++;
    }
  }

  return -1;
}

console.log(linearSearch2(arr1, 30));

function linearSearch3(arr, searchFor) {
  let i = 0;
  let indexOf = 0;
  arr.forEach((element) => {
    if (element === searchFor) {
      indexOf = i;
    } else {
      i++;
    }
  });

  return indexOf !== 0 ? indexOf : -1;
}

console.log(linearSearch3(arr1, 30));

// === USING RECURSION ===
function linearSearchRecursive(arr, searchFor) {
  if (arr.length === 0) return -1;

  if (arr[arr.length - 1] === searchFor) {
    return arr.length - 1;
  } else {
    arr.pop();
    return linearSearchRecursive(arr, searchFor);
  }
}

console.log(linearSearchRecursive(arr1, 30));
console.log(linearSearchRecursive(countryList, "Andorra"));
