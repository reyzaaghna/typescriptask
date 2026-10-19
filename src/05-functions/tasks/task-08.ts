/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
interface Submission {
    student: string;
    submitted: boolean;
    score: number;
}
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
]; 

function countSubmittedAssignments(submissions: Submission[]): number {
    return submissions.filter(submission => submission.submitted === true).length;
}

function countMissingAssignments(submissions: Submission[]): number {
    return submissions.filter(submission => submission.submitted === false).length;
}

function countPassedStudents(submissions: Submission[]): number {
    return submissions.filter(submission => submission.submitted && submission.score >= 75).length;
}

function countStudentsRequiringRevision(submissions: Submission[]): number {
    return submissions.filter(submission => submission.submitted && submission.score < 75).length;
}

function calculateAverageScore(submissions: Submission[]): number {
    if (submissions.length === 0) return 0;
    const totalScore = submissions.reduce((sum, submission) => sum + submission.score, 0);
    return totalScore / submissions.length;
}

function getScoreExtremeValues(submissions: Submission[]): { highest: number, lowest: number } {
    if (submissions.length === 0) return { highest: 0, lowest: 0 };
    const scores = submissions.map(submission => submission.score);
    return {
        highest: Math.max(...scores),
        lowest: Math.min(...scores)
    };
}

function printLMSReport(submissions: Submission[]): void {
    const extremes = getScoreExtremeValues(submissions);

    console.log("=========================================");
    console.log("       LMS ASSIGNMENT REPORT             ");
    console.log("=========================================");
    console.log(`Total Students            : ${submissions.length}`);
    console.log(`Submitted Assignments     : ${countSubmittedAssignments(submissions)}`);
    console.log(`Missing Assignments       : ${countMissingAssignments(submissions)}`);
    console.log(`Passed Students           : ${countPassedStudents(submissions)}`);
    console.log(`Students Requiring Revision: ${countStudentsRequiringRevision(submissions)}`);
    console.log(`Average Score             : ${calculateAverageScore(submissions).toFixed(2)}`);
    console.log(`Highest Score             : ${extremes.highest}`);
    console.log(`Lowest Score              : ${extremes.lowest}`); 
}