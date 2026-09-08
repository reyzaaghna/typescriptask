/**
 * A student can participate in the graduation ceremony only if all of the following conditions are met:
 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 * 
 * Today, the administration receives the following student information.
| Information  | Value |
| ------------ | ----- |
| Final Score  | 82    |
| Attendance   | 94    |
| Tuition Paid | Yes   |

 * Task: Store and display the result in a variable named "isEligible"

 */

const finalScore: number = 82;
const attendance: number = 94;
const tuitionPaid: boolean = true;

const isEligible: boolean = finalScore >= 75 && attendance >= 90 && tuitionPaid === true;

console.log("GRADUATION ELIGIBILITY CHECK");
console.log(`Final Score: ${finalScore} (Min 75) ${finalScore >= 75}`);
console.log(`Attendance: ${attendance} (Min 90) ${attendance >= 90}`);
console.log(`Tuition Paid: ${tuitionPaid} (Required) ${tuitionPaid === true}`);
console.log(`Is Eligible: ${isEligible}`);