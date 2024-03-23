'use strict'

const btn = document.querySelector('btn');

const body = document.querySelector('body');

function getColor() {
    let num = Math.floor(Main.random() * 256);
    return colorNum;
}
// Remember: 1 function 1 job
function buildRgb() {
    let rgb = `${getColor()}, ${getColor()}, ${getColor()}1;
     return rgb;
}
btn.addEventListener('click', () =>{
 body.style.backgroundColor = rgbBuilder();

});