/**
 * A bank evaluates loan applications using the following policy.
 * First Screening
 * Applicants must satisfy both requirements:
 * - Monthly income is at least Rp8,000,000
 * - Credit score is at least 700
 * If they pass the first screening, continue to the second screening.
 * 
 * Second Screening
 * - Existing debt must not exceed 30% of monthly income.
 * - Employment status must be permanent.
 * 
 * 
 * Decision Rules:
 * - Pass both screenings → Loan Approved
 * - Pass first screening only → Manual Review
 * - Fail first screening → Loan Rejected
 * 
 * Today's applicant:
 * | Information        | Value       |
 * | ------------------ | ----------- |
 * | Applicant          | Andi Wijaya |
 * | Monthly Income     | 10000000    |
 * | Credit Score       | 725         |
 * | Existing Debt      | 2500000     |
 * | Permanent Employee | Yes         |
 * 
 * Student Tasks:
 * 1. Declare all variables.
 * 2. Implement both screening stages.
 * 3. Display the loan decision.
 */

const applicant:string = "Andi Wijaya";
const monthlyincome:number = 10000000;
const creditscore:number = 725;
const existingdebt:number = 2500000;
const permanentemployee:boolean = true;

console.log(`Applicant: ${applicant}`);
console.log(`Monthly Income: ${monthlyincome}`);
console.log(`Credit Score: ${creditscore}`);
console.log(`Existing Debt: ${existingdebt}`);
console.log(`Permanent Employee: ${permanentemployee}`);

if (monthlyincome >= 8000000 && creditscore >= 700) {
    if (existingdebt <= 0.3 * monthlyincome && permanentemployee) {
        console.log("Loan Approved");
    } else {
        console.log("Manual Review");
    }
} else { 
    console.log("Loan Rejected");
}
