const form = document.getElementById("form");
const passwordOne = document.getElementById("password1");
const passwordTwo = document.getElementById("password2");
const errorMessage = document.querySelector(".error-message");
const message = document.querySelector("#message");

let formValid = false;
let passwordMatch = false;

function validateForm() {
  // using constraint API
  formValid = form.checkValidity();
  //   console.log(formValid);
  if (!formValid) {
    message.textContent = "Please fill the blank fields";
    message.style.color = "red";
    errorMessage.style.borderColor = "red";
    return;
  }
  //   message.textContent = "Please fill the blank fields";
  //   message.style.color = "red";
  //   errorMessage.style.borderColor = "red";

  if (passwordOne.value === passwordTwo.value) {
    passwordMatch = true;
    passwordOne.style.color = "green";
    passwordTwo.style.color = "green";
    passwordOne.style.borderColor = "green";
    passwordTwo.style.borderColor = "green";
  } else {
    passwordMatch = false;
    passwordOne.style.color = "red";
    passwordTwo.style.color = "red";
    passwordOne.style.borderColor = "red";
    passwordTwo.style.borderColor = "red";
    message.textContent = "password doesnot match";
    message.style.color = "red";
    errorMessage.style.borderColor = "red";
    return;
  }

  if (formValid && passwordMatch) {
    message.textContent = "successful........";
    message.style.color = "green";
    message.style.color = "green";
    errorMessage.style.borderColor = "green";
  }
}

function storeData() {
  const client = {
    fullname: form.fullname.value,
    phonenumber: form.phonenumber.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
}

function processFormData(event) {
  event.preventDefault();

  //   method to validate the form.....................
  validateForm();
  if (formValid && passwordMatch) {
    storeData();
  }
}
// eventlistener....................................
form.addEventListener("submit", processFormData);
