// Activity 1: If-Else Statement

// Task 1
let num = 18;

if (num > 0) {
    console.log("The number is positive");
} else if (num < 0) {
    console.log("The number is negative");
} else {
    console.log("The number is zero");
}

// Task 2
let age = 19;

if (age >= 18) {
    console.log("You are eligible for voting");
} else {
    console.log("You are not eligible for voting");
}

// Activity 2: Nested If-Else
let num1 = 10, num2 = 20, num3 = 30;

if (num1 > num2) {
    if (num1 > num3) {
        console.log("num1 is greatest");
    }
}
if (num2 > num1) {
    if (num2 > num3) {
        console.log("num2 is greatest");
    }
}
if (num3 > num1) {
    if (num3 > num2) {
        console.log("num3 is greatest");
    }
}

// Activity 3: Switch Case
// Task 4
let day = 3;

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}

//Task 5
let score = 90;

switch (score){
    case 90:
        console.log("Grade A");
        break;
    case 80:
        console.log("Grade B");
        break;
    case 70:
        console.log("Grade C");
        break;
    case 60:
        console.log("Grade D");
        break;
    default:
        console.log("Grade F");
}

// Activity 4
// Task 6
let num4 = 10;  
let result = (num4 % 2 === 0) ? "Even" : "Odd";
console.log(result);

//Activity 5
// Task 7
let year = 2004;
if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}