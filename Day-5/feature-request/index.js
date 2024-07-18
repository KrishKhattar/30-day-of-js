//Feature Request 1:
function checkEvenOdd(num) {
  if (num % 2 == 0) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
}
checkEvenOdd(10);

//Feature Request 2:
function square(num) {
  return num * num;
}
console.log(square(5));

//Feature Request 3:
function concat(str1, str2) {
  return str1 + str2;
}
console.log(concat("Hello", "World"));

// Feature Request 4:
sum = (num1, num2) => num1 + num2;
console.log(sum(10, 20));

// Feature Request 5:
function func(n) {
  console.log(`Lower order function executed x${n}`);
}
function repeatFuncNTimes(func, n) {
  for (let i = 1; i <= n; i++) {
    func(i);
  }
}
repeatFuncNTimes(func, 5);