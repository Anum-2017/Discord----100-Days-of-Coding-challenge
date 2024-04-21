"use strict";
//Q17 - Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
let guestList = ['Fareeha', 'Sana', 'Tooba', 'Tehreem', 'Roshan', 'Haya'];
// message about invitng only two people.
console.log(`I can invite only two people for dinner.`);
// 2nd step
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry, ${removeGuest}, I can't invite you to dinner.`);
}
//3rd step
for (let guest of guestList) {
    console.log(`\n Hello, ${guest}, you are still invited to dinner!`);
}
console.log(guestList);
// 4th step
// Removing last two
guestList.pop();
guestList.pop();
// print empty string
console.log(`Final Guest list for dinner:`, guestList);
