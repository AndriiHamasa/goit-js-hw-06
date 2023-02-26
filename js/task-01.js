const categoruEls = document.querySelector('#categories')

console.log(`Number of categories: ${categoruEls.children.length}`);
console.log(' ');

[...categoruEls.children].forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
    console.log(' ');
})

