/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type Registration = {
  studentID: string;
  fullName: string;
  gradeLevel: number;
  courseID: string;
  courseTitle: string;
  instructorName: string;
  totalLearningHours: number;
  registrationDate: string;
  isPaymentCompleted: boolean;
};

const registration1: Registration = {
  studentID: "ST2026045",
  fullName: "Reyza Aghna",  
  gradeLevel: 12,
  courseID: "COURSE001",
  courseTitle: "Introduction to Programming",
  instructorName: "Dr. Smith",
  totalLearningHours: 40,
  registrationDate: "2026-08-28",
  isPaymentCompleted: true
};

const registration2: Registration = {
  studentID: "ST2026046",
  fullName: "Aleesya Dania",
  gradeLevel: 11,
  courseID: "COURSE002",
  courseTitle: "Intermediate Python Programming",
  instructorName: "Dr. Johnson",
  totalLearningHours: 40,
  registrationDate: "2026-08-28",
  isPaymentCompleted: false
};

const registration3: Registration = {
  studentID: "ST2026047",
  fullName: "Ryu SunJae",
  gradeLevel: 12,
  courseID: "COURSE003",
  courseTitle: "Advanced JavaScript Programming",
  instructorName: "Dr. Williams",
  totalLearningHours: 40,
  registrationDate: "2026-08-28",
  isPaymentCompleted: true
};

console.log("Registration 1:", registration1);
console.log("Registration 2:", registration2);
console.log("Registration 3:", registration3);