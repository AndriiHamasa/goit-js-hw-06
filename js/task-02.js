const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEls = document.querySelector('#ingredients');

const arrayOfVegtsEl = [];

ingredients.forEach((str) => {
  let vegtEl = document.createElement('li');
  vegtEl.textContent = str;
  vegtEl.classList.add('item');

  arrayOfVegtsEl.push(vegtEl);
})

ingredientsEls.append(...arrayOfVegtsEl);
