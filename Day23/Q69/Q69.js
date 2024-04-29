"use strict";
// Q69 - Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
function divideAndFindRemainder(dividend, divisor) {
    if (divisor === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend % divisor;
    return {
        quotient, remainder
    };
}
const { quotient, remainder } = divideAndFindRemainder(17, 5);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);
