/*
    Arrow function

    One function, one job
*/

const printArray = function(list) {
    list.forEach(element => console.log(element));
};

function processArray(list, func) {
    if (Array.isArray(list) && list.length > 0) {
        func(list);
    } else {
        console.log('Enter a non-empty array');
    }
}

const numbers = [6, 2, 9, 5, 0, 1];
processArray(numbers, printArray);