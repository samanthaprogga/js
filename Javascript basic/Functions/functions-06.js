'use strict';

/*
    Understanding arguments I   
*/

function greetings(name) {
    console.log(`Hello, ${name}`);
}

// In ES, functions doesn't care how many argu,ents are passe in, nor 
// does it care about the data types of those arguments
greetings('Robert');
greetings('Robert', 123);
greetings('Robert', 123, true);

/* 
    Non-arrow functions have a local object called 'arguments' 
*/

function multipleArguments() {
    console.log(`Number of arguments: ${arguments.length}`);

    if (arguments.length > 0) {
        for (let i = 0; i < arguments.length; i++){
            console.log(arguments[i]);
        }
    }
}


//  The 'rest' parameter syntax allows you to represent an indefinite number of
//  argument as an array
multipleArguments('Cat', 123, false, new Array(1, 2, 3));



function unlimitedArguments(...rest) {
    for (let element of rest) {
        console.log(element);
    }
}

unlimitedArguments(1, 2, 3, 4, 5, 6, 7);
console.log();

const arrayOne = [1, 2, 3, 4, 5];
const arrayTwo = [...arrayOne];

arrayOne[0] = 1000;

console.log(arrayOne);
console.log(arrayTwo);


// Default arguments
function getProfileStatus(name, admin = false) {
    if (admin) {
        console.log(`You have powers, ${name}`);
    } else{
        console.log(`You are a normal user, ${name}`);
    }
}

getProfileStatus('Clinton');
getProfileStatus('John', true);


function convertTemp (temp, toCelsius = true) {
    if (toCelsius) {
        return `${temp} degree in Fahrenheit is ${Math.ceil((temp * 9/5) + 32)} degree in Celcius`
    } else {
        return `${temp} degree in Celcius is ${Math.ceil((temp * 32) * (5/9))} degree in Fahrenheit`;
    }
}

console.log(convertTemp(45));