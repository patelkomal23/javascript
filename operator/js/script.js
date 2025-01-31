console.log("----------Arithmetic-------------");

// arithmetic operator
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log("Multiplication: " + a * b);
console.log("Division: " + a / b);
console.log("Exponetional:" + a ** 2);


console.log("------------Assignment---------------");

//Assignment operator
let m = 15;
let n = 5;

console.log(m = n);
console.log(m += n);
console.log(m == n);
console.log(m *= n);
console.log(m **= n);
console.log(m /= n);
console.log(m %= n);

console.log("-------------Logical------------------");

//Logical operator

let j = 30;
let k = 20;

console.log( j && k);
console.log( j || k);
console.log (!( j == k));

console.log("-------------Comparison------------------");

//Comparison operator 

let h = 10;
let i = 2;

console.log("Value of h & i" + h > i);
console.log("Value of h & i" + h < i);
console.log("Value of h & i" + h >= i);
console.log("Value of h & i" + h <= i);
console.log("Value of h & i" + h == i);
console.log("Value of h & i" + h != i);
console.log("Value of h & i" + h === i);
console.log("Value of h & i" + h !== i);

console.log("-------------------------------");


p = 200;
q = '200';

console.log("p+q= " + p + q);
console.log("p-q= " + p - q);

console.log("------------Swaiping without 3 var----------");

//swaiping without 3 variable
let c = 20;
let d = 30;
console.log("Before swaping c is:" + c);
console.log("Before swaping d is:" + d);
c = c + d;
d = c - d;
c = c - d;

console.log("After swaping c is:" + c);
console.log("After swaping d is:" + d);

console.log("---------------Swaiping with 3 var----------------");

//swaping with third varaible
let x = 12;
let y = 11;
console.log("Before swaping x is:" + x);
console.log("Before swaping y is:" + y);
let temp = x;
x = y;
y = temp;

console.log("After swaping x is:" + x);
console.log("After swaping y is:" + y);

console.log("-------------------------------");


//greade calc
// let marks = parseInt(prompt("Enter marks"));
// let avg = marks;
// console.log("The average marks is: " + avg);

// let grade = avg >= 80 ? 'A' :
//             avg >= 60 ? 'B' :
//             avg > 50 ? 'C' :
//             'Pass class';

// console.log(grade);
