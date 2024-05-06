"use strict";
//Q97: Write a function that returns the current date in the format "DD-MM-YYYY".
function getCurrentDate() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = String(date.getFullYear());
    return `${day}-${month}-${year}`;
}
console.log(`Current date is : `, getCurrentDate());
