const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener('submit', e =>  {
    e.preventDefault();

    let firstName = fname.value.trim();
    let lastName = lname.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();

    if (firstName === '') {
        errorFunc(fname, 'First Name field cannot be empty');
    } else {
        successFunc(fname);
    }

    if (lastName === '') {
        errorFunc(lname, 'Last Name field cannot be empty');
    } else {
        successFunc(lname);
    }

    if (emailValue === '') {
        errorFunc(email, 'Email field cannot be empty');
    } else if (!emailValue.match(pattern)) {
        errorFunc(email, 'Looks like this is not an email');
    } else {
        successFunc(email);
    }

    if (passwordValue === '') {
        errorFunc(password, 'Password field cannot be empty');
    } else {
        successFunc(password);
    }
});

function errorFunc(req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    req.classList.add('error');
    span.classList.add('error-text');
    if (req !== email) {
        req.value = '';
    } else {
        req.style.color = "hsl(0, 100%, 74%)";
    }
}

function successFunc(req) {
    req.classList.add('success');
}
