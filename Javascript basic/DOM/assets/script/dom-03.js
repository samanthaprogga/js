'use strict';

const message = document.getElementById('message');
const button = document.querySelector('button');

button.addEventListener('click', function () {
    message.classList.toggle('visible');

    this.innerText = message.classlist.contains('visible')?
        'Hide message' : 'Show message'
});