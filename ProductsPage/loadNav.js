import Navbar from "/components/navBar.js";
const navbar = new Navbar();
document.getElementById("navbar__template").appendChild(navbar.renderElement());

const src = `console.log("im straight")`;
let x = document.createElement("script");
x.innerHTML = src;
document.querySelector("body").appendChild(x);
console.log(x, "dfdf");
