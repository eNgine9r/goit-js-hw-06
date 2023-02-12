
const form = document.querySelector(".login-form");
const loginFormSubmit = (event) => {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const formData = {
    email,
    password,
  };
  email === "" || password === ""
    ? alert("У формі є незаповнені поля")
    : console.log(formData);
  event.currentTarget.reset();
};
form.addEventListener("submit", loginFormSubmit);