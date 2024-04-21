//Q45 - Cars: Create detailed car objects with flexible properties.

function createCar(manufacturer: string, model: string, ...properties: [string, any][]): any {
    const car: any = {
        manufacturer,
        model,
    };
    for (const [key, value] of properties) {
        car[key] = value;
    }
    return car;
}

const myCar: string = createCar("Toyota", "Corolla", ["color", "red"], ["speed", "280 KM/hour"], ["optional Feature", "sunroof"],);

console.log(myCar);