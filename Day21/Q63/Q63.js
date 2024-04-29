"use strict";
// Q63 - Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
// Function to describe a circle
function describeCircle(circle) {
    return `Circle with radius of ${circle.radius}.`;
}
// Function to describe a rectangle
function describeRectangle(rectangle) {
    return `Rectangle with a width of ${rectangle.width} and height of ${rectangle.height}.`;
}
const myCircle = { kind: 'Circle', radius: 5 };
const myRectangle = { kind: 'Rectangle', width: 4, height: 6 };
console.log(describeCircle(myCircle));
console.log(describeRectangle(myRectangle));
