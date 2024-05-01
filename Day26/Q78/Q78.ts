// Q78 - Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.

// Function Declaration
function squareNumberDeclaration(num: number): number {
    return num * num;
}

// Function Expression
const squareNumberExpression = function(num: number): number {
    return num * num;
};

// Test the functions
const numToSquare = 5;
console.log("Square Declaration:", squareNumberDeclaration(numToSquare));
console.log("Square Expression:", squareNumberExpression(numToSquare));
