"use strict";
//Q116 - Create a switch case that matches several cases to the same code block, representing seasons.
//An enum is a special "class" that represents a group of constants (unchangeable variables).
var Season;
(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Autumn"] = 2] = "Autumn";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
function getSeasonName(season) {
    switch (season) {
        case Season.Spring:
            return "It's warm and sunny!";
        case Season.Summer:
            return "It's warm and sunny!";
        case Season.Autumn:
            return "It's getting cooler, leaves are changing color.";
        case Season.Winter:
            return "It's cold outside, time to bundle up!";
        default:
            return "Invalid season";
    }
}
console.log(getSeasonName(Season.Spring)); // Output: It's warm and sunny!
console.log(getSeasonName(Season.Summer)); // Output: It's warm and sunny!
console.log(getSeasonName(Season.Autumn)); // Output: It's getting cooler, leaves are changing color.
console.log(getSeasonName(Season.Winter)); // Output: It's cold outside, time to bundle up!
