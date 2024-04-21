//Q24 - More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.

let str1: string = 'hello';
let str2: string = 'HELLO';
console.log("Test for equality with strings:");
console.log(str1 == 'hello'); 
console.log("Test for inequality with strings:");
console.log(str2 != 'hello');
console.log("Test for lowercase conversion:");
console.log(str2.toLowerCase() == str1); 

let num1: number = 10;
let num2: number = 5;
console.log("\nNumerical tests:");
console.log(num1 === num2); 
console.log(num1 !== num2); 
console.log(num1 > num2);  
console.log(num1 < num2);  
console.log(num1 >= num2); 
console.log(num1 <= num2); 

console.log("\nTest using 'and' operator:");
console.log((num1 > 10) && (num2 == 5)); 
console.log("Test using 'or' operator:");
console.log((num1 > 10) || (num2 == 5)); 

let arr: number[] = [1, 2, 3, 4, 5];
console.log("\nTest for item in array:");
console.log(arr.includes(3)); 
console.log("Test for item not in array:");
console.log(!arr.includes(6)); 