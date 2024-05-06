"use strict";
// Q107 - Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
function isDivisibleBy2And3(num) {
    return num % 2 === 0 && num % 3 === 0;
}
const numberToCheck = 12;
if (isDivisibleBy2And3(numberToCheck)) {
    console.log(`${numberToCheck} is divisible by both 2 and 3.`);
}
else {
    console.log(`${numberToCheck} is not divisible by both 2 and 3.`);
}
