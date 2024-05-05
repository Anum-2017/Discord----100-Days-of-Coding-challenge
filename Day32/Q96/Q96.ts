// Q96 - Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

const numbers: number[] = [1, 2, 3, 4, 5];

function sumArray(arr: number[]): number {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const totalSum: number = sumArray(numbers);
console.log("The sum of all numbers in the array is:", totalSum);

