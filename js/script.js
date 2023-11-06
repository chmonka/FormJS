const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const reapassword = document.getElementById('reapassword');

form.addEventListener('submit', function(event){
    event.preventDefault();
    validateInputs();
});

const setError = function(element, message){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = function(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
  
};

const isValidEmail = function(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = function() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const reapasswordValue = reapassword.value.trim();

    if(usernameValue === '') {
        setError(username, 'Укажите имя');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Укажите email');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Укажите верный email');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Укажите пароль');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Пароль должен быть длинее 8 символов')
    } else {
        setSuccess(password);
    }

    if(reapasswordValue === '') {
        setError(reapassword, 'Подтвердите свой пароль');
    } else if (reapasswordValue !== passwordValue) {
        setError(reapassword, "Пароли не совпадают");
    } else {
        setSuccess(reapassword);
    }
    alert("Вы успешно вошли в систему")    
};

