// Exercise 1
let stockPrice = 21.75;
let shares = 300;
let commissionRate = 0.02;

let totalAmount = shares * stockPrice;
let commission = totalAmount * commissionRate;
let amountPaid = totalAmount + commission;

console.log('Amount paid for the stock alone (without the commission): $' + (totalAmount).toFixed(2));
console.log('Amount of the commission: $' + (commission).toFixed(2));
console.log('Total amount paid (for the stock plus the commission): $' + (amountPaid).toFixed(2));
console.log();


//Exercise 2
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

let celsius = 23.0;
let fahrenheit = 73.4;

console.log(celsius + ' Celsius is ' + fahrenheitToCelsius(fahrenheit).toFixed(2) + ' Fahrenheit');
console.log(fahrenheit + ' Fahrenheit is ' + celsiusToFahrenheit(celsius).toFixed(2) + ' Celsius');
console.log();

//Exercise 3
let a = 3, b = 7, c = 12;

let largest = Math.max(a, b, c);

console.log('The largest value is: ' + largest);
console.log();

//Exercise 4
function printMessage(grade) {
    switch (grade) {
        case 'A':
            console.log('Well done');
            break;
        case 'B':
            console.log('That\'s fine');
            break;
        case 'C':
            console.log('You passed, but we are not happy');
            break;
        case 'D':
            console.log('Bye-bye course');
            break;
        case 'F':
            console.log('Rest in peace');
            break;
        default:
            console.log('Invalid grade');
    }
}

let grade = 'C';

printMessage(grade);
console.log();

//Exercise 5
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}