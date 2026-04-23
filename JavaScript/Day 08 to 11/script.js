// What i learn today:-
// 01 understanding of conditional operator :- if, else, else-if, switch, and Ternary Operator.
// 02). What is Loops :- for, while.

// 01 Conditional Statement :-

// if, else :-
let age = 18;
if (age >= 18) {
  console.log("Yes, You are eligble for vote!");
} else {
  console.log("No, You are not eligible for vote!");
}

if (12 > 13 && 10 > 9) {
  console.log("True");
} else {
  console.log("False");
}

// if, else, and else-if :-
// let marks = prompt("Enter your Marks?");
let marks = 95;
if (marks >= 90 && marks <= 100) {
  console.log("A");
} else if (marks >= 80 && marks <= 89) {
  console.log("B");
} else if (marks >= 70 && marks <= 79) {
  console.log("C");
} else if (marks >= 60 && marks <= 69) {
  console.log("D");
} else if (marks >= 50 && marks <= 59) {
  console.log("E");
} else {
  console.log("F");
}

// switch :-
// let day = Number(prompt("Enter a current day of this week?"));
let day = 4;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thrusday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}

// Ternary Operator :-
12 > 13 ? console.log("true") : console.log("false");

// 02). Loops :-

// for :-
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let stars = "";
//     for (let j = 1; j <= i; j++) {
//         stars += "* ";
//     }

//     console.log(stars);
// }

let m = 6;
for (let i = 1; i <= m; i++) {
  console.log("* ".repeat(i));
}

// while :-
let j = 0;
while (j <= 5) {
  console.log(j);
  j++;
}

let O = 6;
let k = 1;
while (k <= O) {
  console.log("* ".repeat(k));
  k++;
}







































// MIxed Extra Questions:-

// let age = prompt("Enter your age!");

// if (age === null) {
//   console.error("You Press the Cancel button!");
// } else {
//   if (age.trim() === "") {
//     console.error("Enter Somthing!");
//   } else {
//     age = Number(age);

//     if (isNaN(age)) {
//       console.error("Enter a Valid Number!");
//     } else {
//       console.log(`This is your ${age}`);
//     }
//   }
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`5 X ${i} = ${5*i}`);
// }

// let table = prompt("Enter a number to print a whole table!");

// for (let i = 1; i <= 10; i++) {
//     console.log(`${table} X ${i} = ${table*i}`);
// }

// let password = "harshbhai";
// let pass = prompt("Enter a correct password");

// if (pass === null) {
//     console.error("you pressed cancel button!");
// } else {
//     if (pass.trim() === password) {
//         console.log("password is matched!");
//     } else {
//         console.log("password is not matched!");
//     }
// }

// let attempt = 0;
// let khulgaya = false;
// let pass = "harshbhai";

// let password = prompt("Enter your correct password!");

// if (password === pass) khulgaya = true;
// attempt++;

// while(password !== pass) {
//     if (attempt === 3) {
//         console.error("Account Locked!");
//         break;
//     }

//     password = prompt("Enter your correct password!");
//     if (password === pass) khulgaya = true;
//     attempt++;
// }

// if (khulgaya === true) console.log("Account Opend!");

// let attempt = 0;
// let shaipassword = "harsh";
// let userpassword = prompt("Enter user password!");
// attempt++;

// while (attempt < 3 && shaipassword !== userpassword) {
//   userpassword = prompt("Enter user password!");
//   attempt++;
// }

// if (attempt === 3 && shaipassword !== userpassword) {
//   console.log("Account Locked!");
// } else {
//   console.log("Done!");
// }

// let word = prompt("Enter the words!");
// let counter = 0;

// while (word !== "stop") {
//   if (word === "yes") counter++;

//   word = prompt("Enter the words!");
// }

// console.log(`total times yes : ${counter}`);

// let evenNumber = Number(prompt("Enter a valid number!"));

// while (evenNumber % 2 !== 0) {
//   evenNumber = Number(prompt("Enter a valid number!"));
// }

// console.log(`This is a even number : ${evenNumber}`);