'use strict';

/*
    Getting access to HTML elements

    Methods available in the 'document' object
    -getElementById()
    -querySelector()
    -querySelectorAll()
*/

const sectionById = document.getElementById('id-section');

// querySelector() allows us to target elements by their names, id's and 
// classes. This method is more flexible that 'getElementById()'
const sectionByClass = document.querySelection('.class-section');
const sectionByElementName = document.querySelection('section');

//  console.log(sectionGetById);
//  console.log(sectionGetByClass);
//  console.log(sectionById);
//  console.log(sectionByElementName);

//  Events
const paragraphOne = document.getElementById('one');
const paragraphTwo = document.getElementById('two');
const paragraphThree = document.getElementById('three');

//  Fucntion to change color of pragraph one    (bad approach)
function toPurple() {
    paragraphOne.style.color = '#b84eff';
}

//  Function to change the color of paragraph two (better)
paragraphTwo.onclick = function() {
    // More about 'this' later. Stay tuned :)
    this.style.color = '0f9';
};

//  Function to change the color of paragraph three (best)
//  Using an event listener
paragraphThree.addEventListener('click', function() {
    this.style.color = '#f90';
});
