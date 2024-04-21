//Q43 - Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

// Array of magician's names
const magicianNames: string[] = ["Harry Porter", "David Copperfield", "Hermione Granger", "Professor Albus Dumbledore", "Ron Weasley"];

function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = magicians.map(magician => `The Great ${magician}`);
    return greatMagicians;
}

// Modify the array to add "the Great" to each magician's name
const greatMagicianNames: string[] = make_great(magicianNames);

// Call the function to show the original magician's names
console.log("Original Magicians:");
showMagicians(magicianNames);

// Call the function to show the great magician's names
console.log("\nGreat Magicians:");
showMagicians(greatMagicianNames);