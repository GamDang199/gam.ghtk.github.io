var firstname = document.querySelector('#firstname');
var lastname = document.querySelector('#lastname');
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirmPassword');
var form = document.querySelector('#form');

const showError = (input, message) => {
    let parent = input.parentElement;
    let err = parent.querySelector('span')
    parent.classList.add('error');
    err.innerText =  message;
}

const showSuccess = (input) => {
    let parent = input.parentElement;
    let err = parent.querySelector('span')
    parent.classList.remove('error');
    err.innerText = '';
}

const checkEmptyError = (listInput) => {
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();
        if(!input.value) {
            isEmptyError = true;
            showError(input, 'Khong duoc de trong');
        } else {
            showSuccess(input)
        }
    });
    return isEmptyError;
}

const checkEmail = (input) => {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    input.value = input.value.trim();
    let isEmailError = !regexEmail.test(input.value);
    if(regexEmail.test(input.value)) {
        showSuccess(input);
    } else {
        showError(email, 'Email khong dung dinh dang');
    }
    return isEmailError;
}

const checkLength = (input, min) => {
    input.value = input.value.trim();
    if(input.value.length < min) {
        showError(input, `Phai co it nhat ${min} ky tu`);
        return true;
    }
    showSuccess(input);
    return false;
}

const checkMatchPassword = (passwordInput, cPasswordInput) => {
    console.log(passwordInput);
    console.log(cPasswordInput);
    if(passwordInput.value.trim() !== cPasswordInput.value.trim()) {
        showError(cPasswordInput, 'Mat khau khong trung khop');
        return true;
    }
    return false;
}

const checkDataBlur = (input) => {
    
   $(`#${input.id}`).blur(() => {
    if(input.value == "") {
        showError(input, "Khong duoc de trong")
    } else {
        showSuccess(input)
    }
   })
}

const checkDataChange = (input) => {
    $(`#${input.id}`).on('input',(e) => {
        showSuccess(input);
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isEmptyError = checkEmptyError([firstname, lastname, username, email, password, confirmPassword]);
    let isEmailError = checkEmail(email);
    let checkLengthPassword = checkLength(password, 8);
    let isMatchPass = checkMatchPassword(password, confirmPassword);
    
})

window.onload = (e) => {
    checkDataBlur(firstname);
    checkDataBlur(lastname);
    checkDataBlur(username);
    checkDataBlur(email);
    checkDataBlur(password);
    checkDataBlur(confirmPassword);
    checkDataChange(firstname);
    checkDataChange(lastname);
    checkDataChange(username);
    checkDataChange(email);
    checkDataChange(password);
    checkDataChange(confirmPassword);
}


