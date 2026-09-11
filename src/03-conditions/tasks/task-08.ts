/**
 * An airline automatically determines a passenger's check-in status.
 * Business Rules
 * Step 1
 * If the passenger has not checked in online, display:
 * "Please complete online check-in first.""
 * 
 * Otherwise, continue.
 * Step 2
 * If baggage weight exceeds 20 kg:
 * - Business Class → Extra baggage allowed.
 * - Economy Class → Additional baggage fee required.
 * 
 * Otherwise:
 * Proceed to boarding pass printing.
 * 
 * Passenger Information
 * | Information     | Value         |
 * | --------------- | ------------- |
 * | Passenger       | Fajar Nugroho |
 * | Online Check-in | Yes           |
 * | Cabin Class     | Economy       |
 * | Baggage Weight  | 24 kg         |
 * 
 * Student Tasks
 * 1. Declare all variables.
 * 2. Implement the airline decision process.
 * 3. Display the correct message.
 */

const passenger: string = "Fajar Nugroho";
const onlinecheckin: boolean = true;
const cabinclass: string = "Economy";
const baggageweight: number = 24;

if (!onlinecheckin) {
    console.log("Please complete online check-in first.");
} else {
    if (baggageweight > 20) {
        if (cabinclass === "Bussiness") {
            console.log("Extra baggage allowed.");
        } else if (cabinclass === "Economy") {
            console.log("Additional baggage fee required.");
        }
        if (cabinclass !== "Bussiness" && cabinclass !== "Economy") {
            console.log("Invalid cabin class.");
        } else {
            console.log("Proceed to boarding pass printing.");
        }
    }
}
