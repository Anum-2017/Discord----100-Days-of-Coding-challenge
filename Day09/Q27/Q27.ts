// Q27 - Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.

// version 1 - where align color is green`
console.log(`1st version where align color is green:`)
let alien_color: string = 'green';
if (alien_color === 'green') {
    console.log('Congratulations! Player just earned 5 points.' );
} 
else if (alien_color === 'yellow') {
    console.log('Congratulations! Player just earned 10 points.');
} 
else if (alien_color === 'red') {
    console.log('Congratulations! Player just earned 15 points.');
} 

//version 2 - where align color is yellow
console.log(`2nd version where align color is yellow:`)
alien_color = 'yellow';
if (alien_color === 'green'){
    console.log('Congratulations! Player just earned 5 points.');
}
else if (alien_color === 'yellow'){
    console.log('Congratulations! Player just earned 10 points.');
}
else if (alien_color === 'red'){
    console.log('Congratulations! Player just earned 15 points.');
}

// 3rd version where align color is red
console.log(`3rd version where align color is red:`)
alien_color = 'red';
if (alien_color === 'green') {
    console.log('Congratulations! Player just earned 5 points.');
} 
else if (alien_color === 'yellow') {
    console.log('Congratulations! Player just earned 10 points.');
} 
else if (alien_color === 'red') {
    console.log('Congratulations! Player just earned 15 points.');
} 

