/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let acount = 0;
let bcount = 0;
let ccount = 0;
let dcount = 0;
let highestscore = students[0].score;
let lowestscore = students[0].score;
let totalscore = 0;

for (let i =0; i < students.length; i++) {
    const student = students[i];
    const score = student.score;
    totalscore += score;

    if (score >=90) {
        acount++;
    } else if (score >=80) {
        bcount++;
    } else if (score >=70) {
        ccount++;
    } else {
        dcount++;
    }

    if (score > highestscore) {
        highestscore = score;
    }

    if (score < lowestscore) {
        lowestscore = score;
    }
}

const averagescore = totalscore / students.length;
console.log("Number of A students:", acount);
console.log("Number of B students:", bcount);
console.log("Number of C students:", ccount);
console.log("Number of D students:", dcount);
console.log("Highest score:", highestscore);
console.log("Lowest score:", lowestscore);
console.log("Average score:", averagescore); 