"use strict";
//Q88 - Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
function roundToNearestInteger(num) {
    return Math.round(num);
}
// Rounding a decimal
const decimalNumber = 3.7;
const roundedNumber = roundToNearestInteger(decimalNumber);
console.log("Rounded number:", roundedNumber);
