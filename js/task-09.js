const spanText = document.querySelector('.color');
const buttonClick = document.querySelector('.change-color');
const widgetBody = document.querySelector('.widget');

buttonClick.addEventListener('click', onInputChange);
function onInputChange () {
  widgetBody.style.backgroundColor = getRandomHexColor();
  spanText.textContent = widgetBody.style.backgroundColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}