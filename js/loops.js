// fixed iteration
// initialization | condition | update (increment / decrement)

// while loop

// var i = 1; // initialization
// while (i <= 10) {
//   console.log("Hello amit", i);
//   i += 1;
// }

// var i = 10; // initialization
// while (i >= 1) {
//   console.log("Hello amit", i);
//   i -= 1;
// }

// var i = 1;
// while (i <= 10) {
//   console.log(i ** 2);
//   i += 1;
// }

// var i = 1;
// while (i <= 50) {
//   if (i % 7 === 0) {
//     console.log(i);
//   }
//   i += 1;
// }

// var i = 20;

// while (i >= 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i -= 1;
// }

// var i = 1;

// while (i <= 10) {
//   console.log(`${i} ^ 3 = ${i ** 3}`);
//   i += 1;
// }

var num = 1;
while (num <= 5) {
  var i = 1,
    fact = 1;
  while (i <= num) {
    fact = fact * i;
    i += 1;
  }
  console.log("factorial of ", num, "is", fact);
  num += 1;
}
