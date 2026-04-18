// A). Basic Operators Arithmetic, Assignment, Increment, Decrement, Comparison, Logical) :-

// 01). Create two numbers a = 10 and b = 3. Perform and log: a + b, a - b, a * b, a / b, a % b.
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// 02). Write: let x = 5; x = x = 3; Now rewrite the same using +=. Do the same for -=, *=, /=.
let x = 5;
// x = x + 3;

console.log(x += 3);
console.log(x -= 3);
console.log(x *= 3);
console.log(x /= 3);
console.log(x %= 3);

// 03). let count = 5; Use count++ and log value before and after. Repeat for count–.
let count = 5;

console.log(count);
count++; // 6
count--; // 5

console.log(count);

// 04). Compare two values: 5 == “5ˮ and 5 === “5ˮ. Observe difference.
console.log(5 == "5"); // because == is only compare values.
console.log(5 === "5"); // because === is compare values with typeof.

// 05). Check if 10 is greater than 5, less than 20, and equal to 10.
let y = 10;

if (y > 5 && y < 20 && y === 10) {
    console.log("true");
} else {
    console.log("false");
}

// 06). Try logical AND and OR: true && false, true || false, !(true)
console.log(true && false);
console.log(true || false);
console.log(!(true));

// 07). Predict the result of: (5 > 3 && 10 > 8), (5 > 3 || 10 < 8)
console.log(5 > 3 && 10 > 8);
console.log(5 > 3 || 10 < 8);

// B). Variable Hoisting in JavaScript :-

// 01). Predict output of: console.log(c); var c = 10
console.log(c); // undefined
var c = 10;

// 02). Predict output of: console.log(d); let d = 10
// console.log(d); // Reference Error
// let d = 10;

// 03). Predict output of: test() function test() { console.log(“Helloˮ) }
test()

function test() {
    console.log("Hello"); // Hello
}

// 04). Try writing a function expression before initialization and call it: hello() var hello = function() { console.log(“Hiˮ) } Write what happened and why.
// hello()

// var hello = function() {
//     console.log("Hi"); // TypeError: hello is not a function
// }
// Because this function is written in var variable so it is going to hoisting condition.

// 05).  Write one sentence: What gets hoisted? What does not get hoisted fully?

// C). Conditional Operators (if, else, else-if, ternary, switch) :-

// 01). Take input using prompt for age.
// If age = 18 = log “Adultˮ.
// Else → log “Minorˮ.
let age = prompt("Enter your age:");

if (age > 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// 02). Write a program:
// If marks >= 90 -> “A gradeˮ
// Else if marks >= 75 -> “B gradeˮ
// Else if marks >= 50 -> “C gradeˮ
// Else → “Failˮ
let marks = prompt("Enter your marks");

if (marks >= 90) {
    console.log("A grade");
} else if (marks >= 75) {
    console.log("B grade");
} else if (marks >= 50) {
    console.log("C grade");
} else {
    console.log("Fail");
}

// 03). Create a variable city = “Bhopalˮ.
// If city is “Bhopalˮ → log “MPˮ
// Else if city is “Delhiˮ → log “Capitalˮ
// Else → log “Unknown Cityˮ
let city = "Bhopal";

if (city === "Bhopal") {
    console.log("MP");
} else if (city === "Delhi") {
    console.log("Capital");
} else {
    console.log("Unknow City");
}

// 04). Use ternary operator:
// Let score = 40.
// If score > 35 -> “Passˮ else “Failˮ using a ternary.
let score = 40;

score > 35 ? console.log("Pass") : console.log("Fail");

// 05). Convert this if-else into a ternary:
// if (temperature > 30) { “Hotˮ } else { “Pleasantˮ}
let temperature;

temperature > 30 ? console.log("Hot") : console.log("Pleasant");


// 06). Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Dayˮ.
// let day = 5;
let day = parseInt(prompt("Enter day number (1 to 7):"));

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");
}

// 07). Using logical operators in condition:
// If age > 18 and country == “Indiaˮ → log “Eligible for Voteˮ
// Else → “Not Eligibleˮ
let age1 = prompt("Enter your age");

if (age1 > 18 && country == "India") {
    console.log("Eligible for Vote");
} else {
    console.log("Not Eligible");
}
