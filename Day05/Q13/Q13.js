"use strict";
//Q13 - Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favoriteTransportation = [];
favoriteTransportation.push(["Motercycle", "Yamaha"]);
favoriteTransportation.push(["Car", "Honda"]);
favoriteTransportation.push(["Electric Scooters", "Xiaomi"]);
favoriteTransportation.forEach(([transport, brand]) => { console.log(`I would like to own a ${brand} ${transport}.`); });
