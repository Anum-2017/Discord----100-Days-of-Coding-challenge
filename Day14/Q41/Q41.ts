//Q41 - Magicians: Display magician names from an array.

const magicianNames: string[] = ["Harry Porter", "David Copperfield", "Hermione Granger", "Professor Albus Dumbledore", "Ron Weasley"];

function show_magicians(magicians: string[]): void
{
    for (const items of magicians) {
        console.log(items);
    }
}

// Call the function to show the magician's names
show_magicians(magicianNames);