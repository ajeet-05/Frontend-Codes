// 01). Variables and Keywords (var, let, const) :-

// 1. Declare your name using all three: var a = “Harsh”; let b = “Sheryians”; const c = “School”
var a = "Ajeet";
let b = "Singh";
const c = "Kuntal";
console.log(a, b, c);
// 2. Try reassigning them: a = “Updated”; b = “Updated”; c = “Updated”
a = "Ajay";
b = "Kuntal";
// c = "Singh"; // This is not reassigning because it is const.
console.log(a, b, c);
// 3. Create a variable inside curly braces using let and log it outside.
{
    let name = "Ajeet";
}

console.log(name); // it is not access beacuse let is only log in inside the braces.
// 4. Predict output before running.
// it is not access beacuse let is only log in inside the braces.
// 5. Write 3 examples where const is useful (like PI, baseURL, etc.)
const PI = 3.1414;
const AdharCardNo = 613512234556;
const baseURL = "example.com";
