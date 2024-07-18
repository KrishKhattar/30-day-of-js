// Activity 1:

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console
let arr = [1, 2, 3, 4, 5];

console.log(arr);

// Task 2: Access the first and the last element of the array and log the result
console.log(arr[0], arr[4]);

// Task 3:
arr.push(6);
console.log(arr);

// Task 4:
arr.pop();
console.log(arr);

// Task 5:
arr.shift();
console.log(arr);

// Task 6:
arr.unshift(0);
console.log(arr);

// Activity 3

// Task 7:
const mappedArray = arr.map((x) => x * 2);
console.log(mappedArray);

// Task 8:
const filteredArray = arr.filter((x) => x % 2 === 0);
console.log(filteredArray);

// Task 9:
const reducedArray = arr.reduce((sum, x) => sum + x, 0);
console.log(reducedArray);

// Activity 4

// Task 10:
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Task 11:
arr.forEach((e) => {
  console.log(e);
});

// Task 12:
let arr2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arr2D);

// Task 13
console.log(arr2D[0][2]);
