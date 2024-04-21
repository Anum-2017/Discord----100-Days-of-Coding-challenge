//Q16 - More Guests: You've found a bigger dinner table, so there's room for more guests.

let guestList: Array<string> = [ "Sana", "Fareeha", "Roshan" ];

// Exercise 16 Solution
//Step 1 informing people that you found a bigger dinner table.
for (let guest of guestList) {
    console.log(`Hello, ${guest}, we found a bigger dinner table.`)
}

// step 2 Add a new guest to the beginning of Array.
let newGuestAtBeginnibg: string = "Rabiya" 
guestList.unshift(newGuestAtBeginnibg)

// 3rd step add one guest to the middle of array
let newGuestInMiddle: string = "Tooba"
let middleIndex: number = Math.floor(guestList.length/2)
guestList.splice(middleIndex, 0, newGuestInMiddle)

// 4th step use append() to add new guest to the end of your list
let newGuestAtEnd: string = "Haya"
guestList.push(newGuestAtEnd)

// Final Step Print a new set of invitation messages
console.log("\n New set of invitation messages:")
for(let guest of guestList) 
{
    console.log(`Dear ${guest}, I found a bigger dinner table, so i am inviting more people`)
}