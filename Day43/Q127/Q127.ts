//Q127 - Convert a traditional function expression to an arrow function.

// Traditional function expression
let traditionalFunc = function(a: number, b: number): number {
    return a + b;
};

console.log(traditionalFunc(3, 4)); 

// Converted to arrow function
let arrowFunc = (a: number, b: number): number => a + b;

console.log(arrowFunc(3, 4)); 
