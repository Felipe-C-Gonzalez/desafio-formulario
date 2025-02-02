const inputs = document.querySelectorAll('.input-text');
const submitButton = document.querySelector('.btn-toSend');

submitButton.addEventListener('click', function (event) {
    let formIsValid = true;

    inputs.forEach(function (input) {
        const errorMessage = input.nextElementSibling;

        if (input.value === '') {
            input.classList.add('without-fill');
            errorMessage.style.display = 'block';
            formIsValid = false;
        } else {
            input.classList.remove('without-fill');
            input.classList.add('filled')
            errorMessage.style.display = 'none';
        }
    })

    if (!formIsValid) {
        event.preventDefault();
    }
})

