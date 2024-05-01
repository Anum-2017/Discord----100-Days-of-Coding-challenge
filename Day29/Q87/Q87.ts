//Q87 -  Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.

function extractFirstTenChars(str: string): string {
    return str.substring(0, 10); 
}

// Taking the first 10 characters of a sentence
console.log(extractFirstTenChars("TypeScript is a superset of JavaScript."));