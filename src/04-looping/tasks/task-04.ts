/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales = [
    125000,
    350000,
    78000,
    910000,
    150000,
    420000,
    275000,
    99000,
    640000,
    18000
];

let totalrevenue = 0;
let highesttransaction = sales[0];
let lowesttransaction = sales[0];
let transactionsabove300k = 0;

for (let i = 0; i < sales.length; i++) {
    const transaction = sales[i];
    totalrevenue += transaction;

    if (transaction > highesttransaction) {
        highesttransaction = transaction;
    }

    if (transaction < lowesttransaction) {
        lowesttransaction = transaction;
    }

    if (transaction >= 300000) {
        transactionsabove300k++;    
    }
}