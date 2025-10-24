console.log(bool)

var bool = true;
let num= 42;
const str = "Hello, World!";

console.log("Boolean:", bool);
console.log("Number:", num);
console.log("String:", str);

num = 100;
console.log("Updated Number:", num);

bool = false; // Redeclaring var is allowed
console.log("Redeclared Boolean:", bool);

// str = "New String";  // This would cause an error
// console.log("Redeclared String:", str); // Uncommenting these lines will throw an error

num = 200; // This would cause an  error
console.log("Redecleared Number:", num); // Uncommenting these lines will throw an error