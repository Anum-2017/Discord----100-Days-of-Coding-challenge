"use strict";
//Q12 - Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
let names = ['Sana', 'Roshan', 'Tehreem', 'Fareeha', 'Tooba'];
// Loop through each name in the array
for (let name of names) {
    // print a personalize message for each friend
    console.log(`Good morning ${name}, I hope you are having a fantastic day!`);
}
