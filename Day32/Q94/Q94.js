"use strict";
//Q94: Use the .map() method to create a new array that contains the length of each word from an array of words.
const words = ["Apple", "Banana", "Watermelon", "Apricot"];
const wordLengths = words.map(word => word.length);
console.log(wordLengths);
