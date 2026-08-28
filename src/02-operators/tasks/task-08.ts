/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */


const previousMeter: number = 25640;
const currentMeter: number = 25892;
const electricityPricePerKwh: number = 1650;
const solarPanelInstalled: boolean = true;
const energySavingMode: boolean = false;

const energyConsumption: number = currentMeter - previousMeter;
let electricityBill: number = energyConsumption * electricityPricePerKwh;   

let finalBill: number = electricityBill;
if (solarPanelInstalled) {
  finalBill *= 0.8; // Apply 20% discount for solar panel
}
if (energySavingMode) {
  finalBill *= 0.95; // Apply additional 5% discount for energy saving mode
}

const isEligibleForGreenEnergyProgram: boolean = solarPanelInstalled && energyConsumption < 300 && energySavingMode;

console.log("Energy Consumption:", energyConsumption);
console.log("Electricity Bill:", electricityBill);
console.log("Final Bill:", finalBill);
console.log("Eligible for Green Energy Program:", isEligibleForGreenEnergyProgram);