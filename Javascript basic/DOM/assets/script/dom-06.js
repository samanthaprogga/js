'use strict'


const divOne = document.querySelector('.one');
const divTwo = document.querySelector('.two');

const paraOne = documment.createElement('p');
const contentOne = document.createTextNode('Hello,world');
paraOne.appendChild(contentOne);
divOne.appendChild(paraOne);


let paraTwo = '<p>Check out my latest review</p>';
divTwo.innerHTML = paraTwo;