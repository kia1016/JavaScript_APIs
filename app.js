console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let input = document.getElementById("search");
let image = document.getElementById("gif");
const btn = document.getElementById("submitSearch");
let apiKey = prompt("Please enter your api key");

btn.addEventListener("click", function () {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${input.value}`
  )
    .then((response) => response.json())
    .then((result) => (image.src = result.data.images.original.url))
    .catch((error) => console.log(error));
});
