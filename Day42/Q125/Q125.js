"use strict";
// Q125 - Modify a method in an object to use the this keyword to access another property in the same object.
const rectangle = {
    length: 4,
    width: 5,
    calculateArea: function () {
        return this.length * this.width; // 'this' accesses 'length' and 'width' properties of the object
    },
};
console.log(rectangle.calculateArea());
