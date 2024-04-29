"use strict";
// Q71 - Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
let Name = "Anum";
console.log(Name);
Name = "Kamal";
console.log(Name);
const phoneNumber = 123456789;
console.log(phoneNumber);
try {
    phoneNumber = 2354678968;
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable.");
}
