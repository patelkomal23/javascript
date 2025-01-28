console.log("HELLO WPRLD!");

document.write("<h1>How are you...?</h1>");

// alert("Good Morning...");

let title=document.getElementById("title");
title.innerHTML ="Welcome to JavaScript...";

let text=document.getElementById("text");
text.innerText = "Lorem ipsum dolor sit amet consectetur";

// let name = prompt("what is you name:-");
// console.log("hello, "+name);

// let user = "komal";
// console.log(`Hello, ${user}!`);

let p = document.createElement("p");
p.textContent = "This is a new paragraph......";
document.body.appendChild(p);

let data = [{ name: "komal", age: 23 }, { name: "payal", age: 20 }];
console.table(data);

