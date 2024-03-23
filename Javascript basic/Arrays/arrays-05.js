'use strict';

//  Array method II

const beatles = ['George', 'Paul', 'John', 'Ringo'];
console.log(Array.isArray(beatles));

console.log(beatles.join('. '));
console.log();

const pets = ['dog', 'otter', 'cat', 'bird'];
console.log(pets.includes('cats'));          //true
console.log(pets.includes('otter', 2));     //true

const numbers = [9, 7, 1, 8, 3, 6];
numbers.sort();
pets.sort();
console.log(numbers);
console.log(pets);
console.log();

const bills = [99, 102, 95, 109, 96, 56, 89];
bills.sort((a, b) => a - b);
console.log(bills);

bills.reverse();
console.log(bills);


