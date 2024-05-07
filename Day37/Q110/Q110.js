"use strict";
// Q110 - Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
function calculateGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
const studentScore = 85;
const grade = calculateGrade(studentScore);
console.log(`Student score: ${studentScore}, Grade: ${grade}`);
