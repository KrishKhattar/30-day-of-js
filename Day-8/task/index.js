// Activity 1:

// Task 1
let personName = "Harsh";
let personAge = 25;

console.log(`${personName} is ${personAge} years old`);

// Task 2
console.log(`first line,
second line`);

//Activity 2

// Task 3
let arr = [1, 2, 3, 4, 5];
let [a, b, c] = arr;

console.log(a, b, c);

// Task 4
let book = { title: "The Alchemist", author: "Paulo Coelho", year: 1988 };
let { title, author } = book;

console.log(title, author);

// Activity 3
// Task 5
let newArr = [...arr, 6, 7, 8, 9];
console.log(newArr);

// Task 6: rest operator

// Activity 4
// Task 7
function product(a, b = 1) {
  return a * b;
};
console.log(product(5));
console.log(product(5, 2));

// Task 8
const myName = "Krish";
const myAge = 22;
const myFunction = () => console.log("Hello");
const myObject = {myName, myAge, myFunction};
console.log("Object via Object Enhanced Literals:", myObject);
// Task 9
const myNewObject = {
  myName,
  myAge,
  isAdult: myAge >= 18,
}
console.log("Object with Computer Properties:", myNewObject);