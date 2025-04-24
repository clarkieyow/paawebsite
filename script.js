// Simple example: can be extended for interactivity (like dropdowns or form validation)
document.addEventListener('DOMContentLoaded', () => {
    console.log("Website loaded successfully!");
});

// JavaScript for burger menu toggle
document.getElementById('burger-menu').addEventListener('click', function() {
    var nav = document.querySelector('header nav');
    var burger = document.getElementById('burger-menu');
    
    nav.classList.toggle('active');  // Toggle the "active" class to show/hide the menu
    burger.classList.toggle('active');  // Toggle the "active" class to animate the burger menu
});
