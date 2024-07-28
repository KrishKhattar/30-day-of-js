// Activity 1
// Task 1

function outerFunction(outerVariable) {
  function innerFunction() {
    return `The value of the outer variable is: ${outerVariable}`;
  }

  return innerFunction;
}

const innerFunc = outerFunction("Hello, World!");

console.log(innerFunc());

// Task 2
function counter() {
  let count = 0;
  return {
    increment: function () {
      count++;
    },
    getValue: function () {
      return count;
    },
  };
}

// Task 3
function createUniqueIdGenerator() {
    let lastId = 0;

    return function() {
        lastId += 1;
        return lastId;
    };
}
const generateId = createUniqueIdGenerator();

console.log(generateId()); 
console.log(generateId()); 
console.log(generateId()); 

