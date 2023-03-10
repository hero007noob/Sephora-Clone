// import validator from "validator";
import { ApiEndpoints } from "/SignUp/Apis.js";
window.onload = () => {
  document.getElementById("log-in-joinnow").addEventListener("click", login);
  setupInputListners();
};
document.querySelector(".checkBox").addEventListener("click", () => {
  document.querySelector(".checkBox").classList.toggle("checked");
});
document.getElementById("log-in-div").addEventListener("click", (event) => {
  console.log(event.target);
  if (event.target != document.getElementById("log-in-div")) return;
  document.getElementById("log-in-div").style.display = "none";
});
document.getElementById("log-in-close-btn").addEventListener("click", () => {
  document.getElementById("log-in-div").style.display = "none";
});
class createUser {
  constructor(email, password) {
    this.email = email;
    this.pass = password;
  }
}

async function login() {
  console.log("login");
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  validateEmail({ email, password });
}
async function validateEmail({ email: email, password: password }) {
  clearToolTips();
  let pass = true;
  let idPrefix = "log-in-";
  if (!validator.isEmail(email)) {
    pass = errorToolTipAct(idPrefix + "email");
  }
  if (!validator.isLength(password, { min: 6, max: 12 })) {
    pass = errorToolTipAct(idPrefix + "password");
  }
  if (pass) {
    let user = new createUser(email, password);
    let userObj = JSON.stringify({ user: user });
    localStorage.setItem("login_details", userObj);
    let res = await logInReq(userObj);
    if (res) alert("Log in Sucess");
    else alert("Log in Failed");
  }
}
function setupInputListners() {
  document.querySelectorAll("input").forEach((i) => {
    i.addEventListener("keydown", (elem) => {
      clearToolTips(elem.target.parentNode);
    });
  });
}
function clearToolTips(parent) {
  if (parent) {
    console.log("x", parent);
    parent.parentNode.style.borderColor = "rgb(190, 190, 190)";
    parent.querySelector("img").style.display = "none";
    parent.parentNode.querySelectorAll(".error-tooltip").forEach((tip) => {
      tip.style.display = "none";
    });
  } else
    document.querySelectorAll(".error-tooltip").forEach((tip) => {
      tip.style.display = "none";
    });
}
function errorToolTipAct(id) {
  console.log(id);
  let input = document.getElementById(id);
  input.querySelector("div > img").style.display = "block";
  input.style.borderColor = "#ce102c";
  let tip = document.getElementById(id).querySelector(".error-tooltip");
  tip.style.display = "block";
  return false;
}
async function logInReq(userObj) {
  try {
    let url = ApiEndpoints.login;
    console.log("url", url);
    console.log(userObj);
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: userObj,
    });
    console.log(await res.json());
    if (res.status === 200) {
      return true;
    }
  } catch (err) {
    console.log(err);
  }
}
