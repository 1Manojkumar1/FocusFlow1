// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get('email');

// Log the URL and email value to the console for debugging
console.log("Current URL:", window.location.href);
console.log("Email parameter:", email);

// If the email is present in the URL, display it in the message
if (email) {
    document.getElementById('welcome-message').textContent = `Thank you for signing up with the email: ${email}`;
} else {
    document.getElementById('welcome-message').textContent = "We could not retrieve your email. Please try again.";
}
// Mobile menu toggle
const menuButton = document.querySelector('.menu-button');
const navList = document.querySelector('.nav-list');

menuButton.addEventListener('click', () => {
    navList.classList.toggle('active');
});
