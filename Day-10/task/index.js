//Activity 1

//Task 1: Add a click event listener to a button that changes the text content of paragraph
let button = document.querySelector("button");
let paragraph = document.querySelector("p");

button.addEventListener("click", () => {
  paragraph.textContent = "Hehehehehe";
});

// Task 2: Add a double click event listener to an image that toggles its visiblity
let image = document.querySelector("img");

image.addEventListener("dblclick", () => {
  image.style.visibility = "hidden";
});

// Activity 2

// Task 3: Add a mouseover event listener to an element that changes its background color
let divOver = document.querySelector("div.hover");

divOver.addEventListener("mouseover", () => {
  divOver.style.backgroundColor = "red";
});

// Task 4: Add a mouseleave event listener to an element that resets its background color
let divLeave = document.querySelector("div.leave");

divLeave.addEventListener("mouseleave", () => {
  divLeave.style.backgroundColor = "";
});

// Acitivity 3
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console
let input = document.querySelector("input.keyup");

input.addEventListener("keydown", (event) => {
  console.log(event.key);
});

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph
let input2 = document.querySelector("input.keyup");

input2.addEventListener("keyup", (event) => {
  console.log(event.key);
});

// Activity 4
// Task 7: Add a submit event listener to a form that prevents the default form submission and logs the form data to the console
let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let form = new FormData(form);
  form.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
});
