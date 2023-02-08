// 1. потрібно щоб при натиснення на кнопку +1 змінювався спан на +1 число
// 2. при натиснені кнопки -1 з числа яке збережене у спані віднімалась одиниця

const decrementBtn = document.querySelector("button[data-action='decrement']");
const incrementBtn = document.querySelector("button[data-action='increment']");
const valueNum = document.querySelector("#value");
let counterValue = 0;
decrementBtn.addEventListener("click", handleClickDecrementBtn);
incrementBtn.addEventListener("click", handleClickIncrementBtn);
function handleClickDecrementBtn() {
    counterValue -= 1;
    return addMarkup(counterValue);
}
function handleClickIncrementBtn() {
    counterValue += 1;
    return addMarkup(counterValue);
}
function addMarkup(value) {
    return valueNum.innerHTML = `${value}`;
}