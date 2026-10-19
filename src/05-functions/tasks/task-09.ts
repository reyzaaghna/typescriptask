/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
interface Patient {
    id: string;
    name: string;
    age: number;
    department: string;
    admitted: boolean;
    bill: number;
}
const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];
function getTotalPatients(data: Patient[]): number {
    return data.length;
}
function getAdmittedCount(data: Patient[]): number {
    return data.filter(patient => patient.admitted === true).length;
}
function getDischargedCount(data: Patient[]): number {
    return data.filter(patient => patient.admitted === false).length;
}
function getPatientCountByDept(data: Patient[], deptName: string): number {
    return data.filter(patient => patient.department === deptName).length;
}
function calculateTotalRevenue(data: Patient[]): number {
    return data.reduce((sum, patient) => sum + patient.bill, 0);
}
function getBillExtremes(data: Patient[]): { highest: number; lowest: number } {
    if (data.length === 0) return { highest: 0, lowest: 0 };
    const bills = data.map(patient => patient.bill);
    return {
        highest: Math.max(...bills),
        lowest: Math.min(...bills)
    };
}
function calculateAverageBill(data: Patient[]): number {
    if (data.length === 0) return 0;
    // Menggunakan fungsi total revenue yang sudah ada agar tidak duplikasi perhitungan
    return calculateTotalRevenue(data) / data.length;
}
function getAdmittedPatientNames(data: Patient[]): string[] {
    return data
        .filter(patient => patient.admitted === true)
        .map(patient => patient.name);
}
function printHospitalReport(data: Patient[]): void {
    // Ambil data nilai ekstrem tagihan terlebih dahulu
    const billExtremes = getBillExtremes(data);
    const admittedNames = getAdmittedPatientNames(data);

    console.log("==================================================");
    console.log("             DAILY HOSPITAL REPORT                ");
    console.log("==================================================");
    console.log(`Total Patients         : ${getTotalPatients(data)}`);
    console.log(`Admitted Patients      : ${getAdmittedCount(data)}`);
    console.log(`Discharged Patients    : ${getDischargedCount(data)}`);
    console.log("--------------------------------------------------");
    console.log("Patients by Department:");
    console.log(` - Pediatrics          : ${getPatientCountByDept(data, "Pediatrics")}`);
    console.log(` - Cardiology          : ${getPatientCountByDept(data, "Cardiology")}`);
    console.log(` - Orthopedics         : ${getPatientCountByDept(data, "Orthopedics")}`);
    console.log("--------------------------------------------------");
    console.log(`Highest Hospital Bill  : Rp ${billExtremes.highest.toLocaleString('id-ID')}`);
    console.log(`Lowest Hospital Bill   : Rp ${billExtremes.lowest.toLocaleString('id-ID')}`);
    console.log(`Average Hospital Bill  : Rp ${calculateAverageBill(data).toLocaleString('id-ID')}`);
    console.log(`Total Revenue          : Rp ${calculateTotalRevenue(data).toLocaleString('id-ID')}`);
    console.log("--------------------------------------------------");
    console.log(`Admitted Patients List : ${admittedNames.join(", ")}`);
    console.log("==================================================");
}
printHospitalReport(patients);
