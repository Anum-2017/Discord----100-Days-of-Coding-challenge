"use strict";
//Q45 - Cars: Create detailed car objects with flexible properties.
function createCar(manufacturer, model, ...properties) {
    const car = {
        manufacturer,
        model,
    };
    for (const [key, value] of properties) {
        car[key] = value;
    }
    return car;
}
const myCar = createCar("Toyota", "Corolla", ["color", "red"], ["speed", "280 KM/hour"], ["optional Feature", "sunroof"]);
console.log(myCar);
