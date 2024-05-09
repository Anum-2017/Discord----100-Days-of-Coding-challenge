// Q131 -  Create two modules; one that exports a class, and another that imports the class and creates an instance.

// In another file:
import { Person } from "./person";

const alice = new Person("Anum");
alice.greet();