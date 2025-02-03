// Program 1: Check if a number is positive
let num = 10;
if(num>0){
    console.log("Number is Positive");
    
}else{
    console.log("Number is Negative");
    
}
// Program 2: Check if a number is even or odd using if-else
let a = 8;
if(a%2===0){
    console.log("Number is even");
    
}else{
    console.log("Number is odd");
    
}
// Program 3: Check if a number is divisible by both 3 and 5 using nested if
let b = 15;

if(b%3===0){
    if(b%5===0){
        console.log("Number is divisible by both 3 and 5");
        
    }
    else{
        console.log("Number is not divisible by both 3 and 5");
    }
}
else{
    console.log("Number is divisible by only 3");
}
// Program 4: Determine a grade based on the score
let marks = 90;

if(marks>=80){
    console.log('marks: '+ marks + ' Grade: A');
}
else if(marks>=70){
    console.log('marks: '+ marks + ' Grade: B');
}
else if(marks>=60){
    console.log('marks: '+ marks + ' Grade: C');
}
else{
    console.log('marks: '+ marks + ' Grade: Pass');
}
// Program 5: Simple login simulation using nested if statements

let user="komal";
let password="5575";

if(user==="komal"){
    if(password==="5575"){
        console.log("Logine successfully");
        
    }
    else{
        console.log("Invalid Password");
        
    }
}
else{
    console.log("unknow user");
    
}