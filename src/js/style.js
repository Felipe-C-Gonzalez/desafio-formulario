const formField = document.querySelectorAll('.input-text');
const submitButton = document.querySelector('.btn-toSend');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    formField.forEach((input) => {
        const errorMessage = input.nextElementSibling;

        if (input.value !== '') {
            input.classList.remove('without-fill');
            input.classList.add('filled');
            errorMessage.classList.remove('show')


        } else {
            input.classList.remove('filled');
            input.classList.add('without-fill');
            errorMessage.classList.add('show');
        }
    })
})

