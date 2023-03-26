// get the main element 
const main = document.querySelector("main");

// create an array of colors
const colors = ["#8e44ad", "#2c3e50", "#16a085", "#f1c40f", "#d35400"];

// add a click event listener to the body
document.body.addEventListener("click", () => {
  // get a random color from the array
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  // set the background color of the main element to the random color
  main.style.backgroundColor = randomColor;
});
