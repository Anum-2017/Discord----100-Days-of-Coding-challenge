// Q134 - Take a JSON string and parse it into a JavaScript object.

// Defines a JSON string
const jsonString = '{"name":"Anum","age":25,"city":"Karachi","country":"Pakistan"}';

// Parses the JSON string back into a JavaScript object
const person = JSON.parse(jsonString);

console.log(person); 