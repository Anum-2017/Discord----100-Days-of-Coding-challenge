// Q95 - Write a function that uses the .filter() method to return an array of numbers greater than 10.

function numbersGreaterThanTen(arr: number[]): number[] {
    return arr.filter((num) => num > 10);
}


const numbers: number[] = [5, 12, 3, 20, 8, 15];
const result: number[] = numbersGreaterThanTen(numbers);
console.log(result); 
