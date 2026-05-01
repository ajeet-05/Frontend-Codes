// Conditional Statements :-

// 1. Return "positive", "negative", or "zero" for a number?
let number = 5;

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// 2. Convert Celsius to Fahrenheit using a function?
function celcius(c) {
    return f = c * ( 9 / 5) + 32;
}
console.log(celcius(5));


// 3. Return the average of numbers in an array?
function getAverage(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

console.log(getAverage([10, 20, 30, 40])); 


// 4. Check if a string is a palindrome?
let str = "madam";
let reverseStr = str.split().reverse().join('');

if (str === reverseStr) {
    console.log("Palindrome");
} else {
    console.log("No");
}


// 5. Check whether a number is prime?
function isPrime(n) {
    if (n <= 1) {
        console.log("Not a Prime");
    }

    for (let a = 2; a < n; a++) {
        if (n % a === 0) {
            console.log("Not a Prime");
        }
    }

    return "prime";
}

console.log(isPrime(3));
console.log(isPrime(10));


// 6. Count total words in a sentence?
function countWords(cw) {
    let words = cw.split('');
    return words.length;
}

console.log(countWords("I Love Js!"));


// 7. Return the longest word from a string?
function findLongestWord(str) {
  let words = str.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(findLongestWord("I love programming"));


// 8. Remove falsy values from an array?
function removeFalsy(arr) {
  let result = [];

  for (let value of arr) {
    if (value) {  // truthy check
      result.push(value);
    }
  }

  return result;
}

console.log(removeFalsy([0, "hello", false, "", 25, null]));


// 9. Convert a string to camelCase?
function toCamelCase(str) {
  let words = str.toLowerCase().split(" ");

  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join("");
}

console.log(toCamelCase("hello world"));
console.log(toCamelCase("convert to camel case"));


// 10. Generate a random number between two values?
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandom(1, 10));
