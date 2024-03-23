// Arrow function

'use strict';

/*
    Arrow function is one of the features introduced in the ES6 version 
    of JavaScript. It allows you to create function in a cleaner way 
    compared to regular functions. Arrow functions are best suited for 
    callback functions.
*/

function regFunction(a, b) {
    return a + b;
}

const arrowFunction = (a, b) => {
    return a + b;
};

console.log(regFunction(5, 10));
console.log(arrowFunction(5, 10));

// Arrow functions do not require parentheses if you want 
// to use a single parameter
const powOne = num => {
    return num ** num;
};
console.log(powOne(5));

// Arrow function with no curly braces and 'return keyword
// This is valid when you have a single line of code in the 
// 'block body'
const powTwo = num => num ** num;
console.log(pow(Two));