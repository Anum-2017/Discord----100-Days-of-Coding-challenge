"use strict";
//Q22 - Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// Intentional error: Trying to access an index out of bounds
console.log(days[7]);
days[6] = "Friday";
