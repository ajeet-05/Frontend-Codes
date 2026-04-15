// What i learn today:-
// 01). var, let and const?
// 02). console.... promot alert?
// 03). string kya hoti h?
// 04). slice, template string(template literals), split, replace and includes?
// 05). statement expression?

// 01). var, let and const :-
// var :-
// var a;// decalaration
// a = 5; // initialization
// var a = 5; // decalaration and initialization

// a = 10; // reinitialization

// var a = 10; // redecalaration

// let :-

// let b; // decalaration
// b = 5; // initialization
// let b = 5; // redecalaration not allowed in let.


// b = 10; // reinitialization


// const :-

// const ak = 10; // decalaration and initialization

// const ak = 5; // redecalaration and reinitialization is not allowed in const.



// 02). console.... prompt alert :-

// prompt alert :-

// let name = prompt ("Enter your nm");

// console :-

// console.log(name);
// console.error(name);
// console.warn(name);
// console.info(name);

// console.table() :-

// let user = {
//     name: "Sheriyans",
//     email: "hello@gmail.com",
//     course: "JS"
// };

// console.table(user);

// console.group() and console.groupEnd() :-

// console.group("User Info");
// console.log("Name : Ajeet");
// console.log("Course : Cohort 2.0");
// console.groupEnd();

// console.time() and console.timeEnd() :-

// console.time("loopTime");
// for(let i = 0; i < 1000; i++) {}
// console.timeEnd("loopTime");

// console.clear() :-

// console.clear();

// strings :-

let name = "Ajeet";

// slice, template string(template literals), split, replace and includes :-

// slice() :-
console.log(name.slice(0, 3));

// template string(template literals) :-
console.log(`Hello, ${name}!`);

// split :-

let fruits = "apple, grapes, mango";
console.log(fruits.split(","));

// replace() :-

console.log(name.replace("A", "K"));

// includes() :-

console.log(name.includes("Kuntal"));
