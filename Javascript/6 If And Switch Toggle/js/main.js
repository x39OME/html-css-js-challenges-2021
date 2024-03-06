/*
  Switch Challenge
*/
/*
let job = "Manager";
let salary = 4000;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}
*/
let job  = "Manager";
let salary = 0;

switch (job) {
  case "Manager":
    salary = 8000;
    console.log(`The Salary Is ${salary}`);
    break;

  case "IT":
  case "Support":
    salary = 6000;
    console.log(`The Salary Is ${salary}`);
    break;

  case "Developer":
  case "Designer":
    salary = 7000;
    console.log(`The Salary Is ${salary}`);
    break;

  default:
    console.log(`The Salary Is ${4000}`);
    break;
};




/*
  If Challenge
*/
/*
let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}
*/

let Holidays = 0;
let Money = 0;

if (Holidays === 0) {
    Money = 5000;
    console.log (`My Money Is ${Money}`)

} else if (Holidays === 1 || Holidays === 2) {
    Money = 3000;
    console.log (`My Money Is ${Money}`)

} else if (Holidays === 3) {
    Money = 2000;
    console.log (`My Money Is ${Money}`)
}