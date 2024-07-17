// Activity 1

// Task 1: Function to check if a number is even or odd and log the result in console

function checkEvenOdd(num)
{
    if (num % 2 == 0)
    {
        console.log("The number is even");
    }
    else
    {
        console.log("The number is odd");
    }
}
checkEvenOdd(10);

// Task 2: Function to calculate square of a number and return the result
function square(num)
{
    return num * num;
}
console.log(square(5));

// Activity 2

// Task 3: Function expression to find maximum of two numbers and log the result
function max(num1, num2)
{
    if (num1 > num2)
    {
        console.log(`${num1} is greater`);
    }
    else
    {
        console.log(`${num2} is greater`);
    }
}
max(10, 20);

// Task 4: Function expression to concatenate two strings and return the result
function concat(str1, str2)
{
    return str1 + str2;
}
console.log(concat("Hello", "World"));

// Activity 3

// Task 5: Arrow Function to calculate sum of two numbers and return the result
sum = (num1, num2) => num1 + num2;
console.log(sum(10, 20));

// Task 6: Arrow function to check if a string contains a specific character and return a boolean value
checkChar = (str, char) => str.includes(char);
console.log(checkChar("Hello", "e"));

// Activity 4

// Task 7: Function which takes two values and returns product of them. Provide default value of second parameter
multiply = (num1, num2 = 10) => num1 * num2;
console.log(multiply(5));

// Task 8: Function that takes a person's name and age and returns a message with the name and age
function greet(name, age = 22)
{
    return `Hello ${name}, you are ${age} years old`;
}
console.log(greet("John"));

// Activity 5

// Task 9: Function that takes a function and a number n as arguments and calls the function n times
function func(n) {
    console.log(`Lower order function executed x${n}`)
  }
function repeatFuncNTimes(func, n) {
    for(let i = 1; i <= n; i ++){
      func(i);
    }
  }
  repeatFuncNTimes(func, 5);
  
  // Task 10: Function that takes two functions as arguments and returns the result of the second function called with the result of the first function
function multiplyByFifty (n){
    return n * 50;
  }
  function addTen (n){
    return n + 10;
  }
  function acceptTwoFunctions(n, func1, func2){
    const num = func1(n);
    return func2(num); 
  }
  console.log(`(34 * 50) + 10 = ${acceptTwoFunctions(34, multiplyByFifty, addTen)}`);