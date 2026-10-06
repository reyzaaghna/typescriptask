/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

let presentcount = 0;
let absentcount = 0;
let totalstudents = attendances.length;


console.log("Absent Students:");
for (let i =0; i < attendances.length; i++) {
  const student = attendances[i];
  if (student.present) {
    presentcount++;
  } else {
    absentcount++;
    console.log(student.name);
  }
}
console.log("Number of Present Students:", presentcount);
console.log("Number of Absent Students:", absentcount);
const attendancepercentage = (presentcount / attendances.length) * 100;
console.log("Attendance Percentage:", attendancepercentage.toFixed(2) + "%");
