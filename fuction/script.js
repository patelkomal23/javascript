//1) Simple by function keyword
// function print() {
//     let num = 20;
//     console.log(num);
// }
// print();

//  2) by using variable name
// let num =25;
// let print = function(){
//       console.log(num);  
// }
// print();

// 3) by using arrow function
// let num=50;

// let print = ()=>{
//      console.log(num);
     
// }
// print();


// 4) IIFE {immediately invoked function expression}
// let num=60;
// (function(){
//  console.log(num);
 
// })();

// 5) Closure nested function

let num = 21;
let printNum1=()=>{
   let num =25;
   let printNum2=()=>{
       let num=30;
       console.log("inner " + num); 
   }
   printNum2();
   console.log("main "+ num);
}
printNum1();
console.log("outer "+ num);

	
// 6) factorial with  function
 

    function fact(val){
        let f1;
        if(val<=1){
            return 1;
        }else{
         f1 = fact(val-1);

        }
        console.log(val + " * " + f1);
        return val * f1;
        
    }
    console.log(fact(0));
    
// 7) Higher order function
function multiplyBy(factor) {
    return function(number) {
    return number * factor;
    };
   }
   const double = multiplyBy(3);
   console.log(double(5)); 


 //  8) setTimeout(function(){
//     let f,f1=0,f2=1;
//     let i = 1;
//     while(i<=5){
//         f = f1;
//         f1 = f + f2
//         f2 = f;
//         document.getElementById('ans').innerHTML += f;
//         i++;
//     }
// },2000);

// 9) setInterval(function(){
//     let f,f1=0,f2=1;
//     let i = 1;
//     while(i<=5){
//         f = f1;
//         f1 = f + f2
//         f2 = f;
//         document.getElementById('ans').innerHTML += f;
//         i++;
//     }
// },5000);
