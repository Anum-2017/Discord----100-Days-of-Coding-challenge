"use strict";
//Q80 - Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.
// Starting with our car object
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2023
};
// Adding a new property 'color' and updating 'year'
car.color = "Black";
car.year = 2024;
// Showing the updated car object
console.log(car);
