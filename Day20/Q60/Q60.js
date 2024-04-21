"use strict";
// Q60 - Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
let userProfile = (function () {
    let name = "Anum";
    let age = 27;
    return {
        displayProfileInfo: function () {
            console.log(`Hello, My name is ${name} and my age is ${age}`);
        }
    };
})();
userProfile.displayProfileInfo();
