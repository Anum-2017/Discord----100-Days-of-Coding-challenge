// Q67 - Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 

function addNumberAndString(num1: number, strNum: string): number {
    const parsedNum = parseFloat(strNum);
    return num1 + parsedNum;
}

const result = addNumberAndString(10, "5");
console.log(result); 
