//Q103 - Write a function that returns a random boolean value, true or false.

function getRandomBoolean(): boolean {
    return Math.random() < 0.5;
}


const randomValue: boolean = getRandomBoolean();
console.log(randomValue); 


