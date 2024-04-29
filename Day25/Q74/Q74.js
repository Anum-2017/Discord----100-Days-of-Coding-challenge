"use strict";
// Q74 -  Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
let a = 5;
let b = 10;
console.log("Before swapping:");
console.log("a = ", a);
console.log("b = ", b);
// Swapping the values
let temp = a;
a = b;
b = temp;
console.log("After swapping:");
console.log("a = ", a);
console.log("b = ", b);
