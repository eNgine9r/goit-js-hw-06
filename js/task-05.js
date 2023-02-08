const input = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    const checkNameLabel = event.currentTarget.value.trim();
    nameLabel.textContent = checkNameLabel ==='' ? 'Anonymous' : checkNameLabel;
}


