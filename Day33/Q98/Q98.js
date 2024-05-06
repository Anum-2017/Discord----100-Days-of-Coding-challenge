"use strict";
//Q98 - Create a JavaScript snippet that calculates and logs how many days are left until New Year.
function daysUntilNewYear() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const newYear = new Date(currentYear + 1, 0, 1); // January 1st of next year
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const daysLeft = Math.ceil((newYear.getTime() - today.getTime()) / millisecondsPerDay);
    return daysLeft;
}
const daysLeft = daysUntilNewYear();
console.log(`There are ${daysLeft} days left until New Year's.`);
