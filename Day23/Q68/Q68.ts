//Q68 - Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.

function multiplyDecimals(num1: number, num2: number): number {
    const product = num1 * num2;
    return Math.round(product * 100) / 100; // Round to two decimal places
}

const result = multiplyDecimals(3.14, 2.5);
console.log(result); 
