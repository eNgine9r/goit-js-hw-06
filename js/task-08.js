// const form = document.querySelector('.login-form');

// form.addEventListener('submit', onFormSubmit)

// function onFormSubmit (event) {
//     event.preventDefault();

//     // const formElements = event.currentTarget.elements;
//     // console.dir(formElements);

//     // const mail = formElements.email.value;
//     // const password = formElements.password.value;

//     // console.log(mail, password);
//     const formData = new FormData(event.currentTarget);
//     formData.forEach((value, name) => {
//         console.log('onFormSubmit -> name', name);
//         console.log('onFormSubmit -> value', value);
//     });
// };


const form = document.querySelector(".login-form");
const loginFormSubmitHeandler = (event) => {
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
form.addEventListener("submit", loginFormSubmitHeandler);