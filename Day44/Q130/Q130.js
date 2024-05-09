"use strict";
//Q130 - Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
const mathFunc_1 = require("./mathFunc");
console.log((0, mathFunc_1.add)(2, 3));
