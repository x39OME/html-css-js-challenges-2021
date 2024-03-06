/*
  Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(Math.min(a,b,c,d)));
console.log(Math.round(Math.min(a, b, c, d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a,2)*(Math.trunc(d)/2)); // 10000
console.log(a ** parseInt(d)); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.floor(d)); // 2
console.log(Math.round(d));
console.log(Math.trunc(d));
console.log(parseInt(d));
console.log(d.toFixed());


// Use Variables b + d To Get This Valus
console.log((Math.trunc(b)/Math.ceil(d)).toFixed(2)); // 66.67 string
console.log(Math.ceil((Math.trunc(b)/Math.ceil(d)))); // 67 number 