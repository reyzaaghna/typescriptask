/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];

const correctAnswersMap = new Map(questions.map(q => [q.id, q.correctAnswer]));

const studentScores = submissions.map(submission => {   
    let correctCount = 0;
    submission.answers.forEach(answer => {
        if (correctAnswersMap.get(answer.questionId) === answer.answer) {
            correctCount++;
        }
    });

    const score = correctCount * 25;
    return {
        student: submission.student,
        score: score,
        correct: correctCount,
        wrong: submission.answers.length - correctCount
    };
});

const averagescore = studentScores.reduce((sum, s) => sum + s.score, 0) / studentScores.length;

const highestScore = Math.max(...studentScores.map(s => s.score));

const lowestScore = Math.min(...studentScores.map(s => s.score));

const passedstudents = studentScores.filter(s => s.score >= 70).length;

const failedStudents = studentScores.length - passedstudents;

const passRate = (passedstudents / studentScores.length) * 100; 

const examAnalytics = {
    totalStudents: studentScores.length,
    averageScore: parseFloat(averageScore.toFixed(2)),  
    highestScore: highestScore,
    lowestScore: lowestScore,
    passedStudents: passedStudents,
    failedStudents: failedStudents,
    passRate: parseFloat(passRate.toFixed(2))
};  


