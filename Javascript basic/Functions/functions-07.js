'use strict';

/*
    Undertanding arguments II
*/

/*
    In ES, function arguments are always passed by value. It means that SE copies
    the values of the variable into the function arguments. Any changes that you
    make to the arguments inside the function do not reflect the passing 
    variables outside of the function
*/

let num = 5;

function changeNum(num) {
    num = 12;
    console.log(num);
}

changeNum(num);     //
console.log(num);  //?
console.log();


/*
    When passing an object to a function, you are passing the reference of that
    object, not the actual object. Therefore, the function can modify the 
    properties of the object via it reference. However, we cannot change the 
    reference passed into the function
*/

const nums = [1, 2, 3, 4, 5];

function updateArray(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 10;
    }
}

console.log(nums.join(' '));
updateArray(nums);
console.log(nums.join(' '))

// Let's prove the idea above (the past sentence)

function changeObject(obj) {
    obj.age = 23;
    obj.salary = 70;

    // The function cannot assign a new object to the reference
    obj = {
        firstName: 'Steven',
        lastName: 'Jones',
        age: 54
    }

}

const employee = {
    firstName: 'Terry',
    lastName: 'Wallace',
    age : 42
};

console.table(employee);
changeObject(employee);
console.table(employee);