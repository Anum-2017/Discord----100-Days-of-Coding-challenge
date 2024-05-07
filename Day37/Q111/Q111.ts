// Q111 - Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

function categorizeAge(age: number): string {
    if (age < 13) {
        return "Child";
    } else if (age >= 13 && age <= 19) {
        return "Teenager";
    } else {
        return "Adult";
    }
}

const age1 = 8;
const age2 = 16;
const age3 = 25;

console.log(`Age ${age1} is a ${categorizeAge(age1)}`);
console.log(`Age ${age2} is a ${categorizeAge(age2)}`);
console.log(`Age ${age3} is an ${categorizeAge(age3)}`);
