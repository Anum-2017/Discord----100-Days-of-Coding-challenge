"use strict";
//Q15 -Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
let guestList = ["Sana", "Tehreem", "Roshan",];
// Step 1. Print the name of person who can't make it.
let guestHowCantMakeIt = "Tehreem";
console.log(`${guestHowCantMakeIt} can't make it to Dinner. \n`);
// Step 2. Replace the name of guest who cant make it.
let NewGuest = "Fareeha";
let indexOfguestHowCantMakeIt = guestList.indexOf(guestHowCantMakeIt);
if (indexOfguestHowCantMakeIt !== -1) {
    guestList[indexOfguestHowCantMakeIt] = NewGuest;
}
// step 3 Print a second set of invitation messages
console.log("Second set of invitation messages:");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});
