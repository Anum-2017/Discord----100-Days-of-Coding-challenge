//Q79 - Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.

  // Create a car object
  const Car = {
    make: "Toyota",
    model: "Camry",
    year: 2023
  };
  
  // Access the model property of the car
  const carModel: string = Car.model;
  console.log("The model of the car is:", carModel);
  