/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all student's names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students who are present
 * expected array: ["Budi"]
 * 3. Get students who are late
 * expected array: ["Deni"]
 * 4. Generate array that contains {name, status}
 */

const student = [
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

const getStudentName = (id : number) => student.find(s => s.id === id)?.name;

const presentStudentNames = attendance
    .filter(record => record.status === "present")
    .map(record => getStudentName(record.studentId));

const absentStudentNames = attendance
    .filter(record => record.status === "absent")
    .map(record => getStudentName(record.studentId));


const lateStudentNames = attendance
    .filter(record => record.status === "late")
    .map(record => getStudentName(record.studentId));


const studentStatusList = student.map(s => {
    const record = attendance.find(a => a.studentId === s.id);
    return {
        name: s.name,
        status: record ? record.status : "unknown"
    };
});