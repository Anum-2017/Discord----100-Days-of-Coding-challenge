"use strict";
//Q101 - Generate a random integer between 1 and 10.
function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber = generateRandomInt(1, 10);
console.log(randomNumber);
