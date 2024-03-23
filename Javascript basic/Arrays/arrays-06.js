'use strict';

// Copying an array (shallow copy)

const one = [1, 2, 3, 4, 5];
const two = [...one];

one[0] = 999;

console.log(one);
console.log(two);


const zoo = ['Tiger', 'Elephant', 'Panda'];

// slice returns a shallow copy of an array into a new array object
const anotherZoo = zoo.slice();

console.log(zoo);
console.log(anotherZoo);

const matrix = [
    [11, 12, 13, 14],
    [21, 22, 23, 24],
    [31, 31, 33, 34],
    [41, 42, 43, 44]
];

console.log(matrix);

const newMatrix = [...matrix];
const anotherMatrix = matrix.slice();

matrix[0][0] = 99;

console.log(matrix);
console.log(newMatrix);
console.log(anotherMatrix);

const user = {
    firstName: 'John',
    lastName: 'Smith',
    address: {
        streetNumber: 23,
        streetName: '5th Avenue',
        postalCode: 'R8T3S0'
    }
}

// Here, we are performing a deep copy
const newUser = structuredClone(user);
user.firstName = 'Patrick';
user.address.streetName = '123 Notre Dame Ave';

console.table(user);
console.table(newUser);