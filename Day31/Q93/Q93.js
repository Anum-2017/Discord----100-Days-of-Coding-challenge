"use strict";
// Find the index of "Banana" in an array of fruits and replace it with "Mango".
let fruits = ["Apple", "Banana", "Orange", "Grapes"];
let index = fruits.indexOf("Banana");
if (index !== -1) {
    fruits[index] = "Mango";
}
console.log(fruits);
