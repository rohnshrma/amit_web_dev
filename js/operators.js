// var x = 23;
// var y = 3;

// arithmetic operators
// console.log(x + y); //plus
// console.log(x - y); // minus
// console.log(x * y); // multi
// console.log(x / y); // div (quotient)
// console.log(x % y); // div (remainder)
// console.log(x ** y); // exponent

var x = 23; // assignment

// x = x + 10;

// console.log((x += 10)); // add and assign
// console.log((x -= 10)); //  sub and assign
// console.log((x *= 10)); //  multi and assign
// console.log((x /= 10)); //  quotient and assign
// console.log((x %= 10)); //  remainder and assign
// console.log((x **= 10)); //  power and assign

console.log(12 > 10);
console.log(12 < 10);
console.log(12 <= 10);
console.log(12 >= 10);

// equals to (value)
console.log(12 == "12");
// strict  equals to (value and dt)
console.log(12 === "12");

// not equals
console.log(12 != "12");
// strict not equals
console.log(12 !== "12");

// logical operators :
// and or and not
// and : &&
// or : ||
// not : !

console.log(12 > 10 && 10 < 12); // t && t = t
console.log(12 < 10 && 10 < 12); // f && t = f
console.log(12 < 10 && 10 > 12); // f && f = f

console.log(12 > 10 || 10 < 12); // t || t = t
console.log(12 < 10 || 10 < 12); // f || t = t
console.log(12 < 10 || 10 > 12); // f || f = f

console.log(!true);
console.log(!false);
