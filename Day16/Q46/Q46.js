"use strict";
// Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
let laptop = {
    make: "HP",
    model: "Chromebook",
    year: 2023,
    describe: function () {
        console.log(`In ${this.year}, ${this.make} released a ${this.model} model.`);
    }
};
laptop.describe();
