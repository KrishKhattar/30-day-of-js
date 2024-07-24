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
