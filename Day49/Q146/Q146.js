"use strict";
//Q146 - Show an example of a callback function used to filter an array of numbers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Uses .filter() with a callback function to filter out numbers greater than 5
const filteredNumbers = numbers.filter((number) => number > 5);
console.log(filteredNumbers);
