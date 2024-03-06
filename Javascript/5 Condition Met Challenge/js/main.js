/*
  Condition Met Challenge
*/

/*

let a = 10;
if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}
*/

// If المختصرة
let a = 10;

a < 10 ? console.log(10) 
:  a >= 10 && a <= 40 
? console.log("10 To 40") 
: a > 40 ? console.log("> 40") 
: console.log("Unknown");


// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

// W Position May Change
if ((st.toLowerCase().includes("w") +"w").slice(4) === "w") {
  console.log("Good");
}

if (st.length !== "string") {
  console.log("Good");
}

if (typeof st  === typeof "number") {
  console.log("Good");
}

if (st.slice(0,6)+st.slice(0,6)  === "ElzeroElzero") {
  console.log("Good");
}
