/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */
interface Enrollment {
    student: string;
    course: string;
    completed: boolean;
    score: number;
    duration: number;
}
const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];
function getTotalEnrollments(data: Enrollment[]): number {
    return data.length;
}
function getCompletedCount(data: Enrollment[]): number {
    return data.filter(item => item.completed === true).length;
}
function getIncompleteCount(data: Enrollment[]): number {
    return getTotalEnrollments(data) - getCompletedCount(data);
}
function calculateCompletionPercentage(data: Enrollment[]): number {
    if (getTotalEnrollments(data) === 0) return 0;
    return (getCompletedCount(data) / getTotalEnrollments(data)) * 100;
}
function getScoreExtremes(data: Enrollment[]): { highest: number; lowest: number } {
    if (data.length === 0) return { highest: 0, lowest: 0 };
    const scores = data.map(item => item.score);
    return {
        highest: Math.max(...scores),
        lowest: Math.min(...scores)
    };
}
function calculateAverageScore(data: Enrollment[]): number {
    if (data.length === 0) return 0;
    const totalScore = data.reduce((sum, item) => sum + item.score, 0);
    return totalScore / data.length;
}
function getPassedStudentsCount(data: Enrollment[]): number {
    return data.filter(item => item.score >= 75).length;
}
function filterDataByCourse(data: Enrollment[], courseName: string): Enrollment[] {
    return data.filter(item => item.course === courseName);
}
function getTotalLearningHours(data: Enrollment[]): number {
    return data.reduce((sum, item) => sum + item.duration, 0);
}
function calculateAverageDuration(data: Enrollment[]): number {
    if (getTotalEnrollments(data) === 0) return 0;
    return getTotalLearningHours(data) / getTotalEnrollments(data);
}
function printCourseSection(data: Enrollment[], courseName: string): void {
    const courseData = filterDataByCourse(data, courseName);
    const totalEnrolled = getTotalEnrollments(courseData);
    const avgScore = calculateAverageScore(courseData);

    console.log(` - ${courseName.padEnd(12)} : ${totalEnrolled} Students enrolled | Avg Score: ${avgScore.toFixed(2)}`);
}
function printAcademyDashboard(data: Enrollment[]): void {
    const scoreExtremes = getScoreExtremes(data);

    console.log("==================================================================");
    console.log("                ONLINE LEARNING ACADEMY DASHBOARD                 ");
    console.log("==================================================================");
    
    console.log("\n[ COMPLETION STATISTICS ]");
    console.log(`Total Enrollments     : ${getTotalEnrollments(data)}`);
    console.log(`Completed Enrollments : ${getCompletedCount(data)}`);
    console.log(`Incomplete Enrollments: ${getIncompleteCount(data)}`);
    console.log(`Completion Percentage : ${calculateCompletionPercentage(data).toFixed(2)}%`);

    console.log("\n[ ACADEMIC STATISTICS ]");
    console.log(`Highest Score         : ${scoreExtremes.highest}`);
    console.log(`Lowest Score          : ${scoreExtremes.lowest}`);
    console.log(`Average Score         : ${calculateAverageScore(data).toFixed(2)}`);
    console.log(`Students Passed (>=75): ${getPassedStudentsCount(data)} students`);

    console.log("\n[ LEARNING STATISTICS ]");
    console.log(`Total Learning Hours  : ${getTotalLearningHours(data)} hours`);
    console.log(`Avg Learning Duration : ${calculateAverageDuration(data).toFixed(2)} hours`);

    console.log("\n[ COURSE STATISTICS ]");
    printCourseSection(data, "TypeScript");
    printCourseSection(data, "Database");
    printCourseSection(data, "Backend");
}
printAcademyDashboard(enrollments);
