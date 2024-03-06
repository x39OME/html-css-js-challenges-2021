/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let xEmp = 3;
let xAdmins =0;

document.write(`<div>We Have X Admins</div>`);

for(; xAdmins< myAdmins.length ;xAdmins++) {

  if(myAdmins[xAdmins]==="Stop") {
    break;
  }
}
document.write(`<div>We Have ${xAdmins} Admins</div>`);

for(let i =0 ; i< xAdmins ;i++) {
  document.write(`<hr>`);
  document.write(`<div>`);
  document.write(`<div> The Admin for Team ${i+1} Is ${myAdmins[i]} </div>`);
  document.write(`<h3> Team Members:</h3>`);

  for( let j=0 ; j<myEmployees.length;j++) {

    if (myEmployees[j].charAt(0) == myAdmins[i].charAt(0)){

      xEmp++;
      document.write(`<p>- ${xEmp} ${myEmployees[j]}</p>`);
    }
  }
  xEmp=0;
  document.write(`</div>`);
}


