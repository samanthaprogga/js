function checkMultiple(num) {
    if (num % 3 === 0 && num % 7 === 0) {
      console.log(num + ' is a multiple of both 3 and 7');
    } else if (num % 3 === 0) {
      console.log(num + ' is a multiple of 3');
    } else if (num % 7 === 0) {
      console.log(num + ' is a multiple of 7');
    } else {
      console.log(num + ' is not a multiple of 3 or 7');
    }
  }
  
  checkMultiple(9); // Output: 9 is a multiple of 3
  checkMultiple(21); // Output: 21 is a multiple of 7
  checkMultiple(10); // Output: 10 is not a multiple of 3 or 7