"use strict";
// Q61 - Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
// Making a list (enum) for different types of vehicles
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Trucks"] = 0] = "Trucks";
    VehicleType[VehicleType["Motorcycle"] = 1] = "Motorcycle";
    VehicleType[VehicleType["Cars"] = 2] = "Cars";
    VehicleType[VehicleType["Buses"] = 3] = "Buses";
    VehicleType[VehicleType["Bicycles"] = 4] = "Bicycles";
})(VehicleType || (VehicleType = {}));
// Showing one type of vehicle from the list
console.log(VehicleType.Cars);
