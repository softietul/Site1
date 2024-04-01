document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.querySelector('form');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Validate form fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Check if name, email, and message are not empty
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Check if email is valid
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If all validations pass, submit the form
        this.submit();
    });
});
// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(function(img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function() {
            img.removeAttribute('data-src');
        };
    });

    // Preload important resources
    const importantResources = [
        'style.css',
        'images/logo.png',
        'images/yoga.jpg',
        'images/badminton.jpg',
        'images/chess.jpg',
        'images/dice.jpg'
        // Add more resources as needed
    ];

    importantResources.forEach(function(resource) {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.href = resource;
        preloadLink.as = /\.css$/.test(resource) ? 'style' : 'image';
        document.head.appendChild(preloadLink);
    });
});
