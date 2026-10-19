/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */
interface Student {
    name: string;
    major: string;
    active: boolean;
}
const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(students: Student[]): number {
    return students.filter(student => student.active === true).length; 
}

function countInactiveStudents(students: Student[]): number {
    return students.filter(student => student.active === false).length;
}

function countStudentsByMajor(students: Student[], major: string): number {
    return students.filter(student => student.major === major).length;
}

function printEnrollmentReport(students: Student[]): void {
    console.log("=== ENROLLMENT REPORT ===");
    console.log(`Total Students : ${students.length}`);
    console.log(`Active Students : ${countActiveStudents(students)}`);
    console.log(`Inactive Students : ${countInactiveStudents(students)}`);
    console.log(`Software Engineering Students : ${countStudentsByMajor(students, "Software Engineering")}`);
    console.log(`Networking Students : ${countStudentsByMajor(students, "Networking")}`);
    console.log(`Multimedia Students : ${countStudentsByMajor(students, "Multimedia")}`);
}