const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', (event) => {
    console.log(inputEl.classList.length);
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
        return;
    }

    console.log(`${event.currentTarget.value.length}, ${Number(inputEl.dataset.length)}`)
    inputEl.classList.add('invalid');
})


/* код ниже, для того, чтобы не перезагружать страничку, когда вдруг не правильно ввел
количество знаков */
inputEl.addEventListener('focus', (event) => {
    if (inputEl.classList.length !== 0) {
        inputEl.classList.contains('valid') ? inputEl.classList.remove('valid') : inputEl.classList.remove('invalid');
    }
    return;
})