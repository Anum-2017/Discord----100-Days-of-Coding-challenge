//Q81 - Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

function logObjectProperties(obj: any) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        console.log(`${prop}: ${obj[prop]}`);
      }
    }
  }
  
  const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2024,
    color: 'Black'
  };
  
  logObjectProperties(car);
  
