'use strict';

const array = [10, 20, 30, 40, 50];

// Using the classic 'for'
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log();
console.log(array.isAnArray);

console.log();
// Using the 'for..of' loop (no index here)

for (let number of array){
    console.log(number);
}

console.log();

/*
    JS's arrays aren't really arrays, in the usual computer science defination
    of a contigous block of memory divided into fixed-sized units. In JS, arrays 
    are just objects
*/

// USing the 'for..in' loop
for (let property in array){
    console.log(`${property}: ${array[property]}`);
}
console.log();

// Using the forEach() method
array.forEach(function(element) {
        console.log(element);
});
console.log();

// Using an arrow function (better approach)
array.forEach(element => console.log(element));

console.log();

array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
});

console.log();

// Complete version of 'forEach'
// forEach(element, index, referenceToArray) 

array.forEach((element, index, refToArray) => {
//  This function is updating the array via its reference (the 'kite' example)
    refToArray[index] = element / 10;
});
                         