/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */

const custname: string = "Nadia Putri";
const ispremiummember: boolean = true;
const isroomavailable: boolean = false;

if (isroomavailable) {
    if (ispremiummember) {
        console.log("Congratulations! You have received a free room upgrade.");
    } else {
        console.log("Your reserved room is ready");
    }
} else {
    if (ispremiummember) {
        console.log("You have been placed on the priority waiting list.");
    } else {
        console.log("We apologize, but no rooms are available at the moment.");
    }

}    
    
    
    
