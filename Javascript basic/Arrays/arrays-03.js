'use strict';

// Multidimensional arrays

// Creating a 2D arrayx
const matrix = [
    [11, 12, 13, 14],
    [21, 22, 23, 24],
    [31, 31, 33, 34],
    [41, 42, 43, 44]
];


console.log(matrix.length);
console.log();

for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
        console.log(matrix[i][j]);
    }
}

console.log();

// Usimg the following loops to print only '11, 22, 33, 44'
for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
        if (i === j) {
            console.log(matrix[i][j])
        }
    }
}
console.log();

// Print the element using only the 'forEach' method

matrix.forEach(array => {
    array.forEach(number => {
        console.log(number);
    });
});
console.log();

const test = [1, 2, 3];
console.log(test.join(', '));
console.log();

// Avoid this. We did it just for testing
test[8] = 9;


for (let i = 0; i < test,length; i++) {
    console,log(test[i]);
}
console.log();

// forEach ignores the empty (aka undefinite) values
// It's JavaScript, baby!
test.forEach((element , index) => {
    console.log(`Index: ${index} | Element: ${element}`)
});