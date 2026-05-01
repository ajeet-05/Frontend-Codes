// Loops :-

// 1. Print numbers from 1 to 50 using a for loop?
for (let a = 1; a <= 10; a++) {
    console.log(a);
}


// 2. Calculate the sum of numbers from 1 to 10 using a while loop?
let b = 1;
let sum = 0;

while (b <= 10) {
    sum += b;
    console.log(sum); // This console is give the sum of every digit.
    b++;
}
// console.log(sum); // This console is give the sum of all numbers in single line.


// 3. Print each character of "JavaScript" using for...of?
let character = "JavaScript";
for (let char of character) {
    console.log(char);
}


// 4. Print odd numbers from 1 to 20 using continue?
for (let c = 1; c <= 20; c++) {
    if (c % 2 === 0) continue;
    console.log(c);
}


// 5. Print numbers from 5 to 1 using do...while?
let d = 5;
do {
    console.log(d);
    d--;
} while (d >= 1);


// 6. Calculate the factorial of 5 using a loop?
let fact = 1;

for (let e = 1; e <= 5; e++) {
    fact *= e;
    console.log(fact); // This console is give a factorial of all numbers in every line.
}
// console.log(fact); // This console is give a factorial of all numbers in single line.


// 7. Print a 3×3 grid using nested loops?
for (let f = 1; f <= 3; f++) {
    let rows = "";
    for (let g = 1; g <= 3; g++) {
        rows += "* ";
    }
    console.log(rows);
}


// 8. Reverse an array manually using a loop?
let arr = [1, 2, 3, 4, 5];
let reverse = [];

for (let h = arr.length - 1; h >= 0; h--) {
    reverse.push(arr[h]);
}
console.log(reverse);


// 9. Print numbers between 1–100 divisible by 5?
for (let i = 1; i <= 100; i++) {
    if (i % 5 !== 0) continue;
    console.log(i);
}


// 10. Print the multiplication table of 7 using a loop?
let number = 7;

for (let j = 1; j <= 10; j++) {
    console.log(`${number} x ${j} = ${number * j}`);
}
