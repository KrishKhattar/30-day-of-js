// Activity 1

// Task 1
let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};

console.log(book);

// Task 2
console.log(book.title);
console.log(book.author);

// Activity 2
// Task 3
const aboutBook = (book) => {
  return `The book ${book.title} was written by ${book.author}`;
};
console.log(aboutBook(book));

// Task 4
const updateYear = (newYear) => {
  book.year = newYear;
};
updateYear(1926);
console.log(book);

// Activity 3
// Task 5
let library = {
  book1: {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  book2: { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  book3: { title: "1984", author: "George Orwell", year: 1949 },
};

// Task 6
console.log(library.book1.title);
console.log(library.book2.title);
console.log(library.book3.title);

// Activity 4
// Task 7: this keyword
const bookDetails = () => {
  return `The book ${this.title} was published in the year ${this.year}`;
};

console.log(bookDetails(library.book1));
console.log(bookDetails.call(library.book2));
console.log(bookDetails.call(library.book3));
