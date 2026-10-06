/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

let submittedcount = 0;
let notsubmittedcount = 0;
let passedcount = 0;
let revisioncount = 0;
let totalscore = 0; 

for (let i = 0; i < submissions.length; i++) {
    const submission = submissions[i];
    const score = submission.score;
    totalscore += score; 

    if (submission.submitted) {
        submittedcount++;
        
        // Cek kelulusan atau revisi HANYA untuk yang mengumpulkan tugas
        if (score >= 75) {
            passedcount++;
        } else {
            revisioncount++;
            console.log(`- ${submission.student} must revise (Score: ${score})`);
        }
    } else {
        notsubmittedcount++;
        console.log(`- ${submission.student} did not submit assignment`);
    }
}    

const averageScore = totalscore / submissions.length;
console.log("Total Score:", totalscore);
console.log("Average Score:", averageScore.toFixed(2));
console.log("Number of Students Who Submitted:", submittedcount);
console.log("Number of Students Who Did Not Submit:", notsubmittedcount);
console.log("Number of Students Who Passed:", passedcount);
console.log("Number of Students Who Must Revise:", revisioncount);