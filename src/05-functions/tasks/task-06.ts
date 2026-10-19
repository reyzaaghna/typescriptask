/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

const sales = [
  125000,
  780000,
  250000,
  99000,
  540000,
  670000,
  180000,
  450000,
  310000,
  820000
];

function calculateTotalSales(sales: number[]): number {
 return sales.reduce((sum, current) => sum + current, 0);
}

function findHighestTransaction(sales: number[]): number {
 if (sales.length === 0) return 0;
    return Math.max(...sales);
}

function findLowestTransaction(sales: number[]): number {
 if (sales.length === 0) return 0;
    return Math.min(...sales);
}

function calculateAverageSale(sales: number[]): number {
if (sales.length === 0) return 0;
    const total = calculateTotalSales(sales); // Memanggil fungsi total yang sudah dibuat
    return total / sales.length;
}

function countLargeTransactions(sales: number[], minimumAmount: number): number {
const largeTransactions = sales.filter(amount => amount > minimumAmount);
    return largeTransactions.length;

}
function displayDashboard(sales: number[]): void {
    console.log("=== DAILY SALES DASHBOARD ===");
    console.log(`Total Sales        : Rp ${calculateTotalSales(sales).toLocaleString('id-ID')}`);
    console.log(`Highest transaction    : Rp ${findHighestTransaction(sales).toLocaleString('id-ID')}`);
    console.log(`Lowest transaction     : Rp ${findLowestTransaction(sales).toLocaleString('id-ID')}`);
    console.log(`Average transaction    : Rp ${calculateAverageSale(sales).toLocaleString('id-ID')}`);
    console.log(`Transactions > Rp500.000  : ${countLargeTransactions(sales, 500000)} transactions`);
}