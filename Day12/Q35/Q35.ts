// Q35 - Animals: Highlight animals with a common trait.

// List of animals with a common characteristic
const animals: string[] = ['Cats', 'Cows', 'Goats'];

// Printing the names of each animal using a for of loop
console.log("List of animals:");
for (const animal of animals) {
    console.log(animal);
}

// Print a statement about each animal
console.log("\nStatements about each animals:");

for (const animal of animals)
{
    if (animal === 'Cats')
    {
        console.log(`${animal} are independent and affectionate companions, adding warmth to any home.`);
    }
    else if (animal === 'Cows')
    {
        console.log(`${animal} are gentle and nurturing animals, offering companionship and sustenance.`);
    }
    else if (animal === 'Goats')
    {
        console.log(`${animal} are playful and charming pets that bring joy to their owners while providing nutritious milk.`);
    }
}

console.log("\nWhat these animals have in common:");
console.log("Any of these animals could be a great pet!");