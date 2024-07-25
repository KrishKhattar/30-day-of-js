// Activity 1
// Task 1
const sum = (a,b) => a+b ; 

export { sum , person };
// Task 2
const person = {
   name: "John",
   age: 20,
   greetings: function() {
       return `Hello, my name is ${this.name} and I am ${this.age} years old`;
   }
}


// Task 3

function sub(a,b){
   return a-b;
}

function mul(a,b){
   return a*b;
}

export {sub,mul};

// Task 4

function divide(a,b){
   return a/b;
}

export default divide;

// Task 5
export const PI = 3.14159;
export const E = 2.71828;

