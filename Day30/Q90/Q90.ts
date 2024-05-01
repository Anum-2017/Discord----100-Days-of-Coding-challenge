// Q90 - Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.

// Function to check if a value is NaN
function isValueNaN(value: number): boolean {
    return isNaN(value);
}

const num1: number = 10;
const num2: number= NaN;
const num3: number = 20;

console.log(isValueNaN(num1)); 
console.log(isValueNaN(num2)); 
console.log(isValueNaN(num3)); 

  
  