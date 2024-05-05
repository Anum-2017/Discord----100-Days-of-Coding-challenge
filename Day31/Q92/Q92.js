"use strict";
//Q92 - Write a function to remove the last element from an array and return the removed element.
function removeLastFruit(fruits) {
    if (fruits.length === 0) {
        return undefined; // Return undefined if the array is empty
    }
    // Remove the last element from the array using pop() method
    return fruits.pop();
}
let fruits = ["apple", "banana", "orange", "grapes"];
let removedFruit = removeLastFruit(fruits);
console.log("Removed fruit:", removedFruit); // Output: "grape"
console.log("Remaining fruits:", fruits); // Output: ["apple", "banana", "orange"]
