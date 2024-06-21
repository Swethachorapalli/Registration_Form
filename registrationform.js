document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();// cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur
    
    let hasError = false;

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    if (username.length < 5) {
        usernameError.textContent = 'Username must be at least 5 characters long.';
        hasError = true;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {//it tests the pattern of the mail is equal to the pattern we given
        emailError.textContent = 'Please enter a valid email address.';
        hasError = true;
    }

    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        hasError = true;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        hasError = true;
    }

    if (!hasError) {
        alert('Form submitted successfully!');
    }
});