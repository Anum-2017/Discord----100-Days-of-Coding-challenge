"use strict";
//Q135 - Explain how you can format a JSON string with proper indentation for readability.
const person = {
    name: "Anum",
    age: 25,
    city: "Karachi",
    Country: "Pakistan"
};
// Converts the object into a JSON string with indentation
const jsonString = JSON.stringify(person, null, 2);
console.log(jsonString);
