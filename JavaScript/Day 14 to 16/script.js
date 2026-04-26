// What i learn today :-
// 01). More in functions :- [pure function, impure function].
// 02). Understanding scoping in Js :- [Global, Function scope].
// 03). Understanding Closure, Scoping Rule.
// 04). What are Arrays in JS and how to create and Array?
// 05). Understand How to Access elements in Array?
// 06). Functions on Array -- [push, pop, shift, unshift, indexof, array destructuring, filter, some, map, reduce, spread operator, slice, reverse, sort, join, tostring].
// 07). Iterating over Arrays using -- [For loop, forEach].
// 08). Understanding what are objects in JS -- [key-value pair].
// 09). creating objects, Accessing properties, Deleting property and Nested Objects.
// 10). Recognise How objects are stored, Traverse keys of an Objects, Array as object.
// 11). Timing Events -- setTimeout(), set Interval(), clearTimeout(), and clearInterval().
// 12). Operation in objects -- [freeze, seal, destructuring, object methods, this keyword]


// 01). More in functions :- [pure function, impure function] :-

// pure functions :-

function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 15
console.log(add(2, 3)); // 15 (same input → same output)

// impure functions :-

let count = 10;

function add1(a) {
    return a + count;
}

console.log(add1(5)); // 15
count = 20;
console.log(add1(5)); // 25 ❌ (same input but output change)

// 02). Understanding scoping in Js :- [Global scope, Function scope] :-

// Global scopes :-

let name = "Ajay";

function show() {
    console.log(name);
}

show(); // Ajay


// Functional scopes :-

function test() {
    let x = 10;
    console.log(x);
}

test();
// console.log(x); ❌ Error (function ke bahar nahi milega)



// 03). Understanding Closure, Scoping Rule :-

// Closure :-

function outer() {
    let count = 11;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const fn = outer();

fn(); // 1
fn(); // 2
fn(); // 3


// 04). What are Arrays in JS and how to create and Array?

// Two ways to create an arrays :-

// (i). 

let arr = [1, 2, 3, 4, 5];

// // (ii).

let newArray = Array();

// 05). Understand How to Access elements in Array?

arr[0];

// 06). Functions on Array -- [push, pop, shift, unshift, indexof, array destructuring, spread operator, splice, slice, reverse, sort, filter, map, reduce, [some, join, tostring]].

// push :- adding any element in last of an array.

console.log(arr.push(6));

// pop :- remove any element in last of an array.

console.log(arr.pop());

// shift :- remove any element in first of an array.

console.log(arr.shift());

// unshift :- adding any element in first of an array.

console.log(arr.unshift(0));

// indexof :- find index of any element of an array.

console.log(arr.indexOf(3));

// array destructuring :- copy of any element from an array.

let [a, , b, , c] = arr;
console.log(a); // 1
console.log(b); // 3
console.log(c); // 5

// spread operator :- copy of every element from an array to new array. (like a rest function.)

let newArray1 = [...arr];
console.log(newArray1);

// splice :- copy of element from an array.

console.log(arr.splice(0, 3)); 


// slice :- copy of element from an array to new array.

let newArray2 = console.log(arr.slice(0, 4));

// reverse :- This is reverse of an array.

console.log(arr.reverse());

// sort :- It is convert elements of an array in assending and descendig.

let arr2 = [374, 3847, 623, 5, 2, 1];

let newArray3 = arr2.sort(function (a, b) {
    return a - b;
});

// map :- replace every element of an array when we given in return of an function.

let newArray4 = arr.map(function (val1) {
    return 12;
})

// filter :- copy all element of an array to new array when we give a true value in return of an function .

let newArray5 = arr.filter(function (val2) {
    return val2 > 2;
})

// reduce :- it is adding every element of any array and then provide a single value.

let newArray6 = arr.reduce(function (accumulator, val) {
    return accumulator + val;
}, 0);
console.log(newArray6);


// 07). Iterating over Arrays using -- [For loop, forEach].

// forEach :- print every element line by line.

// let newArray4 = arr.forEach(function (val) {
//     console.log(val);
// })

// for loop :-

for (let i = 1; i <=5; i++) {
    console.log(i);
}


// 08). Understanding what are objects in JS -- [key-value pair].



// 09). creating objects, Accessing properties, Deleting property and Nested Objects.

// Creating objects :-

let user = {
    name : "Ajeet",
    age : 20
};

// Accessing properties :-

console.log(user);

// Deleting properties :-

console.log(delete (user.name));

// Nested Objects :-

let person = {
    name : "Ajay",
    age : 20,
    address : {
        village : "Nagla Khari",
        Town : "Sonkh"
    }
};
console.log(person.address.Town);


// 10). Recognise How objects are stored, Traverse keys of an Objects, Array as object ❌.
// 11). Timing Events -- setTimeout(), set Interval(), clearTimeout(), and clearInterval() ❌.
// 12). Operation in objects -- [freeze, seal, destructuring, object methods, this keyword] ❌.