"use strict";
// Q129 - Explain how this behaves differently in arrow functions compared to traditional functions.
const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value);
    },
    arrowFunction: () => {
        console.log("Arrow function:", this.value);
    },
};
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();
