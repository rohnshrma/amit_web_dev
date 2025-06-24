// 1. Create and Log an Array: Create an array of 5 favorite fruits and use forEach to log each fruit to the console.
// var fruits = ["apple", "banana", "cherry", "avacardo", "grapes"];
// fruits.forEach((fruit) => {
//   console.log(fruit);
// });

// 2. Double Numbers: Create an array of numbers [1, 2, 3, 4, 5]. Use forEach to create a new array with each number doubled.

// var double = [];
// var nums = [1, 2, 3, 4, 5];
// nums.forEach((n) => {
//   double.push(n * 2);
// });
// console.log(double);

// 3. Filter Even Numbers: Create an array of numbers [1, 2, 3, 4, 5, 6, 7, 8]. Use forEach to collect even numbers into a new array and log it.

// var evens = [];
// var nums = [1, 2, 3, 4, 5, 6, 7, 8];
// nums.forEach((n) => {
//   if (n % 2 === 0) {
//     evens.push(n);
//   }
// });
// console.log(evens);

// 4. Sum of Array: Create an array of numbers [10, 20, 30, 40]. Use forEach to calculate and log the sum of all elements.
// var sum = 0;
// var nums = [10, 20, 30, 40];
// nums.forEach((n) => {
//   sum += n;
// });

// console.log(sum);

// 5. Uppercase Strings: Create an array of strings ["hello", "world", "js"]. Use forEach to create a new array with all strings in uppercase.

// var upper = [];

// var words = ["hello", "world", "js"];
// words.forEach((w) => {
//   upper.push(w.toUpperCase());
// });
// console.log(upper);

// 6. Index Logging: Create an array ["cat", "dog", "bird"]. Use forEach to log each element along with its index (e.g., "0: cat").

// var pets = ["cat", "dog", "bird"];
// pets.forEach((pet, index) => {
//   console.log(pet, index);
// });

// 7. Append String: Create an array ["sun", "moon", "star"]. Use forEach to create a new array where each string has "!" appended.
// var updated = [];
// var words = ["sun", "moon", "starts"];

// words.forEach((word) => {
//   updated.push(word + "!");
// });

// console.log(updated);

// 8. Count Lengths: Create an array of strings ["apple", "bat", "car"]. Use forEach to create a new array containing the length of each string.

// var lengths = [];
// var words = ["apple", "bat", "car"];
// words.forEach((w) => {
//   lengths.push(w.length);
// });

// console.log(lengths);

// 9. Multiply by Index: Create an array of numbers [2, 3, 4, 5]. Use forEach to create a new array where each number is multiplied by its index.

// var multi = [];
// var nums = [2, 3, 4, 5];
// nums.forEach((n, i) => {
//   multi.push(n * i);
// });

// console.log(multi);

// 10. Reverse Array: Create an array [1, 2, 3, 4, 5]. Use forEach to create a new array with elements in reverse order.

// var rev = [];
// var nums = [1, 2, 3, 4, 5];

// nums.forEach((num) => {
//   rev.unshift(num);
// });

// console.log(rev);

// var nums = [23, 4, 34, 34, 23, 34];
// var tirplets = nums.map((n) => {
//   return n * 3;
// });
// console.log(tirplets);

// var numbers = ["1", "2", "3"];
// var ths = numbers.map((num) => {
//   return num + "th";
// });
// console.log(ths);

// filter

var marks = [12, 45, 3434, 5, 65, 34, 43, 4, 3, 5, 45];
var evens = marks.filter((mark) => {
  return mark % 2 === 0;
});

console.log(evens);

var names = ["adil", "aman", "ashok", "baban", "sahil", "sumit"];
var as = names.filter((name) => {
  return name[0].toLowerCase() == "a";
});

console.log(as);
