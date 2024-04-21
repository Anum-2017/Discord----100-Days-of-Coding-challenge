// Q47 - Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

let laptops = [
    { make: "HP", model: "Spectre x360", year: 2023 },
    { make: "Apple", model: "MacBook Pro", year: 2023 },
    { make: "Dell", model: "XPS 15", year: 2023 },
    { make: "Lenovo", model: "ThinkPad X1 Carbon" , year: 2023}
];
let [laptop1, laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);
