// Array methods II

'use strict';

const matrix = [
    [11, 12, 13, 14],
    [21, 22, 23, 24],
    [31, 32, 33, 34],
    [41, 42, 43, 44]
];

const flat  = matrix.flat();
console.log(flat);

const a = [1, 2, 2, 3, 4, 4];
const b = [5, 6, 7, 7, 8, 9];

const resultOne = a.concat(b);
const result = [...a, ...b];
console.log(result);


//  Se is an object that ignores duplicate values
const set = new Set(result);
const unique = Array.from(set);
console.log(unique);

const chars = Array.from('MITT');
console.log(chars);
console.log();

//  The at() method takes an integer value and returns the ite, at that index
//  Negative integers count back from the next item in the away

console.log(unique.at(4));
console.log(unique.at(0));
console.log(unique.at(-1));
console.log(unique.at(-2));

console.log(unique.at(-1));
console.log();

for ( let i = 0; i < unique.length; i++) {
//  console.log(unique.length -1 - i); instead of this use the other one
console.log(unique.at(-i -1));
}