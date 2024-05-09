"use strict";
//Q133 - Write a JavaScript object and convert it into a JSON string.
// Define a JavaScript object
const myDetail = {
    name: "Anum",
    age: 25,
    city: "Karachi",
    country: "Pakistan"
};
// Convert the object into a JSON string
const jsonString = JSON.stringify(myDetail);
console.log(jsonString);
