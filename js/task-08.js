const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    if (formEl.elements[0].value === '' || formEl.elements[1].value === '') {
        alert('Всі поля повинні бути заповнені!!!');
        return;
    }

    console.log({
        [formEl.elements[0].name]: formEl.elements[0].value,
        [formEl.elements[1].name]: formEl.elements[1].value,
    })

    event.target.reset();
})