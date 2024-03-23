// Exercise 1
let shares = 300;
let pricePerShare = 21.75;
let commissionRate = 0.02;

// a) Amount paid for the stock alone
let amountPaidForStock = shares * pricePerShare;

// b) Amount of the commission
let commission = amountPaidForStock * commissionRate;

// c) Total amount paid (for the stock plus the commission)
let totalAmountPaid = amountPaidForStock + commission;

// Print the results
console.log("Amount paid for the stock alone: $" + amountPaidForStock.toFixed(2));
console.log("Amount of the commission: $" + commission.toFixed(2));
console.log("Total amount paid: $" + totalAmountPaid.toFixed(2));
