'use strict';

/* 
  BOM -> Browser Object Model
  In JavaScript, the 'window' object represents the current browser window
  or tab. It is a global object that serves as the interface for interacting
  with the user's browser
*/

const url = document.querySelector('.url');
const btn = document.querySelector('button');

// console.log(window.location);

btn.addEventListener('click', () => {
  let res = window.location.href;
  url.innerText = res;
})