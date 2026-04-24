// What i learn today :-
// 01). Loop :- do-while, break and continue, (for-each, for-in, for-of ❌ ---> this is in Array's and Object's).
// 02). Recursion in JS ❌.
// 03). Function's in JS :- Understanding functions in js and why its widely used --> [Parameters, Arguments, Rest Operator, hositing, variable Hositing, function Hositing].
// 04). Parameters in Js :- [required, destructured, rest, default].
// 05). Arguments in Js :- [Positional, default, spread].
// 06). Classic function, Nested function (function in function), scope chain in JS.
// 07). Understanding of Immediately Invoked function Expression (IIFE).
// 08). More in functions :- [Arrow function, fat Arrow, Anonymous, Higher Order, Callback, first class, pure function, impure function].
// 09). Understanding scoping in Js :- [Global, Function scope].
// 10). Understanding Closure, Scoping Rule.

// 01). Loops :-

// do-while loop :-

let a = 1;
do {
    console.log(a);
    a++;
} while (a <= 10);

// break and continue statements :-

// break :-

for (let b = 1; b <= 10; b++) {
    // console.log(b); // ye sirf 5 tak hi print karga aur fir 5 ke baad break kar jayega.
    if (b === 5) {
        break;
    }
    console.log(b); // ye sirf 4 tak hi print karega aur fir 4 ke baad break kar jayega.
}

// continue :-

for (let c = 1; c <= 10; c++) {
    if (c === 5) {
        continue;
    }
    console.log(c);
}

// 02). Function's in JS :- Understanding functions in js and why its widely used --> [Parameters, Arguments, Rest Operator, hositing, variable Hositing, function Hositing].
// 
// How to create a functions ;-

function abcd() {
    console.log("Hey, Ajeet!");
}

abcd();

// Parameters and Arguments :-

function efgh(firstName, middleName, lastName, luckyNumber) { // Parameters
    console.log(firstName, middleName, lastName, luckyNumber); // Pahla tarika
    // console.log(arguments); // Dusra Tarika
}

efgh("Ajeet", "Singh", "Kuntal", "Jaat", 5); // Arguments

// Rest Operator :-

function ijkl(...values) {
    console.log(values);
}

ijkl(1, 2, 3, 4, 5);

// variable Hositing and function Hositing :-

// variable Hositing :-

console.log(f); // undefined

var f = 12;

console.log(g); // Reference error : g is not defined

let g = 10;

// function Hositing :-

// Expression hoisting function :-

mnop();

function mnop() {
    console.log("Hey, Ajeet");
}

// Decelaration hositing function :-

qrst(); // TypeError : qrst is not a function

var qrst = function () {
    console.log("Hey, Ajeet!");
}

// 03). Parameters in Js :- [required, destructured, rest, default].

// required :-

function stuv(a, b, c, d) {
    console.log(a, b, c,d);
}
stuv();

// destructured :-

function uvwx({ name, age}) {
    console.log(name, age);
}
uvwx({ name : "Ajeet", age : 20});

// rest :-

function wxyz(...val) {
    console.log(val);
}
wxyz(1, 2, 3, 4, 5);

// default :-

function yzab(a = 1, b = 2, c = 3, d = 4) {
    console.log(a, b, c, d);
}
yzab();

// 04). Arguments in Js :- [Positional, default, spread].

// positional :- is me ham kis bhi jagah ko khali nhi chod sakthe jabki us jagha me cahye to null ya aur kuch likhna pad jaye.

function zabc(a, b, c, d, e) {
    console.log(a, b, c, d, e);
}
zabc(1, 2, null, 4, 5);

// spread :-

function abcde(a, b, c, d, e) {
    console.log(a, b, c, d, e);
}
let arr = [1, 2, 3, 4, 5];
abcde(...arr);

// 05). Classic function, Nested function (function in function), scope chain in JS.

// Classic function and Nested function (function in function) :-

function bcdefg() {
    function cdefgh() {
        console.log("cdefgh chale ga!");
    }
    cdefgh();
}
bcdefg();

// scope chain :-

let h = 12;
function bcdef() {
    let i = 10;
    function cdefg() {
        console.log(i);
    }
    cdefg();
}
console.log(h);
bcdef();

// 06). Understanding of Immediately Invoked function Expression (IIFE).

(function() {
    balance = 1000; // ReferenceError: balance is not defined
})();

// 07). More in functions :- [Arrow function, fat Arrow, Anonymous, Higher Order, Callback, first class.].

// Arrow function and fat Arrow ;-

let fun = () => {
    console.log("Hey, Ajeet!");
}
fun();

// Anonymous :- Bina naam ka function.

function() {
    console.log("Hey, Ajeet!"); // Error : they have no name.
};

// Higher order function :-

function cdefghi() { // Pahal Tarika
    return function() {

    }
}

function defgh() { // Dusra Tarika

}
defgh(function() {

});

// Callback :-

function efghi(a) {

}
efghi(function () {

});

// first class :-

let func = function() {

}
