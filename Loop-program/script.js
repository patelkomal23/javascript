//prog-1 Print numbers 1 to 10 using for loop

// let str='';
// for(let i=1;i<=10;i++){
//     str += i+' , ';
// }
// console.log(str);

//prog-2 Print numbers 1 to 10 using while loop

// let str='';
// let i=1;
// while(i<=10){
//     str += i+' , ';
//     i++;
// }
// console.log(str);

//prog-3 Print numbers 1 to 10 using do-while loop

// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<=10);

//prog-4 Sum of first 10 natural numbers (for loop)

// let ans=0;
// for(i=1;i<=10;i++){
//     ans+=i;
// }
// console.log(Answer:${ans});


//prog-5  Sum of first 10 natural numbers (while loop)


// let ans=0;
// let i=1;
// while(i<=10){
//     ans+=i;
//     i++;
// }
// console.log(Answer:${ans});

//prog-6 Sum of first 10 natural numbers (do-while loop)

// let ans = 0;
// let i = 1;
// do {
//  ans += i;
//  i++;
// } while (i <= 10);
// console.log(Answer:${ans});

//prog-7 Print even numbers from 1 to 20

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
// console.log(Factorial : ${f});

//prog-12 Find the sum of digits of a number

// let num = 1234;
// let sum = 0;

// while(num>0){
//     sum = sum + num % 10;
//     num = Math.floor(num/10);
// }
// console.log(`Sum of all digit is : ${sum}`)


// 13) REVERSE A NUMBER
// let num = 321;
// let rev = 0;

// while(num > 0){
//     rev = rev *10 + (num % 10);
//     num = Math.floor(num / 10);
// }

// console.log(`Reversed number is : ${rev}`)

// 14) CHECK IF NUMBER IS PRIME

// let num = 7;
// let prime = true;
//  for(let i=2;i<=Math.sqrt(num);i++){
//     if(num % i === 0){
//         prime = false;
//         break;
//     }
//  }
//  console.log(`${num} is prime ${prime}`)

 // 15) FIBONACCI SERIES UPTO 10 TERM

//  let a = 0;
//  let b = 1;
//  let temp;
//  console.log(a);
//  console.log(b);
 
//  for(let i=2;i<10;i++){
//     temp = a + b;
//     console.log(temp)
//     a = b;
//     b = temp;
//  }

// // 16) FIND LARGEST DIGIT IN NUMBER

// let num = 8375;
// let digit = 0;

// while(num > 0){
//     let digit = num % 10;
//     if(digit > digit){
//         digit = digit;
//     }
//     num = Math.floor(num/10);
    
// }
// console.log(`Largest digit is : ${digit}`)

// 17) CALCUALTE POWER OF NUMBER

// let base = 2;
// let exp = 3;
// let result = 1;

// for(let i=0;i<exp;i++){
//     result = result * base;
// }
// console.log(`${base} raised to ${exp} = ${result}`)

// 18) CHECK IF NUMBER IS ARMSTRONG NUMBER

// let num = 153;
// let sum = 0;
// let temp = num;

// while(temp>0){
//     let digit = temp % 10;
//     sum = sum + digit**3;
//     temp = Math.floor(temp/10);
// }
// console.log(`${num} is armstrong ${sum===num}`)

// 19) GREATEST COMMON DIVISOR (GCD) OF TWO NUMBER

// let a = 48;
// let b = 18;

// while(b!==0){
//     let temp = b;
//     b = a % b;
//     a = temp;
// }
// console.log(`GCD ${a}`);

// 20) LEAST COMMON MULTIPLE (LCM) OF TWO NUMBER

// let a = 12;
// let b = 15;
// let lcm = (a*b)/gcd(a,b);

// function gcd(x,y){
//     while(y){
//         let temp = y;
//         y = x % y;
//         x = temp;
//     }
//     return x;
// }
// console.log(`LCM : ${lcm}`)

// 21) CHECK IF NUMBER IS PALINDROME

// let num = 11011;
// let rev = 0;
// let newNumber = num;
// while(num > 0){
//     rev = rev *10 + (num % 10);
//     num = Math.floor(num / 10);
// }

// if(newNumber === rev){
//     console.log(`Palindrome`);
// }
// else{
//     console.log(`Not`);
// }

// 22) DIAMOND PATTERN USING NESTED LOOP