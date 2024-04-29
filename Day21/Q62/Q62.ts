// Q62 - Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

interface Student {
    name: string;
    age: number;
    classes: string[];
}

const studentInfo: Student = {
    name: "Maryam",
    age: 20,
    classes: ["Mathematics", "Computer", "Literature"]
};

console.log("Student Information: ");
console.log("Name:", studentInfo.name);
console.log("Age:", studentInfo.age);
console.log("Classes:", studentInfo.classes.join(", "));

