/*
  Declaration hoisting

  Hoisting refers to yhe process whereby the intertreter appears to move
  the declaration of function, variaibles or classes to the top of their 
  scope, prior to the execution of the code

  In other words, we have another reason to not use 'var'
*/

'use strict';

let valid = true;

if (valid) {
    // var hi;
   console.log(hi); // undefined
   var hi = 'Hi';

}
if (valid) {
    //Error: cannot access 'hi' before initialization
    //console.log(hi);
    console.log(hi); //
    let hi = 'Hi';
   
   }
   