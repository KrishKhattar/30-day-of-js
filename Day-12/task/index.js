// Activity 1

// Task 1: Write a function that intentially throws an error and use try-catch to handle the error

function throwError() {
  throw new Error("thoda sa bkl hai kya");
}

try {
  throwError();
} catch (error) {
  console.log(error);
}

// Task 2
function divideThrowError(a = 5, b = 0) {
  return a / b;
}

try {
  divideThrowError();
} catch (error) {
  console.log(error);
}

// Activity 2
// Task 3: Finally block
function doIt() {
  try {
    return 1;
  } finally {
    return 2;
  }
}

doIt();

// Activity 3
// Task 4: Create a custom error class that extends the built in error class. Throw an instance of this error class in a function and handle with try catch

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function throwCustomError() {
  throw new CustomError("This is a custom error");
}

try {
  throwCustomError();
} catch (error) {
  console.log(error);
}

// Task 5
function validateInput(input) {
  if (!input) {
      throw new CustomError("Input cannot be empty");
  }
  return true;
}

try {
  validateInput("");
} catch (error) {
  console.error("Caught a validation error:", error.message);
}

// Activity 4 : Promise karne ke baad karte hain
// Task 6
const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
      const success = true; // Change this to false to test rejection
      if (success) {
          resolve("Promise resolved successfully!");
      } else {
          reject("Promise rejected.");
      }
  }, 2000);
});

myPromise.then(function(message) {
  console.log(message);
}).catch(function(error) {
  console.log("Error:", error);
})


// Task 7
async function handleRandomPromise() {
  try {
      const message = await randomPromise;
      console.log("Passed:",message);
  } catch (error) {
      console.error("Caught an error:", error);
  }
}

// Activity 5

// Task 8: use the fetch api to request data from invalid url and handle using .catch()
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Task 9:

const response = fetch("https://pokeapi.co/api/v2/pokemon/ditto")

async function fetchData(){
    try{
        const data = await response
        console.log(data)
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

fetchData()