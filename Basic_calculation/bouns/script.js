let e_name = prompt("Enter your Name");
let role = prompt("Enter your role");
let exp =prompt("Enter your experience"); 
let salary =prompt("Enter your salary");

let bouns = (salary >= 25000 && exp >= 5) ? 0.50 :
            (salary >= 20000 && exp >= 3) ? 0.35 :
            (salary >= 15000 && exp >= 2) ? 0.30 :
            0.10;

let bonus_amount = salary * bouns;

let net_salary = salary + bonus_amount; 

console.log("Your Name is: " + e_name);
console.log("Your Role is: " + role);
console.log("Your Experience is: " + exp + " years");
console.log("Your Salary is: " + salary);
console.log("Your Bonus is: " + bonus_amount);
console.log("Your Total Salary is: " + net_salary);
