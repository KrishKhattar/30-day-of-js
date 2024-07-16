// Activity 1: For Loop

// Task 1: WAP to print from 1 to 10 using for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2: WAP to print the multiplication table of 5 using for loop
for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
}

// Activity 2: While loop

// Task 3: WAP to calculate the sum of numbers from 1 to 10 using a while loop
let sum = 0; 
let i = 1;
while (i <= 10) {
    sum += i;
    i++;
}
console.log(sum);

// Task 4: WAP to print numbers from 10 to 1 using a while loop
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}
console.log("\n");

// Activity 3: Do while loop

// Task 5: WAP to print numbers from 1 to 5 using a do while loop
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);
console.log("\n");

// Task 6: WAP to calculate factorial of a number using do while loop
let l = 1;
let m = 5;
let factorial = 1;
do {
    factorial *= l;
    l++;
} while (l <= m);
console.log(factorial);
console.log("\n");

// Activity 4: Nested Loops

// Task 7: WAP to print a pattern of stars using nested for loop
for (let i = 1; i <= 4; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += '* '
    }
    console.log(str);
}

// Activity 5: Loop Control Statements

// Task 8: WAP to print numbers from 1 to 10, but skip 5 using continue statement
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}
console.log("\n");

// task 9: WAP to print numbers from 1 to 10, but stop the loop when number is 7 using break statement
for (let i = 1; i <= 10; i++) {
    if (i == 7) {
        break;
    }
    console.log(i);
}   
