// A. Variables and Keywords (var, let, const) :-
// 1. Declare your name using all three: var a = “Harsh”; let b = “Sheryians”; const c = “School”
var a = "Harsh";
let b = "Sheryians";
const c = "School";

// 2. Try reassigning them: a = “Updated”; b = “Updated”; c = “Updated”
a = "Updated";
b = "Updated";
c = "Updated"; // this is a const so it is not reassigning.
console.log(c); // Assignment to constant variable.

// 3. Create a variable inside curly braces using let and log it outside.
{
  let d = "Ajeet"; // because it is a block scope so it is not access from the outside of the brackes.
}

// 4. Predict output before running.
console.log(d); //  d is not defined

// 5. Write 3 examples where const is useful (like PI, baseURL, etc.)
const PI = 3.14;
const baseURL = 259347472;
const AdharCardNo = 259347472;

// B. Logging and Interaction (console, alert, prompt) :-
// 1. Log name, age, and city using console.log, console.info, console.warn.
console.log("Ajeet");
console.info(20);
console.warn("Mathura");

// 2. Use prompt to take user’s name → alert a welcome message.
let Username = prompt("Enter your name");
alert(`Welcome to JS lacture ${Username}`);

// 3. Log typeof of user’s input.
console.log(typeof Username);

// 4. Try: let age = prompt(“Enter age:”); console.log(age + 5); observe what happens.
let age = prompt("Enter age: ");
console.log(age + 5);

// C. orking with Strings :-
// 1. let msg = “I love Sheryians”;
let msg = "I love Sheriyans";

// 2. Try msg.slice(2, 6) and predict the result.
console.log(msg.slice(2, 6));

// 3. Try msg.split(” “) and count words.
console.log(msg.split(" "));

// 4. Try msg.replace(“love”, “study at”).
console.log(msg.replace("love", "study at"));

// 5. Template string example: let name = “Harsh”; console.log(Hey ${name}, welcome to JS!)
let nm = "Harsh";
console.log(`Hey ${nm}, welcome to js lactures!`);

// 6. Check if msg.includes(“love”)
console.log(msg.includes("love"));

// D. Statements and Semicolons :-
// 1. Remove semicolon and check if code still runs.
let z = 5;
console.log(z);

// 2. Combine two statements in one line and see if it breaks.
let x = 5;
let y = 10;
console.log(x, y);

// 3. Write 3 console.log statements without semicolons and predict output.
console.log("Ajeet");
console.log("Singh");
console.log("Kuntal");

// E. Comments :-
// 1. Write your name as a single-line comment.
// Ans:- Ajeet Singh Kuntal

// 2. Write a 3-line comment explaining what your code does.

// 3. Hide one console.log using comment and check output.

// F. Expressions vs Statements :-
// 1. Type 5 + 10 (expression).
console.log(5 + 10);

// 2. Type let x = 10; (statement).
let w = 10;
console.log(w);

// 3. Which one gives a value immediately?
// Ans:- second is give immediately value.

// 4. Try: let y = (5 + 10) * 2; console.log(y)
let v = (5 + 10) * 2;
console.log(v);

// 5. Write one line explaining the difference between both.

// G. Data Types :-
// 1. let age = 25; let name = “Harsh”; let isStudent = true; let skills = [“JS”, “HTML”]; let user = { city: “Bhopal” }; let x = null; let y; let z = Symbol(“id”)
let age = 25;
let name = "Harsh";
let isStudent = true;
let skills = ["JS", "HTML"];
let user = { city: "Bhopal" };
let x = null;
let y;
let z = Symbol("id");

// 2. Log typeof each variable.
console.log(typeof age);
console.log(typeof name);
console.log(typeof isStudent);
console.log(typeof skills);
console.log(typeof user);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

// 3. Change one value and recheck typeof.
age = "25";
console.log(typeof age);

// 4. Try adding a number and string together.
console.log("Ajeet" + 5);

// H. Special Values :-
// 1. Log 1 / 0, 0 / 0, Number(“abc”), undefined + 1
console.log(1 / 0);
console.log(0 / 0);
console.log(Number("abc"));
console.log(undefined + 1);

// 2. Write what appears (Infinity, NaN, etc.)

// 3. Write one line explaining when to use null vs undefined.

// I. Primitive vs Reference :-
// 1. let x = 5; let y = x; y = 10; console.log(x, y)
let e = 5;
let f = e;
f = 10;
console.log(e, f);

// 2. let obj1 = { name: “Harsh” }; let obj2 = obj1; obj2.name = “Sheryians”; console.log(obj1.name)
let obj1 = {
  name: "Harsh",
};
obj2 = obj1;
obj2.name = "Sheriyans";
console.log(obj1.name);

// 3. Observe which one changes together.
// Ans:- obj1 is change.

// 4. Draw memory boxes on paper to visualize difference.
