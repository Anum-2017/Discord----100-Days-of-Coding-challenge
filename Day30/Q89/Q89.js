"use strict";
//Q89 - Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.
// This function changes a string into a number
function convertStringToNumber(str) {
    return parseInt(str);
}
const strNumber = "123";
const number = convertStringToNumber(strNumber);
console.log(number);
