// 1. Print numbers 1 to 10 using for loop
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// 2. Print numbers 1 to 10 using while loop
//  let i = 1;
//  while(i<=10){
//     console.log(i);
//     i ++;
    
//  }
// 3. Print numbers 1 to 10 using do-while loop
// let i=1;
// do {
//     console.log(i);
//     i++;
    
// } while (i<=10);

// 4. Sum of first 10 natural numbers (for loop)

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//  sum += i;
// }
// console.log("Sum:", sum);

// 5. Sum of first 10 natural numbers (while loop)

// let i=1, sum=0;
// while(i<=10){
//     sum+=i;
//     i++;
    
// }
// console.log("Sum:",sum);

// 6. Sum of first 10 natural numbers (do-while loop)

// let sum = 0, i = 1;
// do {
//  sum += i;
//  i++;
// } while (i <= 10);
// console.log("Sum:", sum);

// 7. Print even numbers from 1 to 20

// let str='';
// for(let i=2;i<=20;i+=2){
//     str+=i +',';
// }
// console.log(str);

//prog-8  Print odd numbers from 1 to 20

// let str='';
// for(let i=1;i<=20;i+=2){
//     str+=i +',';
// }
// console.log(str);

//prog-9 Print multiplication table of 5

// for(let i=1;i<=10;i++){
//     console.log("5*"+i + "=" + 5*i);
// }

//prog-10 Reverse countdown from 10 to 1

// let i=10;
// let str='';
// while(i>=1){
//     str += i+' , ';
//     i--; 
// }console.log(str);

//prog-11 Factorial of a number (for loop)

// let f=1;
// let number=5;
// for(let i=1;i<=number;i++){
//     f*=i;
// }
// console.log(`Factorial : ${f}`);

//prog-12 Find the sum of digits of a number

// let number = 3053, sum = 0;
// while (number>0) {
//  sum += number % 10;
//  number = Math.floor(number / 10);
// }
// console.log(`Sum of digits: ${sum}`);

//prog-13 Reverse a number

// let number = 3053, reverse = 0;
// while (number > 0) {
//  reverse = reverse * 10 + (number % 10);
//  number = Math.floor(number / 10);
// }
// console.log(`reversed number : ${reverse}`);

// 14. Check if a number is prime

// let num = 7, isPrime = true;
// for (let i = 2; i <= Math.sqrt(num); i++) {
//  if (num % i === 0) {
//  isPrime = false;
//  break;
//  }
// }
// console.log(num, "is Prime:", isPrime);

// 15. Print Fibonacci series up to 10 terms

// let a = 0, b = 1, temp;
// console.log(a);
// console.log(b);
// for (let i = 2; i < 10; i++) {
//  temp = a + b;
//  console.log(temp);
//  a = b;
//  b = temp;
// }

// 16. Find the largest digit in a number

// let num = 8375, maxDigit = 0;
// while (num > 0) {
//  let digit = num % 10;
//  if (digit > maxDigit) maxDigit = digit;
//  num = Math.floor(num / 10);
// }
// console.log("Largest digit:", maxDigit);

// 17. Calculate power of a number (a^b)

// let base = 2, exp = 3, result = 1;
// for (let i = 0; i < exp; i++) {
//  result *= base;
// }
// console.log(base, "raised to", exp, "=", result);

// 18. Check if a number is an Armstrong number

// let num = 153, sum = 0, temp = num;
// while (temp > 0) {
//  let digit = temp % 10;
//  sum += digit ** 3;
//  temp = Math.floor(temp / 10);
// }
// console.log(num, "is Armstrong:", sum === num);

// 19. GCD (Greatest Common Divisor) of two numbers

// let a = 48, b = 18;
// while (b !== 0) {
//  let temp = b;
//  b = a % b;
//  a = temp;
// }
// console.log("GCD:", a);

// 20. LCM (Least Common Multiple) of two numbers

// let a = 12, b = 15, lcm = (a * b) / gcd(a, b);
// function gcd(x, y) {
//  while (y) {
//  let temp = y;
//  y = x % y;
//  x = temp;
//  }
//  return x;
// }
// console.log("LCM:", lcm);