// Feature Request 1
let arr = [1, 2, 3, 4, 5];

arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(0);
console.log(arr);

// Feature Request 2
const mappedArray = arr.map((x) => x * 2);
console.log(mappedArray);

const filteredArray = arr.filter((x) => x % 2 === 0);
console.log(filteredArray);

const reducedArray = arr.reduce((sum, x) => sum + x, 0);
console.log(reducedArray);

// Feature Request 3
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach((e) => {
  console.log(e);
});

// Feature Request 4
let arr2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arr2D);

arr2D[0][2] = 10;
console.log(arr2D);
