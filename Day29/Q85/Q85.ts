//Q85 - Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.

function findCodePosition(str: string): number {
    const index = str.indexOf("code");
    return index !== -1 ? index : -1;
}

const position = findCodePosition("Learn to code with JavaScript");
console.log(position); 

