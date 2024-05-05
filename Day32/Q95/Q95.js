"use strict";
// Q95 - Write a function that uses the .filter() method to return an array of numbers greater than 10.
function numbersGreaterThanTen(arr) {
    return arr.filter((num) => num > 10);
}
const numbers = [5, 12, 3, 20, 8, 15];
const result = numbersGreaterThanTen(numbers);
console.log(result);
