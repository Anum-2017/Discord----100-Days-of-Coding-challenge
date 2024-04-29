//Q73 - Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.

function updateVariable() {
    let myVariable: number = 10;   
    console.log("Initial value:", myVariable);

    // Update the variable
    myVariable = 20;
    console.log("Updated value:", myVariable);
}

// Calling the function to see the output
updateVariable();
