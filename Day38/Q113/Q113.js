"use strict";
// Q113 - Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
function checkForCanadaCapital(countryMap) {
    if (countryMap.has("Canada")) {
        const capital = countryMap.get("Canada");
        console.log(`The capital of Canada is ${capital}`);
    }
    else {
        console.log("Canada is not in the map.");
    }
}
const countryMap = new Map();
countryMap.set("USA", "Washington D.C.");
countryMap.set("Canada", "Ottawa");
checkForCanadaCapital(countryMap);
