let counterValue = 0;

const counterEl = document.querySelector('#counter');

const decBtnEl = counterEl.firstElementChild;
const incBtnEl = counterEl.lastElementChild;
const valueEl = decBtnEl.nextElementSibling;

decBtnEl.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
})

incBtnEl.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
})