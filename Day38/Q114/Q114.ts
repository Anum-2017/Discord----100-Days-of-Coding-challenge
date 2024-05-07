// Q114 - Iterate over a Map of student IDs and names, and log each pair to the console.

let studentMap: Map<number, string> = new Map();
studentMap.set(1, "Anum");
studentMap.set(2, "Sana");
studentMap.set(3, "Tuba");

// Iterate over the Map and log each pair
studentMap.forEach((name, id) => {
    console.log(`Student ID: ${id}, Name: ${name}`);
});
