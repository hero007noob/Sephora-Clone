// import validator from "validator";
class ApiEndpoints {
  static signup =
    "https://beta-sephora-express-cr5j5yn2ca-uc.a.run.app/api/v1/user/signup";
  static login =
    "https://beta-sephora-express-cr5j5yn2ca-uc.a.run.app/api/v1/user/login";
}
window.onload = () => {
  document.getElementById("sign-up-joinnow").addEventListener("click", signup);
  setupInputListners();
  addDays();
  addMonths();
};
document.querySelector(".checkBox").addEventListener("click", () => {
  document.querySelector(".checkBox").classList.toggle("checked");
});
document.getElementById("sign-up-div").addEventListener("click", (event) => {
  console.log(event.target);
  if (event.target != document.getElementById("sign-up-div")) return;
  document.getElementById("sign-up-div").style.display = "none";
});
document.getElementById("sign-up-close-btn").addEventListener("click", () => {
  document.getElementById("sign-up-div").style.display = "none";
});
class createUser {
  constructor(fname, lname, phone, email, password, month, day, zip) {
    this.name = fname + " " + lname;
    this.email = email;
    this.pass = password;
    this.phone = phone;
    this.birth_month = month;
    this.birth_day = day;
    this.zip = zip;
  }
}
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
class Option {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
  render() {
    return `<option value="${this.value}">${this.name}</option>`;
  }
}
function addDays() {
  let select = document.getElementById("sign-up-day-select");
  select.innerHTML = "";
  select.addEventListener("change", () => {
    document.querySelector("#sign-up-day > p").style.display = "none";
  });
  select.innerHTML += `<option disabled selected  value=" "> </option>`;
  for (let i = 1; i <= 31; i++) {
    let option = new Option(i, i);
    select.innerHTML += option.render();
  }
}
function addMonths() {
  let select = document.getElementById("sign-up-month-select");
  select.addEventListener("change", () => {
    document.querySelector("#sign-up-month > p").style.display = "none";
  });
  select.innerHTML = "";
  select.innerHTML += `<option disabled selected  value=" "> </option>`;
  for (let i = 1; i <= 12; i++) {
    let option = new Option(months[i - 1], i);
    select.innerHTML += option.render();
  }
}

async function signup() {
  console.log("signup");
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let phone = document.getElementById("phone").value;
  let month = document.getElementById("sign-up-month-select").value;
  let day = document.getElementById("sign-up-day-select").value;
  let zip = document.getElementById("zip").value;
  validate({ fname, lname, email, password, phone, month, day, zip });
}
async function validate({
  fname: fname,
  lname: lname,
  email: email,
  password: password,
  phone: phone,
  month: month,
  day: day,
  zip: zip,
}) {
  clearToolTips();
  let pass = true;
  let idPrefix = "sign-up-";
  console.log("ggggg;", validator);
  if (!validator.isEmail(email)) {
    pass = errorToolTipAct(idPrefix + "email");
  }
  if (!validator.isLength(fname, { min: 1 })) {
    pass = errorToolTipAct(idPrefix + "first-name");
  }
  if (!validator.isLength(lname, { min: 1 })) {
    pass = errorToolTipAct(idPrefix + "last-name");
  }
  if (!validator.isLength(password, { min: 6, max: 12 })) {
    pass = errorToolTipAct(idPrefix + "password");
  }
  if (!validator.isLength(month, { min: 1 })) {
    pass = errorToolTipAct(idPrefix + "month");
  }
  if (!validator.isLength(day, { min: 1 })) {
    pass = errorToolTipAct(idPrefix + "day");
  }
  if (pass) {
    let user = new createUser(
      fname,
      lname,
      phone,
      email,
      password,
      month,
      day,
      zip
    );
    let userObj = JSON.stringify({ user: user });
    localStorage.setItem("user_details", userObj);
    let res = await signUpReq(userObj);
    if (res) alert("Sign up Sucess");
    else alert("Sign up Failed");
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
    if (parent.querySelector("img"))
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
async function signUpReq(userObj) {
  try {
    let url = ApiEndpoints.signup;
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
      document.getElementById("sign-up-div").style.display = "none";
      return true;
    }
  } catch (err) {
    console.log(err);
  }
}
