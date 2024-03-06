/*
  String Manipulation
*/

let a = "Elzero Web School";

/** 1 */

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero


/** 2 */

// 8 H
console.log(a.slice(-4, -3).toUpperCase().repeat(8)); // HHHHHHHH
console.log(a.charAt(13).toUpperCase().repeat(8));



/** 3 */

// Return Array
console.log(a.split("",6)); // ["Elzero"]


/** 4 */

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0, 6)} ${a.substr(11, 6)}`); // Elzero School

/** 5 */

// Solution Must Be Dynamic Because String May Changes

console.log(a.charAt(0).toLowerCase() + a.slice(1, a.length - 1).toUpperCase() + a.charAt(a.length - 1).toLowerCase());
// eLZERO WEB SCHOOl