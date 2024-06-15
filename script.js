const colors = ["green", "red", "gray","orange", "blue", "yellow", "white", "pink", "violet"];
const button = document.getElementById("btn");
const color = document.querySelector(".color");
const textColor = document.querySelector("span");
const link = document.querySelector("a");

button.addEventListener('click', () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  textColor.style.color = colors[randomNumber];
});

const getRandomNumber = () => Math.floor(Math.random() * colors.length);