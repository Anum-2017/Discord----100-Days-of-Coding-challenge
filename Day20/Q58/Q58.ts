//Q58 - Average Score Calculator: Write a simple program that can take lots of scores and find their average.

function calculateAverage(scores: number[]): number {
    if (scores.length === 0) {
        return 0; 
    }
    const sum = scores.reduce((acc, score) => acc + score, 0);
    return sum / scores.length;
}

// Example usage:
const scores: number[] = [80, 75, 90, 85, 95];
const average = calculateAverage(scores);
console.log("Average score:", average);
