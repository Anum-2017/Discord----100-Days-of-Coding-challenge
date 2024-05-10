//Q145 - Create a function that accepts a callback and invokes it with some arguments.

function executeCallback(
    callback: (arg1: number, arg2: number) => void,
    arg1: number,
    arg2: number
  ): void {
    callback(arg1, arg2); // Invokes the callback with the specified arguments
  }
  
  // Example callback function that adds two numbers
  const add = (a: number, b: number) => {
    console.log(a + b); // Outputs the sum of a and b
  };
  
  executeCallback(add, 5, 3); 