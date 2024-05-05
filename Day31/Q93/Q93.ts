// Find the index of "Banana" in an array of fruits and replace it with "Mango".

let fruits: string[] = ["Apple", "Banana", "Orange", "Grapes"];
let index: number = fruits.indexOf("Banana");

if (index !== -1) {
    fruits[index] = "Mango";
}

console.log(fruits); 