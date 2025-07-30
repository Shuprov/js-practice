// The isNaN() function in JavaScript is used to check whether a value is "Not-a-Number" (NaN). It returns true if the value is NaN or cannot be converted to a number, and false if it’s a valid number or can be coerced into one.


var a = isNaN('11');
console.log(a); //returns false

var b = isNaN(2 - 10);
console.log(b); //returns false

