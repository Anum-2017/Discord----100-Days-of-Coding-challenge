"use strict";
//Q124 - Create a function inside an object that returns the object's own name property using the this keyword.
// Define the object
const person = {
    name: "Anum",
    getName: function () {
        return this.name;
    }
};
// Test the function
console.log(person.getName());
