/*
Intro to functions

A function is basically a block of statements that performs a task or
calculates a value. Functions can return values and invoke other functions
*/

'use strict';

//Basic parameterless function
function greetings() {
    console.log('Hi, I am a function');
}

greetings();

//Function with 1 parameter
function greetingsUser(user) {
    console.log('Welcome, ${user}');

}
console.log();
let userOne = 'John Smith';
let userTwo = 'Mary Helen';
// user one and two are arguments
greetingsUser(userone);
// greetingsUser(usertwo);
console.log();

//Function with 2 parameters
function divideNumbers(a, b) {
    let c = 0;

    if (b !==0) {
        c = a/b
        console.log(c);
   }    else {
        console.log('b can\'t be 0 (zero)');
   }
}

divideNumbers(10,5);
divideNumbers(10,0);
divideNumbers(15,3);
console.log();

// Create a single parameter function(name)
// The function will print your full name if name===your name
// else your name Doe
function printFullName(firstName) {
    let fullName = firstName === 'Andre' ? 'Specht' : 'Doe';
    console.log('${firstName} ${lastName}');
}

printFullName('Andre');
printFullName('John');