//Q105 - Simulate a dice roll using JavaScript and return a random integer between 1 and 6.

function rollDice(): number {
    // Generate a random number between 1 and 6
    return Math.floor(Math.random() * 6) + 1;
}

// Test the function
const result: number = rollDice();
console.log("The dice rolled:", result);


