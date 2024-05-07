// Q112 - Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.

// Create a Map to store countries and their capitals
let countryCapitalMap: Map<string, string> = new Map();

// Add countries and their capitals to the Map
countryCapitalMap.set("United States", "Washington, D.C.");
countryCapitalMap.set("United Kingdom", "London");
countryCapitalMap.set("France", "Paris");

// Accessing values from the Map
console.log("Capital of United States:", countryCapitalMap.get("United States"));
console.log("Capital of United Kingdom:", countryCapitalMap.get("United Kingdom"));
console.log("Capital of France:", countryCapitalMap.get("France"));
