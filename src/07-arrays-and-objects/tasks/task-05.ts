/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */

const studentsName = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
    },
];

const CorrectAnswers = ["A", "B", "C", "A", "B"];

const studentsWithScores = studentsName.map(student => {
    const correctCount = student.answers.reduce((count: number, answer: string, index: number) => {
    return answer === CorrectAnswers[index] ? count + 1 : count;
}, 0);

    
    return {
        ...student,
        score: correctCount * 20
    };
});


const passedStudents = studentsWithScores.filter(student => student.score > 70);


const highestScoreStudent = studentsWithScores.reduce((highest, current) => {
    return (current.score > highest.score) ? current : highest;
}, studentsWithScores[0]);

const totalClassScore = studentsWithScores.reduce((sum, student) => sum + student.score, 0);
const classAverage = totalClassScore / studentsWithScores.length;