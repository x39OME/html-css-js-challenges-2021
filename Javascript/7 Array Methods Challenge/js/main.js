/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(0,4).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(my.slice(zero, my.indexOf("Gamal")).reverse());

console.log(my.slice(1,3).reverse()); // ["Elham", "Mazero"]
console.log(my.slice(-5, -3).reverse()); // ["Elham", "Mazero"]

console.log(my[2].slice(0,2) + my[1].slice(2,6)); // "Elzero"

console.log(my[1][4] + zero); // "rO"