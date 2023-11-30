function validateForm() {
    let inputs = document.querySelectorAll('input[required]');

    inputs.forEach(function(input) {
        let errorMessage = document.getElementById(input.id + '-error');
        let emptyErrorMessage = document.getElementById(input.id + '-empty-error');

        if (!input.value.trim()) {
            input.classList.add('error');
            if (errorMessage) errorMessage.style.display = 'none';
            if (emptyErrorMessage) emptyErrorMessage.style.display = 'block';
        } else {
            input.classList.remove('error');
            if (emptyErrorMessage) emptyErrorMessage.style.display = 'none';
        }
    });

    let emailInput = document.getElementById('mail');
    let emailErrorMessage = document.getElementById('mail-error');
    if (emailInput.value.trim() && !validateEmail(emailInput.value)) {
        emailInput.classList.add('error');
        emailErrorMessage.style.display = 'block';
    } else {
        emailInput.classList.remove('error');
        emailErrorMessage.style.display = 'none';
    }

    let phoneInput = document.getElementById('phone');
    let phoneErrorMessage = document.getElementById('phone-error');
    if (phoneInput.value.trim() && !validatePhone(phoneInput.value)) {
        phoneInput.classList.add('error');
        phoneErrorMessage.style.display = 'block';
    } else {
        phoneInput.classList.remove('error');
        phoneErrorMessage.style.display = 'none';
    }

    let innInput = document.getElementById('inn');
    let innErrorMessage = document.getElementById('inn-error');
    if (innInput.value.trim() && !validateINN(innInput.value)) {
        innInput.classList.add('error');
        innErrorMessage.style.display = 'block';
    } else {
        innInput.classList.remove('error');
        innErrorMessage.style.display = 'none';
    }
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function validatePhone(phone) {
    return /^\+?\d{1,3} ?\d{3} ?\d{3} ?\d{2} ?\d{2}$/.test(phone);
}

function validateINN(inn) {
    return /^\d{14}$/.test(inn);
}