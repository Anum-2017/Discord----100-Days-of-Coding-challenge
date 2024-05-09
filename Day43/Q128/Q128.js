"use strict";
//Q128 - Create an arrow function that takes multiple parameters and returns the product of all parameters.
const multiply = (...params) => {
    return params.reduce((total, num) => total * num, 1);
};
console.log(multiply(2, 3, 4));
console.log(multiply(5, 6, 7, 8));
