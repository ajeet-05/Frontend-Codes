// 🟢 Level 1 – Basic Function, Array & Object Code
// Tasks (Easy)
// 1. Write a function `sayHello()` that prints `"Hello JavaScript"`.
function sayHello() {
    console.log("Hello JavaScript")
}
sayHello();

// 2. Create a function `add(a, b)` that returns their sum and log the result.
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));

// 3. Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`.
function greting(name = "Guest") {
    console.log(`Hi ${name}`);
}
greting();

// 4. Use rest parameters to make a function that adds unlimited numbers.
function addUnlimited(...values) {
    console.log(values);
}
addUnlimited(1, 2, 3, 4, 5);

// 5. Create an IIFE that prints `"I run instantly!"`.
(function abc() {
    console.log("I run instantly!")
})();

// 6. Make a nested function where the inner one prints a variable from the outer one.
function outer() {
    let a = 10;
    function inner() {
        console.log(a);
    }
    inner();
}
outer();

// 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.
let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
console.log(fruits.push("Lichi"));
console.log(fruits.shift());

// 8. Use a `for` loop to print all elements of an array.
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 9. Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.
let person = {
    name : "Ajeet",
    age : 20,
    city : "Mathura"
};
for (let key in person) {
    console.log(key, person[key]);
}

// 10. Use `setTimeout()` to log `"Time’s up!"` after 2 seconds.
setTimeout(function() {
    console.log("Time's up!");
}, 500);



// 🟡 Level 2 – Functional Thinking & Logic Tasks
// (Intermediate)
// 11. Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.
function runTwice(fn) {
    fn();
    fn();
}
runTwice(function() {
    console.log("Hi, Ajeet");
});

// 12. Create one pure function that always returns the same output for a given input, and one impure function using a global variable.
// pure function :- same input and same output.
function abcd(a, b) {
    return a + b;
}
console.log(abcd(2, 3)); // 5
console.log(abcd(2, 3)); // 5

// impure function :-
let count = 0;
function bcd(a) {
    count += a;
    return count;
}
console.log(bcd(2)); // 2
console.log(bcd(2)); // 4


// 13. Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.
function bcde({name, age}) {
    console.log(name, age);
}
bcde({ name : "Ajeet", age : 20});

// 14. Demonstrate the difference between normal function and arrow function when used as object methods (the `this` issue).
const obj = {
  name: "Ajeet",
  normal: function() {
    console.log("Normal:", this.name);
  },
  arrow: () => {
    console.log("Arrow:", this.name);
  }
};

obj.normal(); // Ajeet
obj.arrow();  // undefined

// 15. Given an array of numbers, use `map()` to create a new array where each number is squared.
let arr = [1, 2, 3, 4, 5];
let newArray = arr.map(function(val) {
    return val * val;
});
console.log(newArray);

// 16. Use `filter()` to get only even numbers from an array.
let newArray1 = arr.filter(function(val1) {
    return val1 > 2;
});
console.log(newArray1);

// 17. Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.
let salary = [1000, 2000, 3000];
let newSalary = salary.reduce(function(accu, val2) {
    return accu + val2;
}, 0);
console.log(newSalary);

// 18. Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 chars).
let arr2 = ["Ajeet", "Ak", "Singh", "NK", "HK"];

// some() :-
let newArray3 = arr2.some(function(name){
    return name.length > 3;
});
console.log(newArray3); // true
 
// every() :-
let newArray4 = arr2.every(function(name){
    return name.length > 3;
});
console.log(newArray4); // false

// 19. Create an object `user` and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.
let users = {
    name : "Ajeet"
};
// Object.freeze(users);
Object.seal(users);
users.name = "Ajay";

// 20. Create a nested object (`user → address → city`) and access the city name inside it.
let obj = {
    user : {
        address : {
            city : "Mathura"
        }
    }
};
// phala tariks :-
console.log(obj.user.address.city);
// dusra tarkia :-
let {city} = obj.user.address;
console.log(city);
