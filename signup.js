const form = document.getElementById('signup-form');

const email = document.getElementById('email');
const password = document.getElementById('psw');
const confirmPassword = document.getElementById('psw-repeat');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!email.value) {
        alert('Email is required');
        return;
    }

    if (!password.value) {
        alert('Password is required');
        return;
    }

    if (!/[A-Za-z]/.test(password.value)) {
        alert('Password must contain at least one letter.');
        return;
    }

    if (!/[0-9]/.test(password.value)) {
        alert('Password must contain at least one number.');
        return;
    }

    if (!/[!@#$%^&*_]/.test(password.value)) {
        alert('Password must contain at least one special character.');
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert('Passwords do not match');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        alert('Email must be a valid email address.');
        return;
    }

    alert('Signup successful');

    window.location.href = 'index.html';
});
