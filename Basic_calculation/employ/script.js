let e_name = "Komal";
let B_salary = prompt("Enter Salary : ");
let HRA = 0.50;
let MA = 0.15;
let TA = 0.8;
let DA = 0.8;

let PF = 0.12;
let PT = 200;
let TDS = 0.10;

let gross = B_salary + HRA + MA + TA + DA;
let net_salary = gross - PF - PT - TDS;


console.log("Employe Name:", e_name);
console.log("Basic Salary:", B_salary);
console.log("HRA: ",HRA);
console.log("MA: ",MA);
console.log("TA: ",TA);
console.log("DA: ",DA);
console.log("PF: ",PF);
console.log("PT: ",PT);
console.log("TDS: ",TDS);

