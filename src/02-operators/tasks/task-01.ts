/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

const friedRicePrice: number = 18000;
const mineralWaterPrice: number = 5000;
const friedRiceQuantity: number = 3;
const mineralWaterQuantity: number = 2;
const studentDiscount: number = 10000;

const totalFoodPrice: number = friedRicePrice * friedRiceQuantity;
const totalDrinkPrice: number = mineralWaterPrice * mineralWaterQuantity;
const grandTotal: number = totalFoodPrice + totalDrinkPrice;
const finalPayment: number = grandTotal - studentDiscount;

console.log("STUDENT CAFETARIA RECEIPT");
console.log(`Total Fried Rice Price (3 portions): Rp ${totalFoodPrice}`);
console.log(`Total Mineral Water Price (2 bottles): Rp ${totalDrinkPrice}`);
console.log(`Grand Total Before Discount: Rp ${grandTotal}`);
console.log(`Student Discount: Rp ${studentDiscount}`);
console.log(`Final Payment: Rp ${finalPayment}`);