
// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
  // Parse input values to only allow integers
  basicSalary = parseFloat(basicSalary);
  benefits = parseFloat(benefits);

  // Calculate gross salary
  let grossSalary = basicSalary + benefits;

  // Calculate PAYE Tax
  let payee = 0;
  if (grossSalary <= 24000) {
    payee = grossSalary * 0.1; // Up to 24,000
  } else if (grossSalary <= 32333) {
    payee = 24000 * 0.1 + (grossSalary - 24000) * 0.25; // 24,001 - 32,333
  } else if (grossSalary <= 500000) {
    payee = 24000 * 0.1 + 8333 * 0.25 + (grossSalary - 32333) * 0.3; // 32,334 - 500,000
  } else if (grossSalary <= 800000) {
    payee = 24000 * 0.1 + 8333 * 0.25 + 467667 * 0.3 + (grossSalary - 500000) * 0.325; // 500,001 - 800,000
  } else {
    payee = 24000 * 0.1 + 8333 * 0.25 + 467667 * 0.3 + 300000 * 0.325 + (grossSalary - 800000) * 0.35; // Above 800,000
  }
  payee = Math.floor(payee);

  // Calculate NHIF deductions
  let NHIFDeductions = Math.floor(basicSalary * 0.015);

  // Calculate NSSF deductions
  let NSSFDeductions = Math.floor(basicSalary * 0.06);

  // Calculate net salary
  let netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;

  // Display the net salary
  console.log(`
    Your payee is ${payee}
    Your gross salary is ${grossSalary}
    Your NHIF Deduction is ${NHIFDeductions}
    Your NSSF Deduction is ${NSSFDeductions}
    Your net salary is: Ksh. ${netSalary}
  `);
}

calculateNetSalary(200000, 0);