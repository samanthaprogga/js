'use strict';

// Array method I

const justiceLeague = [
    'Thor', 'Batman', 'Wonder-Woman', 'Spider-Man', 'Aquaman', 'Hulk' 
];

/*
    Methods that add and remove element from an array

                  --- --- --- --- ---
    unshift() -> |   |   |   |   |   | <- push()
                 | 0 | 1 | 2 | 3 | 4 |
      shift() <- |   |   |   |   |   | -> pop()
                  --- --- --- ---  ---
                           ^
                        splice()

    pop() and shift() return 'undefined' if the array is empty
    splice(index, n) removes 'n' elements starting at position 'index'
*/

// Removing 'Thor'
justiceLeague.shift();
console.log(justiceLeague);
console.log();

// Removing 'Hulk'
justiceLeague.pop();
console.log(justiceLeague);
console.log();

// Removing an element with splice()
let target = justiceLeague.indexOf('Spider-Man');
justiceLeague.splice(target, 1);
console.log(justiceLeague);

// Adding the element to the beginning of the array
justiceLeague.unshift('Superman');
console.log(justiceLeague);
console.log();

justiceLeague.push('Cyborg');
console.log(justiceLeague);

let index = justiceLeague.indexOf('Batman');
justiceLeague.splice(index + 1, 0, 'Green Lantern');
console.log(justiceLeague)


/*
    Exercise 

    Write a function that converts a decimal number to binary

    8    -> 1000
    15   -> 1111
    145  -> 10010001
    255  -> 11111111
    300  -> 100101100
*/

function toBinary (decimal) {
    const binary = [];
    let bit = 0;
    while (decimal > 0) {
        bit = decimal % 2;
        decimal = parseInt(decimal / 2);
        binary.unshift(bit);
    } 
    console.log(binary.join(''));
}

toBinary(8);
toBinary(15);
toBinary(145);
toBinary(255);
toBinary(300);

console.log();

let decimal = 8;
console.log(decimal.toString(2));
