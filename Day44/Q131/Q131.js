"use strict";
// Q131 -  Create two modules; one that exports a class, and another that imports the class and creates an instance.
Object.defineProperty(exports, "__esModule", { value: true });
// In another file:
const person_1 = require("./person");
const alice = new person_1.Person("Anum");
alice.greet();
