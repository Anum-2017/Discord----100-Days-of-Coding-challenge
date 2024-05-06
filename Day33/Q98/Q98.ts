//Q98 - Create a JavaScript snippet that calculates and logs how many days are left until New Year.

function daysUntilNewYear(): number {
    const today: Date = new Date();
    const currentYear: number = today.getFullYear();
    const newYear: Date = new Date(currentYear + 1, 0, 1); // January 1st of next year
    const millisecondsPerDay: number = 1000 * 60 * 60 * 24;
    const daysLeft: number = Math.ceil((newYear.getTime() - today.getTime()) / millisecondsPerDay);
    return daysLeft;
}

const daysLeft: number = daysUntilNewYear();
console.log(`There are ${daysLeft} days left until New Year's.`);

