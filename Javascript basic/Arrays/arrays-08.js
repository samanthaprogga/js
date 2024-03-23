/*
    High order functions (array functional methods)
*/

'use strict';

//  The every() method tests weather all elementxs in the array pass the test
//  implemented by the provided function. Its returns a Boolean

const subscriptions = [8, 12, 9, 5, 13, 7];
const costsLessThanTen = subscriptions.every(cost => cost < 10);
console.log(costsLessThanTen);

//  some() checks weather one or more elements pass the test

const subscription = [8, 12, 9, 5, 13, 7];
const LessThanTen = subscription.some(cost => cost < 10);
console.log(LessThanTen);
console.log();

//  The filter()\method creates a new array with all the elements that pass
//  The test implemented by the provided function
const zoo = ['elephant', 'zebra', 'emu', 'tiger', 'eel', 'red panda'];
const condition = animal => animal.startsWith('e');
const animals = zoo.filter(condition);
console.log(animals);
console.log();


const names = ['john', 'adam', 'james', 'susie', 'anthony'];


// The map() method creats a new array populated with the result of 
// calling a provided function on every element in the calling array 
const capitalize = name => name[0].toUpperCase() + name.slice(1);
const capNames = names.map(capitalize);
console.log(capNames);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/*
    The reduce() method execute a user-supplied 'reducer' callback function on 
    each element of the array, in order, passing in the return value from the 
    calcumation on the preceding element. The final result or running the reducer
    across all elements of the array is a single value
*/

const reducer = (accumulator, element) => accumulator + element;
let total = numbers.reduce(reducer, 0);
console.log(total);
