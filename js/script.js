
// 1
console.log("HELLO WPRLD!");

// 2
document.write("<h1>HELLO CODER...</h1>");

// 3
// alert("Good Morning...");


// 4. innerHTML
let title=document.getElementById("title");
title.innerHTML ="Welcome to JavaScript...";

// 5. innerText / textContent
let text=document.getElementById("text");
text.innerText = "Lorem ipsum dolor sit amet consectetur";


// 6. prompt()
// let name = prompt("what is you name:-");
// console.log("hello, "+name);

// 7. Template Literals (${} in backticks)
// let user = "komal";
// console.log(`Hello, ${user}!`);

// 8. Appending to the DOM
let p = document.createElement("p");  
p.textContent = "This is a new paragraph......";
document.body.appendChild(p);


// 9. console.table()
let data = [{ name: "komal", age: 23 }, { name: "payal", age: 20 }];
console.table(data);

