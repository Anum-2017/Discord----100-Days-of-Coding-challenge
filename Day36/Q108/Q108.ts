//Q108 - Compare two strings to check if they are identical, ignoring case sensitivity.

function compareStringsIgnoreCase(str1: string, str2: string): boolean {
    return str1.toLowerCase() === str2.toLowerCase();
}

// Test
const string1 = "Hello";
const string2 = "hello";
const string3 = "World";

console.log(compareStringsIgnoreCase(string1, string2)); 
console.log(compareStringsIgnoreCase(string1, string3)); 

