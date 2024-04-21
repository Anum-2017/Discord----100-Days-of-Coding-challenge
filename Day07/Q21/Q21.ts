//Q21 - Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Define types for the items
type Item = {
    name: string;
    description: string;
    price: number;
};

// Create objects containing different items
const item1: Item = {
    name: "Laptop",
    description: "Thin and light laptop with powerful performance",
    price: 95000
};

const item2: Item = {
    name: "Smartphone",
    description: "Latest smartphone with high-resolution display and fast processor",
    price: 22000
};

const item3: Item = {
    name: "Headphones",
    description: "Wireless headphones with noise-cancellation feature",
    price: 2000
};

// Print the objects
console.log("Item 1:", item1);
console.log("Item 2:", item2);
console.log("Item 3:", item3);

