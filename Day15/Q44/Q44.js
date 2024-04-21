"use strict";
//Q44 - Sandwiches: Summarize sandwich orders with varying ingredients.
function makeSandwich(...items) {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("   - You ordered an empty sandwich. Please add some items.");
    }
    else {
        items.forEach((item, i) => {
            console.log(`   ${i + 1}. ${item}`);
        });
    }
    console.log("\n");
}
// Call the function with different numbers of arguments
makeSandwich();
makeSandwich("Chicken", "Lettuce", "Tomato", "Mayonnaise");
makeSandwich("Beef", "Cheese", "onion");
makeSandwich("Peanut Butter", "Jelly", "Mayonnaise", "Honey");
