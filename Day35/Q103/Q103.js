"use strict";
//Q103 - Write a function that returns a random boolean value, true or false.
function getRandomBoolean() {
    return Math.random() < 0.5;
}
const randomValue = getRandomBoolean();
console.log(randomValue); // Output will be either true or false
