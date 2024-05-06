//Q104 - Create a function that generates a random hexadecimal color code.

function generateRandomHexColor(): string {
    // Generate random R, G, and B values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Convert RGB to hexadecimal
    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');

    // Concatenate the hexadecimal values
    const hexColor = `#${hexR}${hexG}${hexB}`;

    return hexColor;
}

// Example usage:
const randomColor = generateRandomHexColor();
console.log(randomColor); 
