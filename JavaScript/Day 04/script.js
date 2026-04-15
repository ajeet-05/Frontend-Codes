// What i learn today:-
// 01). How to add comments?
// 02). What is DataTypes :- float, number, string, symbol, boolean, null, undefined, NaN, Infinity, relative and primitives dataTypes array, object.

// 01). Adding Commit in JS :-

// console.log("This is an Commit!");

// 02). DataTypes :- Data ka types is called dataTypes.

// Here is the starting point of Primitive DataTypes:-

// float :- Those digits contains an point between numbers.

let float = 12.3;
console.log(float);

// number :- Those digits is written normally.

let number = 12;
console.log(number);

// string :- Combination of characters.

let string = "Ajeet";
console.log(string);

// boolean :- Those numbers is giving true aur false values.

let a = 10;
let b = 20;
console.log(a < b);

// null :- Hame pata to h yaha kya aayge lekin hm use filhal nhi dete.

let name = null;
console.log(name);

// undefined :- Hame nhi pata ki yaha kya aayge;

let nm;
console.log(nm);

// NaN :-

console.log(5%"Ajeet");

// Infinity and -Infinity :-

console.log(1/0);
console.log(-1/0);

// Here is the starting point of Reference/Relative DataTypes:-

// Array[] :-

let hobbies = ["Listing Music", "Coding"];
console.log(hobbies);

// Object{} :-

let UserInfo = {
    name: "Ajeet",
    hobbies: "Coding",
    profession: "Frontend developer"
};

console.log(UserInfo);