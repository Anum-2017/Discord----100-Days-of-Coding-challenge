//Q101 - Generate a random integer between 1 and 10.

function generateRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = generateRandomInt(1, 10);
console.log(randomNumber);
