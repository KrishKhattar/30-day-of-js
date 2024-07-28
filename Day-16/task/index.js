// Activity 1

// Task 1

function factorial(num) {
  if (num === 0) {
    return 1;
  } else if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(5));

// Task 2
function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
const numTerms = 10;
const fibonacciSeries = [];

for (let i = 0; i < numTerms; i++) {
  fibonacciSeries.push(fibonacci(i));
}
console.log(fibonacciSeries);

// Activity 2

// Task 3
function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
}

const array = [1, 2, 3, 4, 5];
console.log(sumArray(array));

//Task 4
function findMax(arr, n) {
  if (n === 1) {
    return arr[0];
  } else {
    return Math.max(arr[n - 1], findMax(arr, n - 1));
  }
}

const n = array.length;
console.log("The maximum element is:", findMax(array, n));

// Activity 3
// Task 5
function reverseString(str) {
  if (str === "" || str.length === 1) {
    return str;
  } else {
    return reverseString(str.substring(1)) + str[0];
  }
}
const inputString = "hello";
console.log("The reversed string is:", reverseString(inputString));


// Task 6
function isPalindrome(str, left = 0, right = str.length - 1) {
    if (left >= right) {
        return true;
    }
    if (str[left] !== str[right]) {
        return false;
    }
    return isPalindrome(str, left + 1, right - 1);
}

const palindromeInputString = "racecar";
const palindromeResult = isPalindrome(inputString);

console.log(`Is the string "${palindromeInputString}" a palindrome?`, palindromeResult); // Output: Is the string "racecar" a palindrome? true

//Task 7
function binarySearch(arr, target, low, high) {
  if (low > high) {
    return -1;
  }
  const mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, low, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, high);
  }
}

const arr = [1, 3, 5, 7, 9, 11, 13];
const target = 7;
const result = binarySearch(array, target, 0, array.length - 1);

if (result !== -1) {
  console.log(`Element found at index: ${result}`); 
} else {
  console.log("Element not found in the array");
}

//task 8
function countOccurrences(arr, target, index = 0) {
  if (index === arr.length) {
    return 0;
  }
  const count = arr[index] === target ? 1 : 0;
  return count + countOccurrences(arr, target, index + 1);
}

const occurArray = [1, 2, 3, 4, 7, 2, 2, 5, 2];
const occurTarget = 2;
const occurResult = countOccurrences(occurArray, occurTarget);

console.log(
  `The target element ${occurTarget} occurs ${occurResult} times in the array.`
); // Output: The target element 2 occurs 4 times in the array.
