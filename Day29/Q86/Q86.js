"use strict";
//Q86 - Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
function checkForJavaScriptPresence(input) {
    const regex = /\bJavaScript\b/i;
    return regex.test(input);
}
const text = "I love programming in JavaScript!";
console.log(checkForJavaScriptPresence(text));
