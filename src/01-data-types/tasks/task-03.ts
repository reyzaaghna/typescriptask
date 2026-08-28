/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

type Student = {
  studentID: string;
  fullName: string;
  age: number;
  isActive: boolean;
};  

const student1: Student = {
  studentID: "ST2026045",
  fullName: "Reyza Aghna",
  age: 16,
  isActive: true,
};  

const student2: Student = {
  studentID: "ST2026046",
  fullName: "Aleesya Dania",
  age: 15,
  isActive: true,
};

const student3: Student = {
  studentID: "ST2026047",
  fullName: "Ryu SunJae",
  age: 19,
  isActive: true,
};

console.log("Student 1:", student1);
console.log("Student 2:", student2);
console.log("Student 3:", student3);