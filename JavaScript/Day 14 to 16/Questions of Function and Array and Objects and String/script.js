// Functions :-

// 1. Write a function that returns "even" or "odd".
function numbers(nm) {
    if (nm % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(numbers(2));


// 2. Write a function to calculate the area of a circle.
function areaOfCircle(radius) {
    return Math.PI * radius * radius;
}
console.log(areaOfCircle(5));


// 3. Write a function that returns the sum of an array.
function sumArray(arr) {
    let sum = 0;
    for (let a = 0; a < arr.length; a++) {
        sum += arr[a];
    }

    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));


// 4. Write a function to check if a string starts with a character.
function startsWithChar(str, char) {
    return str[0] === char;
}
console.log(startsWithChar("Ajeet", 'A'));


// 5. Write a function that returns the larger of two numbers.
function getLarger(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(getLarger(5, 10));


// 6. Write a recursive function to calculate factorial.
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}
console.log(factorial(5));


// 7. Write a function to reverse a string.
function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}
console.log(reverseString("Ajeet"));


// 8. Write a function that returns the largest number in an array.
function findLargest(arr) {
    let max = arr[0];

    for (let j = 1; j < arr.length; j++) {
        if (arr[j] > max) {
            max = arr[j];
        }
    }

    return max;
}
console.log(findLargest([1, 2, 3, 4, 5, 10, 100]));


// 9. Write a function that converts a string to kebab-case.
function toKebabCase(str) {
    str = str.toLowerCase();
    str = str.replaceAll(" ", "-");

    return str;
}
console.log(toKebabCase("I am Ajeet!"));


// 10. Write a helloWorld function that prints "Hello World"
function helloWorld() {
    console.log("Hello World");
}
helloWorld();
