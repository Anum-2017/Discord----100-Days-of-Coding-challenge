"use strict";
//Q83 - Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
function convertToUpperCaseAndLowerCase(inputString) {
    const upperCaseString = inputString.toUpperCase();
    const lowerCaseString = inputString.toLowerCase();
    console.log("Uppercase:", upperCaseString);
    console.log("Lowercase:", lowerCaseString);
}
const inputString = "Hello World!";
convertToUpperCaseAndLowerCase(inputString);
