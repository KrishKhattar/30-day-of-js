// Activity 1
// Task 1   

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }

    // Task 5
    static staticGreeting()
    {
        console.log(`Greetings`)
    }

    // Task 2
    updateAge(age){
        this.age = age;
        console.log(`age is ${this.age}`);
    }

    // task 7
    get FullName(){
        return `${this.name}`;
    }

    set FullName(name){
        this.name = name;
    }
}

// Activity 2
// Task 3
 class Student extends Person {
    constructor(studentId, name, age){
        super(name, age);
        this.studentId = studentId;
        this.studentCount++;

    }
    displayStudentId(){
        console.log(`Student ID: ${this.studentId}`);
    }

    greeting(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old and student id is ${this.studentId}`);
    }

        //task 6
        static studentCount = 0;
    
 }

 let student = new Student(1, "John", 20);
 console.log(student.greeting());
 student.displayStudentId();
