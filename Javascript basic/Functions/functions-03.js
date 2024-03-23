/*
Creating functions
*/

'use strict';

// Functions are typically defined using function-declaration syntex
function getAverage(a,b,c) {
    return (a+b+c)/3;
}

console.log(getAverage(14,19,27));
console.log();

// Functions can be created by a function expression. Such a function
// can be anonymous
const square = function(number) {
   return number * number;
};


const printArray = function(array) {
    array.forEach(element => console.log(element));
}


function recursion(n) {
    if (n>0) {
        console.log(n);
        recursion(n - 1);
    }
}

recursion(4);