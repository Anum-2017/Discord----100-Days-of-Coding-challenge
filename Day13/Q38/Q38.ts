// Q38 - Cities: Describing cities with a function.

function describe_city(city: string, country: string = "Pakistan"){

    console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities

describe_city("Karachi", "Pakistan");
describe_city("Lahore"); 
describe_city("Berlin", "Germany");