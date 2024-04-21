"use strict";
// Q30 - Hello Admin: Greet users differently, especially 'admin'.
const userNames = ['Admin', 'Maryam', 'Sania', 'Sana', 'Fareeha', 'Tooba'];
function greetUsers() {
    for (const i in userNames) {
        if (userNames[i].toLowerCase() === 'admin') {
            console.log(`Hello admin, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
        }
    }
}
greetUsers();
