// Program 1: Check if a number is positive
let num = 10;
if (num > 0) {
    console.log("Number is Positive");

} else {
    console.log("Number is Negative");

}
// Program 2: Check if a number is even or odd using if-else
let a = 8;
if (a % 2 === 0) {
    console.log("Number is even");

} else {
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

} else if (temp >= 20) {
    console.log("temperature: " + temp + " temperature is Warm");
} else {
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
} else {
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
} else {
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
} else {
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
} else {
    console.log("You are not old enough to vote.");
}