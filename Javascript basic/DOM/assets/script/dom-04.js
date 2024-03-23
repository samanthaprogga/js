'use strict';

const list = document.querySelectorAll('li');
/*
    querySelectorAll() returns a NodeList, an array-like struxcture with more 
    than one object (node)
*/
comsole.log(list);

list.forEach(item => {
    item.addEventListener('click', function() {
        alert(`Hi, my name is `)
    })
})