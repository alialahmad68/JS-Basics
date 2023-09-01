let red = document.querySelector(".red");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");
let text = document.getElementById("text");

red.addEventListener("click", function(){
  text.style.color = "red";
});

blue.addEventListener("click", function(){
  text.style.color = "blue";
});

green.addEventListener("click", function(){
  text.style.color = "green";
});