/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct and wrong answer counts.
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * Passing score is 70. Expected analytics:
 * {
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
        wrong: questions.length - correctCount
    };
});

const averageScore = studentScores.length > 0
    ? studentScores.reduce((sum, student) => sum + student.score, 0) / studentScores.length
    : 0;

const scoreValues = studentScores.map(student => student.score);
const highestScore = scoreValues.length > 0 ? Math.max(...scoreValues) : 0;

const lowestScore = scoreValues.length > 0 ? Math.min(...scoreValues) : 0;

const passedStudents = studentScores.filter(student => student.score >= 70).length;

const failedStudents = studentScores.length - passedStudents;

const passRate = studentScores.length > 0
    ? (passedStudents / studentScores.length) * 100
    : 0;

const categoryAverages = [...new Set(questions.map(question => question.category))]
    .map(category => {
        const categoryQuestionIds = questions
            .filter(question => question.category === category)
            .map(question => question.id);
        let correctAnswers = 0;

        submissions.forEach(submission => {
            submission.answers.forEach(answer => {
                if (
                    categoryQuestionIds.includes(answer.questionId) &&
                    correctAnswersMap.get(answer.questionId) === answer.answer
                ) {
                    correctAnswers++;
                }
            });
        });

        const possibleAnswers = categoryQuestionIds.length * submissions.length;
        const averageScore = possibleAnswers > 0
            ? (correctAnswers / possibleAnswers) * 100
            : 0;

        return { category, averageScore: Number(averageScore.toFixed(2)) };
    });

const examAnalytics = {
    totalStudents: studentScores.length,
    averageScore: Number(averageScore.toFixed(2)),
    highestScore: highestScore,
    lowestScore: lowestScore,
    passedStudents: passedStudents,
    failedStudents: failedStudents,
    passRate: Number(passRate.toFixed(2))
};
