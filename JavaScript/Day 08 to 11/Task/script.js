// Level 1 – Pure Beginner Practice :-

// 1. Print the numbers from 1 to 10. Loop from 1 to 10 and print each number.
for (let a = 1; a <= 10; a++) {
  console.log(a);
}

// 2. Print only even numbers from 1 to 20. Use a loop and condition to print only even number.
for (let b = 1; b <= 20; b++) {
  if (b % 2 === 0) {
    console.log(b);
  }
}

// 3. print numbers from 10 to 1. Reverse loop with a decrement.
for (let c = 10; c >= 1; c--) {
  console.log(c);
}

// 4. Print the word "Yes" 5 times. Repeat using a loop.
for (let d = 1; d <= 5; d++) {
  console.log("Yes");
}

// 5. Print a whether numbers from 1 to 10 are even or odd. For each number, check: even -> "Even" and odd -> "Odd".
for (let e = 1; e <= 10; e++) {
  if (e % 2 === 0) {
    console.log(`${e} --> Even `);
  } else {
    console.log(`${e} --> Odd`);
  }
}

// 6. Ask user for a number and say if it's positive or negative . Use prompt() and conditional.
// let num = prompt("Koi Bhi Number Batao?");

// if (num >= 0 ) {
//     console.log("Positive");
// } else {
//     console.log("Negative");
// }

// 7. Ask user’s age and check if eligible to vote If age >= 18 → “Eligible”, else → “Not eligible”.
// let age = prompt("Apni Shai Shai umar batao?");

// if (age >= 18) {
//     console.log("You are eligible for voting");
// } else {
//     console.log("You are not eligible for voting");
// }

// 8. Print multiplication table of 5 Use loop to print 5 × 1 to 5 × 10.
let table = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`5 X ${i} = ${5 * i}`);
}

// 9. Count how many numbers between 1 and 15 are greater than 8 Loop and count conditionally.
let count = 0;

for (let f = 1; f <= 15; f++) {
  if (f > 8) {
    console.log(`This is greater then 8 : ${f}`);
    count++;
  }
}
console.log(count);

// 10. Ask user for password and print access status Hardcoded correct password. Compare with user input.
// let Userpassord = prompt("Apna Password Batao?");
// let Shaipassword = "AjeetBhai";

// if (Userpassord !== Shaipassword) {
//     console.log("Password Shai Nahi h!");
// } else {
//     console.log("Password Shai Hai.");
// }

// Level 2 – Slightly Tougher but Logical :-

// 11. Allow only 3 attempts to enter correct password If user gets it right early, stop. If not → “Account locked”.
// let attempt = 0;
// let khulgaya = false;
// let shaiPassword = "AjeetBhaiya";
// let UserPassword = prompt("Apna Password Batao?");

// if (UserPassword === shaiPassword) khulgaya = true;
// attempt++;

// while (UserPassword !== shaiPassword) {
//     if(attempt == 3) {
//         console.error("Account Locked!");
//         break;
//     }

//     UserPassword = prompt("Apna Password Batao?");
//     if (UserPassword === shaiPassword) khulgaya = true;
//     attempt++;
// }

// if (khulgaya === true) console.log("Account Opend!");

// 12. Ask user for words until they type “stop”. Count how many times they typed “yes” Loop until "stop" is typed. Count "yes".
// let word = prompt("Apna Koi Bhi Word Batao?");
// let counter = 0;

// while (word !== "stop") {
//     if (word === "yes") {
//         counter++;
//     }

//     word = prompt("Apna Koi Bhi Word Batao?");
// }

// console.log(`total time "yes" : ${counter}`);

// 13. Print numbers divisible by 7 from 1 to 50 Use modulo % and loop.
for (let g = 1; g <= 50; g++) {
  if (g % 7 === 0) {
    console.log(g);
  }
}

// 14. Sum of all odd numbers from 1 to 30 Add only odd numbers. Print final sum.
let sum = 0;

for (let h = 1; h <= 30; h++) {
  if (h % 2 !== 0) {
    console.log(`Odd Numbers are : ${h}`);
    sum = sum + h;
  }
}
console.log(`total sum of odd numbers are : ${sum}`);

// 15. Keep asking number until user enters an even number Use while loop. Stop only if input is even.
// let UserEvenNumber = Number(prompt("Koi Ek Even Number Batao?"));

// while (UserEvenNumber % 2 !== 0) {
//     UserEvenNumber = Number(prompt("Koi Ek Even Number Batao?"));
// }

// console.log(`Here is a Even Number form User : ${UserEvenNumber}`);

// 16. Print numbers between two user inputs Input start and end using prompt() → print all between.
// let start = prompt("Enter a starting number?");
// let end = prompt("Enter a ending number");

// if (start > end) {
//     console.error("Your entering numbers are invalid!");
// }
// for (let k = 1; k <= end; k++) {
//     console.log(`Here is the numbers whose lies between start and end : ${k}`);
// }

// 17. Print only first 3 odd numbers from 1 to 20 Use loop. Stop with break after 3 odd prints.
let count1 = 0;

for (let j = 1; j <= 20; j++) {
  if (j % 2 !== 0) {
    console.log(`Here is the Odd Numbers : ${j}`);
    count1++;
  }

  if (count1 === 3) {
    break;
  }
}

// 18. Ask user 5 numbers. Count how many are positive Use loop + condition + counter.
// let counter1 = 0;

// for (let l = 1; l <= 5; l++) {
//     let num1 = Number(prompt("Apna Number Batao?"));

//     if (num1 >= 0) {
//         counter1++;
//     }
// }

// console.log(`Here is the total positive numbers : ${counter1}`);

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”
// let balance = 1000;
// let flag = false;

// let counter2 = 0;
// while (balance > 0 && counter2 !== 3) {
//     let withdraw = Number(prompt("Kitna paisa nikal na hai?"));

//     counter2++;

//     if(withdraw <= balance) {
//         balance -= withdraw;
//     } else {
//         flag = true;
//         break;
//     }
// }

// if (flag === true) {
//     console.error("Insufficent Ammount!");
// }

// console.log(`Balance : ${balance}`)
