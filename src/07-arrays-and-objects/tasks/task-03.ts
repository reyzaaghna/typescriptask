/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all students' names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students' names who are absent
 * expected array: ["Budi"]
 * 3. Get all students' names who are late
 * expected array: ["Deni"]
 * 4. Generate an array that contains {name, status}
 */

const students = [
    { id: 1, name: "Andi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Citra" },
    { id: 4, name: "Deni" },
];

const attendance = [
    { studentId: 1, status: "present" },
    { studentId: 2, status: "absent" },
    { studentId: 3, status: "present" },
    { studentId: 4, status: "late" },
];

const getStudentName = (id: number) => students.find(student => student.id === id)?.name;

const presentStudentNames = attendance
    .filter(record => record.status === "present")
    .map(record => getStudentName(record.studentId))
    .filter((name): name is string => name !== undefined);

const absentStudentNames = attendance
    .filter(record => record.status === "absent")
    .map(record => getStudentName(record.studentId))
    .filter((name): name is string => name !== undefined);

const lateStudentNames = attendance
    .filter(record => record.status === "late")
    .map(record => getStudentName(record.studentId))
    .filter((name): name is string => name !== undefined);


const studentStatusList = students.map(student => {
    const record = attendance.find(attendanceRecord => attendanceRecord.studentId === student.id);
    return {
        name: student.name,
        status: record ? record.status : "unknown"
    };
});