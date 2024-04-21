//Q48 - Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

const laptopsSet1: number[] = [1200, 1800, 2200, 2600, 3000];
const laptopsSet2: number[] = [1600, 2000, 1400, 2400, 2800];

const combinedLaptops: number[] = [...laptopsSet1, ...laptopsSet2].sort((a, b) => a - b);

console.log(combinedLaptops);

