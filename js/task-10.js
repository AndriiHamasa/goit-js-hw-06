function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let widtrAndHeight = 20;

  boxesEl.insertAdjacentHTML('afterbegin', '<div></div>'.repeat(amount));
  [...boxesEl.children].forEach((box) => {
    
    widtrAndHeight += 10;
    box.style.width = `${widtrAndHeight}px`;
    box.style.height = `${widtrAndHeight}px`;
    box.style.backgroundColor = getRandomHexColor();
  })
}

const apiEl = document.querySelector('#controls');
const boxesEl = document.querySelector('#boxes');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const inputEl = apiEl.firstElementChild;

createBtnEl.addEventListener('click', () => {
  createBoxes(inputEl.value);
})

destroyBtnEl.addEventListener('click', () => {
  inputEl.value = 0;
  boxesEl.innerHTML = `<div id="boxes"></div>`;
})

