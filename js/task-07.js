const refs = {
    input: document.querySelector('#font-size-control'),
    textLabel: document.querySelector('#text'),
}

refs.input.addEventListener('input', (event) => {
    console.dir(`${event.currentTarget.value}px`);
    refs.textLabel.style.fontSize = refs.input.value + 'px';
    console.log(refs.input.value)
});