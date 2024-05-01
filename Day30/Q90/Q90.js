"use strict";
// Q90 - Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.
// Function to check if a value is NaN
function isValueNaN(value) {
    return isNaN(value);
}
const num1 = 10;
const num2 = NaN;
const num3 = 20;
console.log(isValueNaN(num1));
console.log(isValueNaN(num2));
console.log(isValueNaN(num3));
