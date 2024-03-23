'use strick';

/*
    Arrays are ordered list of data. In ES, arrays are dynamically sized,
    automatically growing to accomodate any data is added to them, and 
    can hold any type of data
*/

//  Creating an array with the array constructor

const arrayOne = new Array();
console.log(arrayOne);

// Creating an array with 50 empty solts
const arrayTwo = new Array(50);

for (let i = 0; i < 51; i++) {
    arrayTwo[i] = i;
}

const arrayThree = new Array('Banana', 'Apple', 'Grape');
for (let i = 0; i < arrayThree.length; i++) {
    console.log(arrayThree[i]);
}

// We would be using this approach most of the time
const array = ['George', 'Paul', 'John', 'Ringo'];



const arrayFour = new Array(10); 

for (arrayFour[0] = 0; arrayFour[i] < arrayFour.length; arrayFour[i]++) {


}

console.table(arrayFour);

 