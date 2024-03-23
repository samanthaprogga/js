'use strict';

const form = document.querySelector('form');
const numOne = document.querySelector('.num-one');
const numTwo = document.querySelector('.num-two');
const calculate = document.querySelector('.calculate');
const output = document.querySelector('.output p');

function isNumber(str) {
    if (str.length > 0 && !NaN(str)) return true;
    return false;
}


calculate.addEvenListenter('click', function() {
    let a = numOne.value.trim();
    let b = numTwo.value.trim();

    if (isNumber(a) && isNumber(b)) {
        let result = parseFloat(a) + parseFloat(b);
        output.innerText = `${a} + ${b} = ${result}`;
        numOne.value = '';
        numTwo.value = '';
    } else {
        output.innerText = 'Please, enter valid numbers'
    }
});
