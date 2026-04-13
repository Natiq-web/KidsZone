// Select the login form
let loginForm = document.querySelector('.login-form');

// Select the login button
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    // Ensure navbar class is removed if needed
    let navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.classList.remove('active');
    }
};

// Function to reset form fields
function resetForm() {
    let emailField = loginForm.querySelector('input[type="email"]');
    let passwordField = loginForm.querySelector('input[type="password"]');
    emailField.value = '';  // Clear email field
    passwordField.value = '';  // Clear password field
}

// Add event listener for form submission
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from reloading the page

    // Get input values
    let email = loginForm.querySelector('input[type="email"]').value;
    let password = loginForm.querySelector('input[type="password"]').value;

    // Check if fields are not empty
    if (email && password) {
        alert('Successfully logged in!');
        resetForm(); // Clear form fields after successful login
    } else {
        alert('Please enter both email and password.');
    }
});



let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


