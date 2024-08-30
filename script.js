//!Creating a HTML Element

const heading = document.createElement("h1");
const div = document.createElement("div");
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
const btn4 = document.createElement("button");

//!Adding the Content

heading.innerHTML = "Event Listener";
btn1.innerHTML = "Red";
btn2.innerHTML = "Green";
btn3.innerHTML = "Blue";
btn4.innerHTML = "Reset";

//!Adding Attributes

heading.setAttribute("id", "head");
div.setAttribute("id", "container");
div1.setAttribute("id", "circle");
div2.setAttribute("id", "box");
btn1.setAttribute("id", "red");
btn1.setAttribute("class", "btn");
btn2.setAttribute("id", "green");
btn2.setAttribute("class", "btn");
btn3.setAttribute("id", "blue");
btn3.setAttribute("class", "btn");
btn4.setAttribute("id", "reset");
btn4.setAttribute("class", "btn");

//!Appending elements

div1.appendChild(div2);
div.appendChild(div1);
div.append(btn1, btn2, btn3, btn4);
document.body.append(heading, div);

//!Javascript function

const circle = document.getElementById("circle");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const reset = document.getElementById("reset");

const head = document.getElementById("head");

head.addEventListener("mousemove", () => {
  head.style.backgroundColor = "#ffffff";
  head.style.color = "#000000";
});
red.addEventListener("mousemove", () => {
  container.style.backgroundColor = "red";
  box.style.backgroundColor = "red";
});
blue.addEventListener("mousemove", () => {
  container.style.backgroundColor = "blue";
  box.style.backgroundColor = "blue";
});
green.addEventListener("mousemove", () => {
  container.style.backgroundColor = "green";
  box.style.backgroundColor = "green";
});
reset.addEventListener("mousemove", () => {
  container.style.backgroundColor = "#ffffff";
  box.style.backgroundColor = "#ffffff";
});
