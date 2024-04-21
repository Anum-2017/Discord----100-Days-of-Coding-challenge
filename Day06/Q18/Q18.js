"use strict";
//Q18 - Seeing the World: Think of at least five places you’d like to visit.
// Step 1: Create an array to store Tralve destinations.
let TravelDestinations = ["England", "Paris", "Dubai", "Madina Munawara", "Australia"];
// Print the array in its original order
console.log("Original order:", TravelDestinations);
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order without modifying the actual list:", [...TravelDestinations].sort());
// Show that the array is still in its original order
console.log("Original order after sorting:", TravelDestinations);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...TravelDestinations].sort().reverse());
// Show that the array is still in its original order
console.log("Original order after reverse sorting:", TravelDestinations);
// Reverse the order of the list
TravelDestinations.reverse();
// Print the array to show that its order has changed
console.log("Reversed order:", TravelDestinations);
// Reverse the order of the list again
TravelDestinations.reverse();
// Print the list to show it’s back to its original order
console.log("Original order after double reversing:", TravelDestinations);
// Sort the array so it’s stored in alphabetical order
TravelDestinations.sort();
// Print the array to show that its order has been changed
console.log("Alphabetical order after sorting:", TravelDestinations);
// Sort to change the array so it’s stored in reverse alphabetical order
TravelDestinations.sort((a, b) => b.localeCompare(a));
// Print the list to show that its order has changed
console.log("Reverse alphabetical order after sorting:", TravelDestinations);
