// Q57 - Find the Average Grade: Given a list of grades, calculate the average grade.

function calculateAverageGrade(grades: number[]): number {
    if (grades.length === 0) {
        throw new Error("Empty list of grades provided");
    }

    const sum = grades.reduce((total, grade) => total + grade, 0);
    return sum / grades.length;
}

// Example usage:
const grades = [85, 90, 76, 89, 92];
const averageGrade = calculateAverageGrade(grades);
console.log("Average grade:", averageGrade);
