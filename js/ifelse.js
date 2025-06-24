// var age = parseInt(prompt("Enter your age : "));
// console.log(age >= 18);

// if (age >= 18) {
//   console.log("Eligible to Drive");
// } else {
//   console.log("Not Eligible to Drive");
// }

// var today = parseInt(prompt("Enter the day today : ", "0-6"));
// if (today === 0) {
//   console.log("Sunday");
// } else if (today === 1) {
//   console.log("Monday");
// } else if (today === 2) {
//   console.log("Tuesday");
// } else if (today === 3) {
//   console.log("Wednesday");
// } else if (today === 4) {
//   console.log("Thursday");
// } else if (today === 5) {
//   console.log("Friday");
// } else if (today === 6) {
//   console.log("Saturday");
// } else {
//   console.log("Invalid day");
// }

// var name = prompt("Enter your name : ").toLowerCase();
// var age = parseInt(prompt("Enter your age : "));

// if (age >= 18) {
//   if (name[0] == "a") {
//     console.log("Welcome", name);
//   } else {
//     console.log("Not Invited");
//   }
// } else {
//   console.log("Not Eligible for party");
// }

// var age = parseInt(prompt("Enter your age : "));
// var city = prompt("Enter your city : ").toLowerCase();

// if(age >= 21 && city === "delhi"){
//     console.log("Eligible for metro travel")
// }
// var char = prompt("Enter your character : ").toLowerCase();
// if (
//   char === "a" ||
//   char === "e" ||
//   char === "i" ||
//   char === "o" ||
//   char === "u"
// ) {
//   console.log("Vowel");
// } else {
//   console.log("Not a Vowel");
// }
// var username = prompt("Enter your username : ").toLowerCase();
// var password = prompt("Enter your password : ");
// if (username === "admin" && password === "1234") {
//   console.log("Correct");
// } else {
//   console.log("Not Correct");
// }

// var char = prompt("Enter your character : ").toLowerCase();
// if (char.length === 1) {
//   if (
//     char === "a" ||
//     char === "e" ||
//     char === "i" ||
//     char === "o" ||
//     char === "u"
//   ) {
//     console.log("Vowel");
//   } else {
//     console.log("Not a Vowel");
//   }
// } else {
//   console.log("Character must be of length : 1");
// }

// var today = parseInt(prompt("Enter the day today : ", "0-6"));
// switch (today) {
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid Day");
//     break;
// }

// var char = prompt("Enter a character : ").toLowerCase();

// switch (char) {
//   case "a":
//     console.log("Vowel");
//     break;
//   case "e":
//     console.log("Vowel");
//     break;
//   case "i":
//     console.log("Vowel");
//     break;
//   case "o":
//     console.log("Vowel");
//     break;
//   case "u":
//     console.log("Vowel");
//     break;
//   default:
//     console.log("Consonant");
//     break;
// }

// 0-4 : free
// 5-10 : 2
// 11-14 : 5
// 15 or more : 10

// var age = parseInt(prompt("Enter your age : "));
// if (age >= 15) {
//   console.log("$10");
// } else if (age >= 11 && age <= 14) {
//   console.log("$5");
// } else if (age >= 5 && age <= 10) {
//   console.log("$2");
// } else if (age >= 0 && age <= 4) {
//   console.log("Free");
// } else {
//   console.log("Invalid Age ");
// }

// switch (age) {
//   case 0:
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//     console.log("FREE");
//     break;

//   case 5:
//   case 6:
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//     console.log("$2");
//     break;
//   case 11:
//   case 12:
//   case 13:
//   case 14:
//     console.log("$5");
//     break;

//   default:
//     console.log("$10");
//     break;
// }

// var marks = parseInt(prompt("Enter your marks : "));
// switch (true) {
//   case marks > 90 && marks <= 100:
//     console.log("A");
//     break;
//   case marks > 80 && marks <= 90:
//     console.log("B");
//     break;
//   case marks > 70 && marks <= 80:
//     console.log("C");
//     break;
//   case marks >= 60 && marks <= 70:
//     console.log("d");
//     break;
//   case marks >= 0 && marks < 60:
//     console.log("fail!");
//     break;
//   default:
//     console.log("Invalid");
//     break;
// }

// Task 4: Electricity Bill Slab
// ===============================
// Ask the user to enter units of electricity used.
// Use if-else to determine the cost per unit:
// - 0-50 units    → ₹3 per unit
// - 51-150 units  → ₹5 per unit
// - 151-250 units → ₹7 per unit
// - Above 250     → ₹10 per unit
// Display: "Your rate is ₹X per unit."

// var units = parseInt(prompt("Enter units of electricity used : "));
// if (units > 250) {
//   console.log("₹10 Per Unit");
// } else if (units >= 151 && units <= 250) {
//   console.log("₹7 Per Unit");
// } else if (units >= 51 && units <= 150) {
//   console.log("₹5 Per Unit");
// } else if (units >= 0 && units <= 50) {
//   console.log("₹3 Per Unit");
// } else {
//   console.log("Invalid Units");
// }
