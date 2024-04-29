//Q63 - Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

// Define type aliases for Circle and Rectangle
type Circle = {
    kind: 'Circle';
    radius: number;
};

type Rectangle = {
    kind: 'Rectangle';
    width: number;
    height: number;
};

// Function to describe a circle
function describeCircle(circle: Circle): string {
    return `Circle with radius of ${circle.radius}.`;
}

// Function to describe a rectangle
function describeRectangle(rectangle: Rectangle): string {
    return `Rectangle with a width of ${rectangle.width} and height of ${rectangle.height}.`;
}

const myCircle: Circle = { kind: 'Circle', radius: 5 };
const myRectangle: Rectangle = { kind: 'Rectangle', width: 4, height: 6 };

console.log(describeCircle(myCircle)); 
console.log(describeRectangle(myRectangle)); 
