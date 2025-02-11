// Program 1: Check if a number is positive
let num = 10;
if (num > 0) {
    console.log("Number is Positive");

}
else {
    console.log("Number is Negative");

}
// Program 2: Check if a number is even or odd using if-else
let a = 8;
if (a % 2 === 0) {
    console.log("Number is even");

}
else {
    console.log("Number is odd");

}
// Program 3: Check if a number is divisible by both 3 and 5 using nested if
let b = 15;

if (b % 3 === 0) {
    if (b % 5 === 0) {
        console.log("Number is divisible by both 3 and 5");

    }
    else {
        console.log("Number is not divisible by both 3 and 5");
    }
}
else {
    console.log("Number is divisible by only 3");
}
// Program 4: Determine a grade based on the score
let marks = 90;

if (marks >= 80) {
    console.log('marks: ' + marks + ' Grade: A');
}
else if (marks >= 70) {
    console.log('marks: ' + marks + ' Grade: B');
}
else if (marks >= 60) {
    console.log('marks: ' + marks + ' Grade: C');
}
else {
    console.log('marks: ' + marks + ' Grade: Pass');
}
// Program 5: Simple login simulation using nested if statements

let user = "komal";
let password = "5575";

if (user === "komal") {
    if (password === "5575") {
        console.log("Login successfully");

    }
    else {
        console.log("Invalid Password");

    }
}
else {
    console.log("Unknown user");

}
// Program 6: Classify temperature as hot, warm, or cold
let temp = 5;
if (temp >= 30) {
    console.log("temperature: " + temp + " temperature is hot");

}
else if (temp >= 20) {
    console.log("temperature: " + temp + " temperature is Warm");
}
else {
    console.log("temperature: " + temp + " temperature is cold");
}
// Program 7: Determine day of the week from a number (1 = Monday, 7 = Sunday)
let number = 2;
let day = "tuesday";
if (number === 1 && day === "monday") {
    console.log("Day Number: " + number + " Day Name: " + day);

} else if (number === 2 && day === "tuesday") {
    console.log("Day Number: " + number + " Day Name: " + day);

}
else if (number === 3 && day === "wednesday") {
    console.log("Day Number: " + number + " Day Name: " + day);

}
else if (number === 4 && day === "thursday") {
    console.log("Day Number: " + number + " Day Name: " + day);

}
else if (number === 5 && day === "friday") {
    console.log("Day Number: " + number + " Day Name: " + day);

}
else if (number === 6 && day === "saturday") {
    console.log("Day Number: " + number + " Day Name: " + day);

}
else if (number === 7 && day === "sunday") {
    console.log("Day Number: " + number + " Day Name: " + day);

}
else {
    console.log("invalid...");

}
// Program 8: Determine discount eligibility based on membership and spending
let member = true;
let spending = 500;

if (member) {
    if (spending > 100) {
        console.log("Amount is: " + spending + " You get a 20% discount.");
    }
    else {
        console.log("Amount is: " + spending + " You get a 10% discount.");
    }
}
else {
    console.log("No discount available for non-members.");
}
// Program 9: Check if a string is empty

let str = "";
if (str === "") {
    console.log("String is empty");

}
else {
    console.log("String is not empty");
}
// Program 10: Determine if a year is a leap year

let year = 2004;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("year: " + year + " is a leap year.");
}
else {
    console.log("year: " + year + " is not a leap year.");
}
// Program 11: Check if both numbers are positive using nested if
let x = 10;
let y = -20;

if (x > 0) {
    if (y > 0) {
        console.log("x: " + x + " &" + " y: " + y + " Both numbers are positive.");
    }
    else {
        console.log("x: " + x + "is Positive" + " y: " + y + " but y is not positive")
    }
}
else {
    console.log("x: " + x + " x is not positive.");
}
// Program 12: Determine the season based on the month (1-12)
let month = 11;
let season = "";
if (month === 12 || month === 1 || month === 2) {
    season = "Winter";
} else if (month >= 3 && month <= 5) {
    season = "Summer";
} else if (month >= 6 && month <= 8) {
    season = "monsoon";
} else if (month >= 9 && month <= 11) {
    season = "pankhar";
} else {
    season = "Invalid month";
}
console.log("Month " + month + " is in " + season + ".");

// Program 13: Check if a person is eligible to vote based on age and citizenship
let age = 20;
citizen = true;


if (age >= 20) {
    if (citizen) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You must be a citizen to vote.");

    }
}
else {
    console.log("You are not old enough to vote.");
}
// Program 14: Check if a password meets the minimum length requirement
let pwd = "k5575@";

if (pwd.length >= 8) {
    console.log("Password is valid.");
}
else {
    console.log("Password must be at least 8 characters long.");
}
// Program 15: Check if a person is eligible to watch a movie based on age
let per_age = 20;
if (per_age >= 15) {
    console.log("You can watch this movie.");
}
else {
    console.log("You are too young to watch this movie.");
}
// Program 16: Check if a number is prime
let prime_num = 17;
let prime = true;
if (prime_num <= 1) {
    prime = false;
} else {
    for (let i = 2; i < prime_num; i++) {
        if (prime_num % i === 0) {
            prime = false;
            break;
        }
    }
}
if (prime) {
    console.log(prime_num + " is a prime number.");
} else {
    console.log(prime_num + " is not a prime number.");
}

// Program 17: Check if a number is within the range 10 to 20 (inclusive)
let range = 12;
if (range >= 10 && range <= 20) {
    console.log(range + " is within the range 10 to 20.");
}
else {
    console.log(range + " is outside the range 10 to 20.");
}
// Program 18: Calculate the area based on the shape type
let shape = "circle";
let area = 0;
if (shape === "circle") {
    let radius = 10;
    area = 22.7 * radius * radius;
    console.log("Area of the circle is: " + area);
} else if (shape === "rectangle") {
    let length = 5;
    let width = 7;
    area = length * width;
    console.log("Area of the rectangle is: " + area);
} else {
    console.log("Give proper shape name..");
}

// Program 19: Verify user login with username and password
let userName = "komal2332";
let pas = "k@5572";

if (userName === "komal2332" && pas === "k@5572") {
    console.log("User login successful.");
}
else {
    console.log("Invalid username or password.");
}

// Program 20: Check if a person meets multiple conditions for a special offer
let customer_age = 30;
let member_sts = true;
let purchase_amount = 250;
if (customer_age >= 25 && member_sts && purchase_amount >= 200) {
    console.log("Congratulations! You qualify for our special offer.");
} else {
    console.log("Sorry, you do not qualify for the special offer.");
}



//fibonacci series
let f,f1=0,f2=1,i=1;
while(i<=10){
    f=f1;
    f1=f+f2;
    f2=f;
    document.write(f + ", ");
    i++;
}