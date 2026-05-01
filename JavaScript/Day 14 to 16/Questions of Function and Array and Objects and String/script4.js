// String :-

// 1. Print the length of a string.
let str = "Ajeet Singh Kuntal";
console.log(str.length);


// 2. Print last 4 characters using slice().
let str1 = str.slice(14, 18);
console.log(str1);


// 3. Convert a string to lowercase.
console.log(str.toLowerCase());


// 4. Split a string into an array of words.
console.log(str.split(" "));


// 5. Find index of a character using indexOf().
console.log(str.indexOf("Kuntal"));


// 6. Replace a word in a string.
console.log(str.replace("Ajeet", "Ajay"));


// 7. Repeat a string three times.
console.log(str.repeat(3));


// 8. Check if a word exists in a string.
console.log(str.includes("Jaat"));


// 9. Remove all spaces from a string.
console.log(str.split(" ").join(""));


// 10. Count the number of vowels in a string.
let count = 0;

for (let char of str.toLowerCase()) {
  if ("aeiou".includes(char)) {
    count++;
  }
}

console.log(count);

