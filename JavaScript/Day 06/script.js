// What i learn today:-
// 01). What is Operators:- Arithmetic, Logical, Comparison, Assignment, Unary and Ternary.
// 02). Type checking operator(typeof, instance of❌), string operator(concatination), Spread❌(Array & Object) / Rest Operator❌(Function) (Very important in modern js), Nullish Coalescing operator❌(Backend), optional chaining(Baad me).
// 03). Variable hositing in js.


// Arithmetic Operator (+, -, *, /, %) :-

let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Comparison Operator (==, ===, !=, !==, >, <, >=, <=) :-

let c = "10";

console.log(a == c);
console.log(a === c);
console.log(a != c);
console.log(a !== c);
console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);

// Assigment Operator (=, +=, -=, /=, *=, %=) :-

console.log(b = a);
console.log(a += 3);
console.log(a -= 3);
console.log(a *= 2);
console.log(a /= 2);
console.log(a %= 2);

// Logical Operator (&&, ||, !) :-

console.log(12 > 10 && 12 > 11);
console.log(12 > 13 || 12 > 11);
console.log(!(12 > 13));

// Ternary Operator (condition ? if true : if false) :-

let d = (12 > 10) ? console.log("True") : console.log("False");

// Unary Operator (+, -, ++, --) :-

let e = 5;
let f = "5";

console.log(+f); // convert string into number
console.log(-f); // add - before the number or string
console.log(e++); // 5
console.log(e); // 6 because e++ is phale number dega aur fir add karega
console.log(++e); // 7 turant add karke number deta h
console.log(e--); // 7 
console.log(e); // 6 because e++ is phale number dega aur fir subtract karega
console.log(--e); // 5 turant subtract karke number deta h

// Type checking operator(typeof, instance of❌) :-
console.log(typeof null); // bugs (object)
console.log(typeof []); // bugs (object)
console.log(typeof {}); // object
console.log(typeof function() {}); // function

// String operator (concatination) :-
let fName = "Ajeet";
let MName = "Singh";
let lName = "Kuntal";
console.log(fName + lName + MName);