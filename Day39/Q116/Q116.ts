//Q116 - Create a switch case that matches several cases to the same code block, representing seasons.

//An enum is a special "class" that represents a group of constants (unchangeable variables).
enum Season {
    Spring,
    Summer,
    Autumn,
    Winter
}

function getSeasonName(season: Season): string {
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

console.log(getSeasonName(Season.Spring)); 
console.log(getSeasonName(Season.Summer)); 
console.log(getSeasonName(Season.Autumn)); 
console.log(getSeasonName(Season.Winter)); 
