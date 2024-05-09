"use strict";
//Q127 - Convert a traditional function expression to an arrow function.
// Traditional function expression
let traditionalFunc = function (a, b) {
    return a + b;
};
console.log(traditionalFunc(3, 4));
// Converted to arrow function
let arrowFunc = (a, b) => a + b;
console.log(arrowFunc(3, 4));
