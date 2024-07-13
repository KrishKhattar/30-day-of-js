// feature request - 1

let number = 7;
let string ="helloWorld";
let boolean = false;
let jerseyNumber = 
{   rohit : 45,
    virat : 18,
    jadeja : 8
};
let array = [1,2,3,4];

console.log(number, typeof (number));
console.log(string,typeof (string));
console.log(boolean, typeof (boolean));
console.log(jerseyNumber, typeof (jerseyNumber));
console.log(array, typeof (array));

// feature request - 2

let bhuvi = 2;
const bumrah = 3;

console.log(bhuvi);
bhuvi = 5;

try {
    bumrah = 4;
}
catch(error) {
    console.log("unable to change wickets" ,error.message)
}