"use strict";
//Q123 - Create a loop that iterates through a string and stops when it finds the first vowel.
function findFirstVowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            return str[i];
        }
    }
    return 'No vowels found in the string.';
}
const inputString = "Hello, World!";
const firstVowel = findFirstVowel(inputString);
console.log(`The first vowel found in "${inputString}" is: ${firstVowel}`);
